import Page from "../../../core/temlpates/page";
import "./style.css";


class Filters extends Page {
    protected filters: HTMLElement = this.createDiv('filters');

    static TextObjsct = {
        title: 'Фильтры по назначению'
    };

    constructor(id: string, className: string) {
        super(id, className)
    }

    renderControls() {
        const title = this.createDiv('filter-title');
        title.innerText = `${Filters.TextObjsct.title.toUpperCase()}`;
        return this.filters.append(title)
    }


    render() {
        this.renderControls()
        return this.filters;
    }
}
export default Filters;