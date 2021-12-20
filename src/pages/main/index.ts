import Page from "../../core/temlpates/page";
import "./style.css"

class MainPage extends Page {

    static TextObject = {
        MaintTitle: `Новогодняя игра 
        «Наряди ёлку»`,
        Start: 'Начать',
        Link: '#toys-page',
    };

    constructor(id: string, className: string) {
        super(id, className)
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextObject.MaintTitle);
        const link = this.createLink(MainPage.TextObject.Start, MainPage.TextObject.Link)
        this.container.append(title, link);
        return this.container;
    }
}

export default MainPage;