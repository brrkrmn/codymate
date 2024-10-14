"use client";

import getDiff from "@/utils/getDiff";
import { EditorView } from "@uiw/react-codemirror";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useSceneContext } from "../scene";
import {
  Transaction,
  TransactionContextValue,
} from "./transactionProvider.types";

export const TransactionContext = createContext<TransactionContextValue>(null);

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (context === null) {
    throw new Error("You can only call this hook inside TransactionProvider");
  }
  return context;
};

const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [editorRef, setEditorRef] = useState<EditorView>();
  const { scenes } = useSceneContext();

  useEffect(() => {
    createTransactions();
  }, [scenes]);

  useEffect(() => {
    if (isPlaying && editorRef) {
      resetChanges(editorRef);
      initializeChanges(editorRef);
      dispatchTransactions(editorRef);
    }
  }, [isPlaying]);

  const duration = useMemo(() => {
    return transactions.length > 0
      ? Math.ceil(transactions.length + 3) + 30
      : 60;
  }, [transactions]);

  const createTransactions = () => {
    const newTransactions = [];

    for (let i = 0; i < scenes.length - 1; i++) {
      const oldScene = scenes[i].content;
      const newScene = scenes[i + 1].content;

      const transactions = getDiff(oldScene, newScene);

      if (transactions.length > 0) {
        newTransactions.push(...transactions);
      }
    }
    setTransactions(newTransactions);
  };

  const dispatchTransactions = (editorView: EditorView) => {
    transactions.forEach((transaction, index) => {
      setTimeout(() => {
        editorView.dispatch({
          changes: {
            from: transaction.from,
            to: transaction.to,
            insert: transaction.insert,
          },
        });
      }, index * 100);
    });
  };

  const initializeChanges = (editorView: EditorView) => {
    editorView.dispatch({
      changes: { from: 0, insert: scenes[0].content },
    });
  };

  const resetChanges = (editorView: EditorView) => {
    editorView.dispatch({
      changes: {
        from: 0,
        to: editorView.state.doc.toString().length,
        insert: "",
      },
    });
  };

  return (
    <TransactionContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        duration,
        setEditorRef,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
