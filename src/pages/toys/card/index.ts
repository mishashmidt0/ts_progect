import Page from "../../../core/temlpates/page";
import "./style.css";
import data from '../../../assets/data'

class ToyseContainer extends Page {
    protected toysconteiner: HTMLElement = this.createDiv('card');
    protected data;
    static TextObjsct = {

    };

    constructor(id: string, className: string) {
        super(id, className)
        this.data = data;
    }
    renderToyElement() {
        const toy = this.createDiv('toy');
        this.data.forEach((el: any) => {
            console.log(el.num)
        })
    }

    render() {
        this.renderToyElement()
        return this.toysconteiner;
    }
}
export default ToyseContainer;