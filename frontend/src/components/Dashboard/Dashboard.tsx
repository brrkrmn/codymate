import { useSnippetContext } from "@/context/snippet/snippetProvider";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import SnippetCard from "./components/SnippetCard/SnippetCard";

const Dashboard = () => {
  const { filteredSnippets } = useSnippetContext();

  return (
    <div className="flex flex-col gap-6 py-6">
      <h1 className="text-3xl">Dashboard</h1>
      <div className="flex items-center gap-3">
        <Sort />
        <Filter />
      </div>
      <div className="flex flex-wrap justify-center items-start laptop:justify-start gap-8">
        {filteredSnippets.map((snippet) => (
          <SnippetCard key={snippet.id} snippet={snippet} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
