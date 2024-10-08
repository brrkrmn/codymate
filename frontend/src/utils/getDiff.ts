import { Transaction } from "@/context/scene/sceneProvider.types";

const getDiff = (oldContent: string, newContent: string): Transaction[] => {
  const transaction = [];
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
      transaction.push({
        from: i,
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
      transaction.push({
        from: i,
        insert: "",
      });
      i++;
    }
  }
  return transaction;
};

export default getDiff;
