import { EPage, ISprint, ITemplate } from "../types/types";

export class View {
  private header: ITemplate;
  private footer: ITemplate;
  private auth: ITemplate;
  private main: ITemplate;
  private electronBook: ITemplate;
  private audiocall: ITemplate;
  private sprint: ISprint;

  constructor(header: ITemplate, footer: ITemplate, auth: ITemplate, main: ITemplate, electronBook: ITemplate, audiocall: ITemplate, sprint: ISprint) {
    this.header = header;
    this.footer = footer;
    this.auth = auth;
    this.main = main;
    this.electronBook = electronBook;
    this.audiocall = audiocall;
    this.sprint = sprint;
  }

  public renderApp(): void {
    const body = document.body;
    const app = document.createElement('div');

    app.setAttribute('id', 'app');
    app.classList.add('app');

    app.innerHTML = /*html*/`
      <div id="header" class="header"></div>
      <div id="content" class="content"></div>
      <div id="footer" class="footer"></div>
    `;

    body.innerHTML = '';
    body.append(app);
  }

  public renderHeader(): void {
    const headerEl = document.querySelector('#header') as HTMLElement;
    headerEl!.innerHTML = this.header.getHTML();
  }

  public renderFooter(): void {
    const footerEl = document.querySelector('#footer') as HTMLElement;
    footerEl!.innerHTML = this.footer.getHTML();
  }

  public renderContent(activePage: string = EPage.main): void {
    const contentEl = document.querySelector('#content') as HTMLElement;

    switch (activePage) {
      case EPage.auth:
        contentEl!.innerHTML = this.auth.getHTML();
        break;

      case EPage.main:
        contentEl!.innerHTML = this.main.getHTML();
        break;

      case EPage.electronBook:
        contentEl!.innerHTML = this.electronBook.getHTML();
        break;

      case EPage.audiocall:
        contentEl!.innerHTML = this.audiocall.getHTML();
        break;

      case EPage.sprint:
        contentEl!.innerHTML = this.sprint.getHTML();
        this.sprint.setCheckListeners();
        break;

      default:
        contentEl!.innerHTML = this.main.getHTML();

        break;
    }
  }
}