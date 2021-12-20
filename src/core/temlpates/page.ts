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
    protected createDescription(description: string, text: string | boolean) {
        const el = document.createElement('p');
        if (text === true) { text = "да" }
        else if (text === false) { text = "нет" };
        el.innerText = `${description}: ${text}`
        return el;
    }
    protected createText(text: string) {
        const el = document.createElement('p');
        el.innerText = `${text}`
        return el;
    }
    protected createButton(filterName: string) {
        const button = document.createElement('button');
        button.dataset.filter = filterName;
        return button;
    }
    protected createCardHeader(text: string) {
        const cardTitle = document.createElement('h2');
        cardTitle.innerHTML = text;
        return cardTitle;
    }
    protected createImg(num: string) {
        const images = document.createElement('img');
        const url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/toys/${num}.png`;
        images.className = 'card-img';
        images.src = url;
        return images;
    }
    render() {
        return this.container;
    }
}
export default Page;