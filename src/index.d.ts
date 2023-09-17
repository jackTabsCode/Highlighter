type TextObject = TextLabel | TextBox

type HighlightProps = {
	textObject: TextObject
	src?: string
	forceUpdate?: boolean
	lexer?: Lexer
	customLang: { [K in string]?: string }
}

type Lexer = {
	scan: (src: string) => () => LuaTuple<[string, string]>[]
	navigator: () => any
	finished?: boolean
}

interface Highlighter {
	highlight: (props: HighlightProps) => void
	matchStudioSettings: () => void
}

declare const Highlighter: Highlighter

export = Highlighter
