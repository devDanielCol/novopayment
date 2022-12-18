import { FC, ReactNode } from "react";
import BodyDocument from "../Body";
import FooterDocument from "../../Footer/Molecules/Footer";
import HeadDocument from "../Head";
import AppBars from "../../Navbar";

interface IContentProps {
  children?: ReactNode;
  title: string;
  description?: string;
}

const Content: FC<IContentProps> = ({ children, title, description }) => {
  return (
    <>
      <HeadDocument title={title} description={description} />
      <AppBars />
      <BodyDocument>{children}</BodyDocument>
      <FooterDocument />
    </>
  );
};

export default Content;
