import { createContext, ReactNode, useEffect, useState } from "react";

export type TransactionTypes = {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
};

type TransactionContextProps = {
  transactions: TransactionTypes[];
  fetchTransactions: (query?: string) => Promise<void>;
};

type TransactionProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext({} as TransactionContextProps);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState([] as TransactionTypes[]);

  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3333/transactions");

    if (query) {
      url.searchParams.append("q", query);
    }

    const response = await fetch(url.href);
    const data = (await response.json()) as TransactionTypes[];

    if (query) {
      const filteredTransactions = data.filter((transaction) => {
        const description = transaction.description.toLowerCase();
        const category = transaction.category.toLowerCase();

        return (
          description.includes(query.toLowerCase()) ||
          category.includes(query.toLowerCase())
        );
      });

      setTransactions(filteredTransactions);
    } else {
      setTransactions(data);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
