import Home from "./views/pages/home/Home";

var dashRoutes = [
  {
    path: "/home",
    mini: "L",
    component: Home,
    layout: "/site",
    logged: false,
    layoutType: 'default',
    products: true,
    content: true
  },
];

export default dashRoutes;
