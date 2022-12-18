import NavbarPrimaryDeskop from "./Primary/NavbarDeskop/Molecules/NavbarPrimaryDeskop";
import NavbarPrimaryMobile from "./Primary/NavbarMobile/Molecules/NavbarPrimaryMobile";
import NavbarSecondaryDeskop from "./Secondary/NavbarDeskop/Molecules/NavbarSecondaryDeskop";
import NavbarSecondaryMobile from "./Secondary/NavbarMobile/Molecules/NavbarSecondaryMobile";

const AppBars = () => {
  return (
    <>
      <NavbarPrimaryDeskop />
      <NavbarPrimaryMobile />
      <NavbarSecondaryDeskop />
      <NavbarSecondaryMobile />
    </>
  );
};

export default AppBars;
