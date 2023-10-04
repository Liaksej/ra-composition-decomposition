import { ReactNode } from "react";

interface AnvertisingBannerProps {
  children: ReactNode;
}

/**
 * Компонент раздела с банерной рекламой под формой поиска.
 *
 * @param {AnvertisingBannerProps} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент раздела с банерной рекламой под формой поиска.
 **/
export const AdvertisingBanner = ({ children }: AnvertisingBannerProps) => {
  return <div>{children}</div>;
};
