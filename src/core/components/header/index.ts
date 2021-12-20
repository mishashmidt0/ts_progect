import Component from "../../temlpates/components";
import { PageIds } from "../../../pages/app"
import './style.css'

const Button = [
    {
        id: PageIds.MainPage,
        text: 'ГЛАВНАЯ'
    },
    {
        id: PageIds.Toys,
        text: 'ИГРУШКИ'
    },
    {
        id: PageIds.ChristmasTree,
        text: 'ЁЛКА'
    }
]


class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className)
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div');
        pageButtons.className = "header-container";
        Button.forEach(button => {
            const ButtonHTML = document.createElement('a');
            ButtonHTML.href = `#${button.id}`;
            ButtonHTML.innerHTML = button.text;
            pageButtons.append(ButtonHTML)
        });
        this.container.append(pageButtons);
    }

    render(): HTMLElement {
        this.renderPageButtons();
        return this.container;
    }
}
export default Header;