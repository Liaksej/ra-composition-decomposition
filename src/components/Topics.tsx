import { ReactNode } from "react";

interface TopicsProps {
  children: ReactNode;
}

/**
 * Компонент раздела с основными темами поиска (над формой поиска).
 *
 * @param {TopicsProps} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент раздела с основными темами поиска.
 **/
export const Topics = ({ children }: TopicsProps) => {
  return <div>{children}</div>;
};
