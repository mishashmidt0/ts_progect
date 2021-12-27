import Page from "../../../core/temlpates/page";
import "./style.css";
import data, { Shape } from '../../../assets/data'
import CreateFilter from "../filters/logics";

// add enum -size -color

export type Bell = {
    num: string, //number
    name: string,
    count: string, //number
    year: string,   //number
    shape: Shape,
    color: string,
    size: string,
    favorite: boolean,
}

class ToyseContainer extends Page {
    protected toysconteiner: HTMLElement = this.createDiv('card-container');
    static TextObjsct = {

    };

    constructor(id: string, className: string) {
        super(id, className);

    }

    renderToyElement(data: Array<Bell>, filterBy: (item: Bell) => boolean) {

        data.filter(filterBy).forEach((el) => {

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
        this.renderToyElement(data, (item) => item.shape === Shape.Snowflake)
        return this.toysconteiner;
    }
}
export default ToyseContainer;