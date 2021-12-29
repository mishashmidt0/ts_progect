import { Shape, Size, Color, Toy } from './../../../typings/Toy';
import Page from "../../../core/temlpates/page";
import "./style.css";
import data from '../../../assets/data'
import { getElemetsForFilters } from '../filters/logics'

class ToyseContainer extends Page {
    protected toysconteiner: HTMLElement = this.createDiv('card-container');
    static TextObjsct = {

    };

    constructor(id: string, className: string) {
        super(id, className);

    }

    renderToyElement(data: Array<Toy>, filterBy: (item: Toy) => boolean) {

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
        this.renderToyElement(data, (item) => getElemetsForFilters(item))

        return this.toysconteiner;
    }
}
export default ToyseContainer;