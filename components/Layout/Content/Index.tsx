import { FC, ReactNode } from "react";
import NavbarDeskop from "../../Navbar/Primary/NavbarDeskop/Molecules/NavbarPrimaryDeskop";
import NavbarMobile from "../../Navbar/Primary/NavbarMobile/Molecules/NavbarPrimaryMobile";
import BodyDocument from "../Body";
import FooterDocument from "../../Footer/Molecules/Footer";
import HeadDocument from "../Head";

interface IContentProps {
  children?: ReactNode;
  title: string;
  description?: string;
}

const Content: FC<IContentProps> = ({ children, title, description }) => {
  return (
    <>
      <HeadDocument title={title} description={description} />
      <NavbarDeskop />
      <NavbarMobile />
      <BodyDocument>{children}</BodyDocument>
      <FooterDocument />
    </>
  );
};

export default Content;
