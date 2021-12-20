import Page from "../../../core/temlpates/page";
import "./style.css";

const filterData = {
    shape: ['шар', 'колокольчик', 'шишка', 'снежинка', 'фигурка'],
    color: ['белый', 'желтый', 'красный', 'синий', 'зеленый'],
    size: ['большой', 'средний', 'малый']
}
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

        const shape = this.createDiv('shape');
        const textShape = this.createText('Форма: ');
        shape.append(textShape);
        filterData.shape.forEach(el => {
            const button = this.createButton(`${el}`)
            shape.append(button);
        });

        const color = this.createDiv('color');
        const textColor = this.createText('Цвет: ');
        color.append(textColor);
        filterData.color.forEach(el => {
            const button = this.createButton(`${el}`)
            color.append(button);
        });

        const size = this.createDiv('size');
        const textSize = this.createText('Размер: ');
        size.append(textSize);

        filterData.size.forEach(el => {
            const button = this.createButton(`${el}`)
            size.append(button);
        });
        const like = this.createDiv('like');
        const textLike = this.createText('Только любимые: ');
        const button = this.createButton(`likes`);
        button.className = "button-likes";
        like.append(textLike, button);

        this.filters.append(title, shape, color, size, like)
    }


    render() {
        this.renderControls()
        return this.filters;
    }
}
export default Filters;