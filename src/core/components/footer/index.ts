import Component from "../../temlpates/components";
import './style.css';

class Footer extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className)
    }

    renderFooter() {
        const container = document.createElement('div');
        const gitYear = document.createElement('div');
        const githab = document.createElement('a');
        const logoLink = document.createElement('a');
        const year = document.createElement('p');
        const logo = document.createElement('img');
        year.textContent = '@ 2021';
        githab.textContent = "githab"
        githab.href = "https://github.com/mishashmidt0"
        logo.src = 'https://rs.school/images/rs_school_js.svg';
        logo.className = "logo-footer"
        container.className = "footer-container"
        logoLink.href = "https://rs.school/js/"
        logoLink.append(logo)
        gitYear.append(year, githab)
        container.append(gitYear, logoLink)
        this.container.append(container);
    }

    render(): HTMLElement {
        this.renderFooter();
        return this.container;
    }
}
export default Footer;