import Page from "../../core/temlpates/page";

class StatisticPage extends Page {
    static TextObjsct = {
        MainText: 'Statistic Page'
    };
    constructor(id: string) {
        super(id)
    }
    render() {
        const title = this.createHeaderTitle(StatisticPage.TextObjsct.MainText)
        this.container.append(title)
        return this.container;
    }
}

export default StatisticPage;