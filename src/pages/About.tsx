import Markdown from "react-markdown"

const content = `
about 
`

export const About = () => {
    return <Markdown>
        {content}
    </Markdown>
}