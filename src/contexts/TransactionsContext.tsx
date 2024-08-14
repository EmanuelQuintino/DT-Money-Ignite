import { createContext, ReactNode, useEffect, useState } from "react";
import { API } from "../lib/axios";

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
    const { data } = await API.get<TransactionTypes[]>("/transactions", {
      params: {
        q: query,
      },
    });

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
