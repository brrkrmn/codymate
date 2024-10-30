import { useSnippetContext } from "@/context/snippet/snippetProvider";
import { useRouter } from "next/navigation";
import { IoIosAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import SnippetCard from "./components/SnippetCard/SnippetCard";

const Dashboard = () => {
  const router = useRouter();
  const { filteredSnippets, createSnippet } = useSnippetContext();

  const onCreateSnippet = () => {
    const id = uuidv4();
    router.push(`/editor/${id}`);
    createSnippet(id);
  };

  return (
    <div className="flex flex-col gap-6 py-6">
      <h1 className="text-3xl">Dashboard</h1>
      <div className="flex items-center justify-center laptop:justify-start gap-3 flex-wrap">
        <Sort />
        <Filter />
        <button
          onClick={onCreateSnippet}
          className="flex items-center justify-start gap-2 pr-3 rounded-full bg-foreground-100 text-background hover:bg-foreground-50 transition shadow-medium font-semibold hover:shadow-large"
        >
          <IoIosAddCircle className="w-6 h-6" />
          <p>Create</p>
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-start laptop:justify-start gap-8">
        {filteredSnippets.length === 0 ? (
          <div className="w-full text-foreground-100">
            There&apos;s nothing here.
          </div>
        ) : (
          filteredSnippets.map((snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
