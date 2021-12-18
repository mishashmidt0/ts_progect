import Page from "../../core/temlpates/page";

class SettingPage extends Page {

    static TextObjsct = {
        MainTitle: 'Setting Page',
    };

    constructor(id: string, className: string) {
        super(id, className)
    }
    render() {
        const title = this.createHeaderTitle(SettingPage.TextObjsct.MainTitle)
        this.container.append(title);
        return this.container;
    }
}
export default SettingPage;