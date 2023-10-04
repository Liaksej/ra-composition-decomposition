import { ReactNode } from "react";

interface SearchProps {
  children: ReactNode;
}

/**
 * Компонент раздела с формой поиска.
 *
 * @param {SearchProps} props Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент раздела с формой поиска.
 **/
export const Search = ({ children }: SearchProps) => {
  return <div>{children}</div>;
};
