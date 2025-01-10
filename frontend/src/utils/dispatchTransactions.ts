import { Transaction } from "@/context/scene/sceneProvider.types";
import { EditorView } from "@uiw/react-codemirror";

const dispatchTransactions = (
  editorView: EditorView,
  transactions: Transaction[]
) => {
  return transactions.map((transaction, index) => {
    return setTimeout(() => {
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

export default dispatchTransactions;
