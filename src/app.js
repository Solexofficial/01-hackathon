import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";
import "./styles.css";

const menu = new ContextMenu("#menu");
const background = new BackgroundModule("bg", "bg change");
const clicks = new ClicksModule("clicker", "click counter");
const shape = new ShapeModule("shape", "create shape");
menu.add(background);
menu.add(clicks);
menu.add(shape);
