import Page from "../../core/temlpates/page";
import Filters from "./filters";
import ToyseContainer from './card'
import "./style.css";


class Toyse extends Page {
    protected controls: HTMLElement = this.createDiv('controls');
    protected toys: HTMLElement = this.createDiv('toys-container');
    protected filters: Filters;
    protected toyseContainer: ToyseContainer;

    constructor(id: string, className: string,) {
        super(id, className)
        this.filters = new Filters('controls', 'controls');
        this.toyseContainer = new ToyseContainer('toys-id', 'toys-container');
    }

    renderFilters() {

    }

    render() {
        this.toys.append(this.toyseContainer.render())


        this.container.append(this.controls, this.toys)
        this.controls.append(this.filters.render())
        return this.container;
    }
}
export default Toyse;