import Page from "../../../core/temlpates/page";
import "./style.css";
import data from '../../../assets/data'

class ToyseContainer extends Page {
    protected toysconteiner: HTMLElement = this.createDiv('card-container');
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
            const container = this.createDiv("card");
            const h2 = this.createCardHeader(el.name);
            const img = this.createImg(el.num);

            const description = this.createDiv("card-description");
            const count = this.createDescription("Количество", el.count);
            const year = this.createDescription("Год покупки", el.year);
            const shape = this.createDescription("Форма", el.shape);
            const color = this.createDescription("Цвет", el.color);
            const size = this.createDescription("Размер", el.size);
            const favorite = this.createDescription("Любимая", el.favorite);
            description.append(count, year, shape, color, size, favorite);

            const ribbon = this.createDiv("ribbon");

            container.append(h2, img, description, ribbon);
            this.toysconteiner.append(container)
        })
    }

    render() {
        this.renderToyElement()
        return this.toysconteiner;
    }
}
export default ToyseContainer;