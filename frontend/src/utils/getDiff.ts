import { Transaction } from "@/context/scene/sceneProvider.types";

const getDiff = (oldContent: string, newContent: string): Transaction[] => {
  const transaction = [];
  const deleteOperations = [];

  let i = 0;
  let j = 0;

  while (i < oldContent.length || j < newContent.length) {
    if (i === oldContent.length) {
      transaction.push({
        from: j,
        insert: newContent[j],
      });
      j++;
    } else if (j === newContent.length) {
      deleteOperations.push({
        from: i,
        to: i + 1,
        insert: "",
      });
      i++;
    } else if (oldContent[i] === newContent[j]) {
      i++;
      j++;
    } else {
      transaction.push({
        from: j,
        insert: newContent[j],
      });
      j++;
      deleteOperations.push({
        from: i,
        to: i + 1,
        insert: "",
      });
      i++;
    }
  }

  transaction.push(...deleteOperations.reverse());

  return transaction;
};

export default getDiff;
