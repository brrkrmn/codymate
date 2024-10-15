import { useSnippetContext } from "@/context/snippet/snippetProvider";
import SnippetCard from "./components/SnippetCard/SnippetCard";

const Dashboard = () => {
  const { snippets } = useSnippetContext();

  return (
    <div>
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.id} snippet={snippet} />
      ))}
    </div>
  );
};

export default Dashboard;
