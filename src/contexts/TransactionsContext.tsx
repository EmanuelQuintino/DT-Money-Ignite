import { createContext, ReactNode, useEffect, useState } from "react";

export type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
};

type TransactionContextProps = {
  transactions: Transaction[];
};

type TransactionProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext({} as TransactionContextProps);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState([] as Transaction[]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
