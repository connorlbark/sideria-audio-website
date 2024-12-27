import { ThemedMarkdown } from "../components/ThemedMarkdown"

const content = `
about 
`

export const About = () => {
    return <ThemedMarkdown>
        {content}
    </ThemedMarkdown>
}