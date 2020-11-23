import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type Props = {
  language: string;
  value: string;
}

export const CodeBlock: React.FC<Props> = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};
