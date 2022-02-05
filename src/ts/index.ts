import "../scss/global.scss";
import "../scss/style.scss";
import "../scss/audiocall.scss";

import "airbnb-browser-shims/browser-only";

import { Model } from "./model";
import { View } from "./view";
import { Controller } from "./controller";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Auth } from "../pages/auth";
import { Main } from "../pages/main";
import { ElectronBook } from "../pages/electronBook";
import { Sprint } from "../games/sprint/sprint";
import { Audiocall } from "../games/audiocall/audiocall";

const view = new View(
  Header,
  Footer,
  Auth,
  Main,
  ElectronBook,
  new Audiocall(),
  Sprint
);
const model = new Model();

const controller = new Controller(view, model);

controller.initApp();
