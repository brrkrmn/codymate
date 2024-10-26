import { useSnippetContext } from "@/context/snippet/snippetProvider";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import SnippetCard from "./components/SnippetCard/SnippetCard";

const Dashboard = () => {
  const { snippets } = useSnippetContext();

  return (
    <div className="flex flex-col gap-6 py-6">
      <h1 className="text-3xl">My Snippets</h1>
      <div className="flex items-center gap-3">
        <Sort />
        <Filter />
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
