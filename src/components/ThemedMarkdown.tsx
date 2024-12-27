import Markdown from "react-markdown"


export const ThemedMarkdown = ({children}: {children?: string | null | undefined}) => {
    return <article className="prose prose-custom">
        <Markdown>
            {children}
        </Markdown>
    </article>
}