import { Snippet } from "@/context/snippet/snippetProvider.types";
import ReactCodeMirror from "@uiw/react-codemirror";
import Link from "next/link";

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  return (
    <Link
      className="w-full border-2 border-divider rounded-2xl px-10 py-4 bg-content2 shadow-small transition hover:shadow-large"
      href={`/editor/${snippet.id}`}
    >
      <div>{snippet.title}</div>
      <ReactCodeMirror
        value={snippet.scenes[0].content}
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
