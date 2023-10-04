import { ReactNode } from "react";

interface NewsSelectorProps {
  children: ReactNode;
}

/**
 * Компонент ссылок на группы новостей
 * ("Сейчас в СМИ", "В Германии" и т.д.).
 *
 * @param {NewsProps} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент NewsSelector.
 **/
export const NewsSelector = ({ children }: NewsSelectorProps) => {
  return <div>{children}</div>;
};
