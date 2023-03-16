export interface CustomElementClass extends HTMLElement {
	connectedCallback(): void
	render(icon?: string, origin?: string): void
	initElements?(): void
	next?(index: number, length: 0): void
	prev?(index: number, length: 0): void
}
