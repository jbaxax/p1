import { BookOpenText, Home, Leaf, Mail, ShoppingBasket } from "lucide-react";

const size = 22
export const itemsNavbar = [
  {
    id: 1,
    icon: <Home size={size} />,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    icon: <Leaf size={size} />,
    title: "Servicios",
    link: "/services",
  },
  {
    id: 3,
    icon: <BookOpenText size={size} />,
    title: "Sobre nosotros",
    link: "/aboutus",
  },
  {
    id: 4,
    icon: <ShoppingBasket size={size} />,
    title: "Productos",
    link: "/products",
  },
  {
    id: 5,
    icon: <Mail size={size} />,
    title: "Contacto",
    link: "/contact",
  },
];