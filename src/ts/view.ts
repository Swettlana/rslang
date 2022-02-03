import { EPage, ITemplate } from "../types/types";

export class View {
  private header: ITemplate;
  private footer: ITemplate;
  private auth: ITemplate;
  private main: ITemplate;
  private electronBook: ITemplate;
  private audioCall: ITemplate;
  private sprint: ITemplate;

  constructor(
    header: ITemplate,
    footer: ITemplate,
    auth: ITemplate,
    main: ITemplate,
    electronBook: ITemplate,
    audioCall: ITemplate,
    sprint: ITemplate
  ) {
    this.header = header;
    this.footer = footer;
    this.auth = auth;
    this.main = main;
    this.electronBook = electronBook;
    this.audioCall = audioCall;
    this.sprint = sprint;
  }

  public renderApp(): void {
    const body = document.body;
    const app = document.createElement("div");

    app.setAttribute("id", "app");
    app.classList.add("app");

    app.innerHTML = /*html*/ `
      <div id="header" class="header"></div>
      <div id="content" class="content"></div>
      <div id="footer" class="footer"></div>
    `;

    body.innerHTML = "";
    body.append(app);
  }

  public renderHeader(): void {
    const headerEl = document.querySelector("#header") as HTMLElement;
    headerEl!.innerHTML = this.header.getHTML();
  }

  public renderFooter(): void {
    const footerEl = document.querySelector("#footer") as HTMLElement;
    footerEl!.innerHTML = this.footer.getHTML();
  }

  public renderContent(activePage: string = EPage.main): void {
    const contentEl = document.querySelector("#content") as HTMLElement;

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

      case EPage.audioCallLevels:
        contentEl!.innerHTML = this.audioCall.getHTML();
        break;

      case EPage.sprint:
        contentEl!.innerHTML = this.sprint.getHTML();
        break;

      default:
        contentEl!.innerHTML = this.main.getHTML();

        break;
    }
  }
}
