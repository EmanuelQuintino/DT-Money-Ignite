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

export type CreateTransactionTypes = {
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
};

type TransactionContextProps = {
  transactions: TransactionTypes[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionTypes) => Promise<void>;
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

    data.sort((a, b) => {
      if (a.createdAt < b.createdAt) return 1;
      if (a.createdAt > b.createdAt) return -1;
      return 0;
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

  async function createTransaction(data: CreateTransactionTypes) {
    const { description, category, price, type } = data;
    const response = await API.post("/transactions", {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions((prevState) => [response.data, ...prevState]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
