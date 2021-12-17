import Page from "../../core/temlpates/page";
import MainPage from "../main";
import SettingPage from "../settings";
import StatisticPage from "../statistics";
import Header from "../../core/components/header";
import ErrorPage, { ErrorType } from "../error";

export const enum PageIds {
    MainPage = 'main-page',
    SettingPage = 'satting-page',
    StatisticPage = 'statistics-page',

}

class App {
    private static container: HTMLElement = document.body;
    private initialPage: MainPage;
    private header: Header;
    private static defaultPageId: string = 'current-page';

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`)
        if (currentPageHTML) currentPageHTML.remove();
        let page: Page | null = null;

        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage === PageIds.SettingPage) {
            page = new SettingPage(idPage);
        } else if (idPage === PageIds.StatisticPage) {
            page = new StatisticPage(idPage);
        } else { page = new ErrorPage(idPage, ErrorType.Error_404); }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hach = window.location.hash.slice(1);
            App.renderNewPage(hach);
        })
    }

    constructor() {
        this.initialPage = new MainPage('main-page'); //присваиваем id main-page
        this.header = new Header('header', 'header-container')
    }
    run() {
        App.container.append(this.header.render())
        App.renderNewPage('main-page');
        this.enableRouteChange();
    }
};

export default App;