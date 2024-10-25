import { useSnippetContext } from "@/context/snippet/snippetProvider";
import { IoOptionsOutline } from "react-icons/io5";
import Sort from "../Sort/Sort";
import SnippetCard from "./components/SnippetCard/SnippetCard";

const Dashboard = () => {
  const { snippets } = useSnippetContext();

  return (
    <div className="flex flex-col gap-6 py-6">
      <h1 className="text-3xl">My Snippets</h1>
      <div className="flex items-center gap-4">
        <Sort />
        <button className="w-fit px-4 flex items-center justify-center gap-2 border-small border-divider rounded-full bg-content1 text-foreground-100 transition hover:shadow-small hover:text-foreground-50">
          <IoOptionsOutline />
          <p>Filter</p>
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {snippets.map((snippet) => (
          <SnippetCard key={snippet.id} snippet={snippet} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
