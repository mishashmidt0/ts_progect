abstract class Page {
    protected container: HTMLElement;
    static TextObjsct = {};

    constructor(id: string, className: string) {
        this.container = document.createElement('div');
        this.container.id = id;
        this.container.className = className;
    }
    protected createHeaderTitle(text: string) {
        const headerTitle = document.createElement('h1');
        headerTitle.innerHTML = text;
        return headerTitle;
    }
    protected createLink(text: string, href: string) {
        const link = document.createElement('a');
        link.innerHTML = text;
        link.href = href;
        return link;
    }
    protected createDiv(className: string) {
        const div = document.createElement('div');
        div.className = className;
        return div;
    }
    protected createButton(filterName: string) {
        const button = document.createElement('button');
        button.dataset.filter = filterName;
        return button;
    }
    render() {
        return this.container;
    }
}
export default Page;