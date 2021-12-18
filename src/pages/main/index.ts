import Page from "../../core/temlpates/page";
import "./style.css"

class MainPage extends Page {

    static TextObject = {
        MaintTitle: 'Main Pages'
    };

    constructor(id: string, className: string) {
        super(id, className)
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextObject.MaintTitle);
        this.container.append(title);
        return this.container;
    }
}

export default MainPage;