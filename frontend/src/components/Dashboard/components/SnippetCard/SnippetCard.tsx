import ReactCodeMirror from "@uiw/react-codemirror";
import Link from "next/link";

type Snippet = {
  id: number;
  backgroundColor: string;
  value: string;
  borderRadius: string;
  title: string;
};

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  return (
    <Link href={`/editor/${snippet.id}`}>
      <div>{snippet.title}</div>
      <ReactCodeMirror
        value={snippet.value}
        editable={false}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
        }}
      />
    </Link>
  );
};

export default SnippetCard;
