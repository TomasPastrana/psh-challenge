import Home from "./views/pages/home/Home";
import Quotes from "./views/pages/quotes/Quotes";

var dashRoutes = [
  {
    path: "/home",
    mini: "H",
    component: Home,
    layout: "/site",
    layoutType: 'default',
  },
  {
    path: "/:series/quotes",
    mini: "Q",
    component: Quotes,
    layout: "/site",
    layoutType: 'default',
  },
];

export default dashRoutes;
