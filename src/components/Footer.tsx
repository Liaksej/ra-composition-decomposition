import { ReactNode } from "react";

interface Footerchildren {
  children: ReactNode;
}

/**
 * Компонент раздела с популярными тематиками под формой поиска.
 *
 * @param {Footerchildren} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент раздела с популярными тематиками под формой поиска.
 **/
export const Footer = ({ children }: Footerchildren) => {
  return <div>{children}</div>;
};
