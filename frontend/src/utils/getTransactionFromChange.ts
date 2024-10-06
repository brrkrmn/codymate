import { Change, Transaction } from "@/context/editor/editorContext.types";

const getTransactionFromChange = (change: Change): Transaction => {
  if (change.insert === "") {
    // delete text:
    return {
      from: change.toB,
      to: change.toA,
      insert: change.insert,
    };
  }
  if (change.fromA === change.toA) {
    // insert text:
    return {
      from: change.fromB,
      insert: change.insert,
    };
  } else {
    // replace text:
    return {
      from: change.fromA,
      to: change.toA,
      insert: change.insert,
    };
  }
};

export default getTransactionFromChange;
