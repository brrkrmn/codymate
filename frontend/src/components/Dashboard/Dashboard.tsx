import SnippetCard from "./components/SnippetCard/SnippetCard";

const Dashboard = () => {
  const snippets = [
    {
      id: 1,
      backgroundColor: "black",
      borderRadius: "8 px",
      title: "First Snippet",
      value: "the value of string falan",
    },
  ];

  return (
    <div>
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.id} snippet={snippet} />
      ))}
    </div>
  );
};

export default Dashboard;
