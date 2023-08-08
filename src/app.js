import "aos/dist/aos.css";
import "./style/style.css";

import AOS from "aos";
import main from "./script/views/main";

// Components
import "./script/components/nav-bar";
import "./script/components/menu-bar";
import "./script/components/search-item";
import "./script/components/menu-list";
import "./script/components/footer-bar";

AOS.init();

document.addEventListener("DOMContentLoaded", main);
