import { Snippet } from "@/context/snippet/snippetProvider.types";
import { Chip } from "@nextui-org/react";
import { langs } from "@uiw/codemirror-extensions-langs";
import { vscodeDarkInit } from "@uiw/codemirror-themes-all";
import ReactCodeMirror from "@uiw/react-codemirror";
import Link from "next/link";

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  return (
    <Link
      className="group flex flex-col items-start w-80 h-52 gap-2"
      href={`/editor/${snippet.id}`}
    >
      <div className="rounded-2xl w-full h-full overflow-hidden no-scroll-editor border-1 border-divider bg-content2 shadow-small transition group-hover:shadow-large">
        <ReactCodeMirror
          value={snippet.scenes[snippet.scenes.length - 1].content}
          editable={false}
          theme={vscodeDarkInit({
            settings: {
              background: "#0000000",
              fontSize: "12px",
            },
          })}
          extensions={[langs[snippet.language]()]}
          basicSetup={{
            lineNumbers: false,
            foldGutter: false,
            highlightActiveLine: false,
          }}
        />
      </div>
      <div className="w-full flex gap-4 items-center justify-between px-2 *:transition">
        <p className="text-xl font-medium text-foreground-100 group-hover:text-foreground-50 tracking-wide line-clamp-1">
          {snippet.title}
        </p>
        <Chip
          radius="full"
          variant="bordered"
          classNames={{
            base: "border-small border-divider shadow-medium bg-content2 text-foreground-100 group-hover:text-foreground group-hover:shadow-large",
          }}
        >
          {snippet.language}
        </Chip>
      </div>
    </Link>
  );
};

export default SnippetCard;
