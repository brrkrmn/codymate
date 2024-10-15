import { Snippet } from "@/context/snippet/snippetProvider.types";
import ReactCodeMirror from "@uiw/react-codemirror";
import Link from "next/link";

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  return (
    <Link href={`/editor/${snippet.id}`}>
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
