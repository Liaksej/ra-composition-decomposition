import { ReactNode } from "react";

interface NewsProps {
  children: ReactNode;
}

/**
 * Компонент раздела новостей, который находится над
 * блоком с поисковой строкой.
 *
 * @param {NewsProps} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент News.
 **/
export const News = ({ children }: NewsProps) => {
  return <div>{children}</div>;
};
