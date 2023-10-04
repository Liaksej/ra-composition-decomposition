import { ReactNode } from "react";

interface AsideBannerProps {
  children: ReactNode;
}

/**
 * Компонент бокового рекламного блока.
 *
 * @param {AsideBannerProps} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент бокового рекламного блока.
 **/
export const AsideBanner = ({ children }: AsideBannerProps) => {
  return <div>{children}</div>;
};
