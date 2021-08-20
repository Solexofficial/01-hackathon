import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";
import "./styles.css";

const menu = new ContextMenu("#menu");
const background = new BackgroundModule("module", "bg change");
const clicks = new ClicksModule("module", "click counter");
const shape = new ShapeModule("module", "create shape");
menu.add(background);
menu.add(clicks);
menu.add(shape);
