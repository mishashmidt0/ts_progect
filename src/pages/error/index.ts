import Page from "../../core/temlpates/page";

export const enum ErrorType {
    Error_404 = 404
}

class ErrorPage extends Page {
    private errorType: ErrorType | string;
    static TextObject: { [prop: string]: string } = {
        '404': 'Error! The page is not found'
    };

    constructor(id: string, className: string, errorType: ErrorType | string) {
        super(id, className);
        this.errorType = errorType;
    }
    render() {
        const title = this.createHeaderTitle(ErrorPage.TextObject['404'])
        this.container.append(title);
        return this.container;
    }
}

export default ErrorPage;