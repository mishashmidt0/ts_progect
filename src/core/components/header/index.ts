import Component from "../../temlpates/components";
import { PageIds } from "../../../pages/app"
import './style.css'

const Button = [
    {
        id: PageIds.MainPage,
        text: 'Main Page'
    },
    {
        id: PageIds.SettingPage,
        text: 'Setting Page'
    },
    {
        id: PageIds.StatisticPage,
        text: 'Statistic Page'
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