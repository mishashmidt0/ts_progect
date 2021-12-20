import Page from "../../core/temlpates/page";
import "./style.css";


class ChristmasTree extends Page {
    static TextObjsct = {
        MainText: 'Statistic Page'
    };
    constructor(id: string, className: string) {
        super(id, className)
    }
    render() {
        const title = this.createHeaderTitle(ChristmasTree.TextObjsct.MainText)
        this.container.append(title)
        return this.container;
    }
}

export default ChristmasTree;