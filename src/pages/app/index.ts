import Page from "../../core/temlpates/page";
import MainPage from "../main";
import Toys from "../toys";
import ChristmasTree from "../christmasTree";
import Header from "../../core/components/header";
import ErrorPage, { ErrorType } from "../error";
import Footer from "../../core/components/footer";

export const enum PageIds {
    MainPage = 'main-page',
    Toys = 'toys-page',
    ChristmasTree = 'christmasTree-page',

}

class App {
    private static hach: string = window.location.hash.slice(1);
    private static clAp: string = App.hach.slice(0, -5);
    private static container: HTMLElement = document.body;
    private static mainContainer: HTMLElement = document.querySelector('main') as HTMLElement;
    private initialPage: MainPage;
    private header: Header;
    private footer: Footer;
    private static defaultPageId: string = 'current-page';

    static renderNewPage(idPage: string, className: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`)
        if (currentPageHTML) currentPageHTML.remove();
        let page: Page | null = null;

        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage, className);
        } else if (idPage === PageIds.Toys) {
            page = new Toys(idPage, className);
        } else if (idPage === PageIds.ChristmasTree) {
            page = new ChristmasTree(idPage, className);
        } else { page = new ErrorPage(idPage, className, ErrorType.Error_404); }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.mainContainer.prepend(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hach = window.location.hash.slice(1);
            const clName = hach.slice(0, -5);
            App.renderNewPage(hach, clName);

        })
    }

    constructor() {
        this.initialPage = new MainPage('main-page', 'main');
        this.header = new Header('header', 'header')
        this.footer = new Footer('footer', 'footer')
    }
    run() {
        App.renderNewPage(App.hach, App.clAp);
        App.container.prepend(this.header.render());
        App.container.append(this.footer.render());

        this.enableRouteChange();
    }
};

export default App;