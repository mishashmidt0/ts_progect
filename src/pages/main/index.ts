import Page from "../../core/temlpates/page";

class MainPage extends Page {

    static TextObject = {
        MaintTitle: 'Main Pages'
    };

    constructor(id: string) {
        super(id)
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextObject.MaintTitle);
        this.container.append(title);
        return this.container;
    }
}

export default MainPage;