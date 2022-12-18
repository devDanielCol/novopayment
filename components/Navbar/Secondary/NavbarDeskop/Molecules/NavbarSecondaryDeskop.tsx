import { Box } from "@mui/material";
import MenuToolpit from "../../../Global/MenuToolpit/MenuToolpit";
import data from "../../../../../data/data.json";
import OptionNavbarSecondary from "../../Global/OptionNavbarSecondary";
import { strNormalize } from "../../../../../util/helpers/normalizeStr";
import useTheme from "../../../../../util/hooks/useTheme";

const NavbarSecondaryDeskop = () => {
  const theme = useTheme();

  return (
    <>
      {Object.entries(data).map(([name, dataJson], key) => (
        // deje esto dinamico en caso de que quieran crear mas de un menu
        <Box
          key={key}
          component="nav"
          title={name}
          sx={{
            width: "100%",
            boxShadow: 0,
            transition: "all .2s linear",
            backgroundColor: theme.palette.background.paper,
            backgroundImage: "none",
            display: {
              xs: "none",
              lg: "block",
            },
            p: 0,
            m: 0,
            pl: 4,
          }}
        >
          {dataJson.map((opt, key) => (
            // aqui se recorren los datos para crear cada opcion
            <Box
              key={key}
              component={"ul"}
              sx={{
                display: "flex",
                color: "primary",
                p: 0,
                m: 0,
              }}
            >
              {Object.entries(opt).map(([name, data], key) => (
                // aqui se usa Object.etries para convertir el key:value en [key, value] y poder iterar mas comodamente
                // se que hay varias formas de iterar este object pero esta me parecio la mas conveniente
                <Box key={key} component={"li"} sx={{ listStyle: "none" }}>
                  <MenuToolpit
                    name={strNormalize(name)}
                    sx={{ m: 0, p: 0, textTransform: "capitalize" }}
                  >
                    {data.length > 0 ? (
                      data.map((subopt, key) => (
                        //aqui se recorre la data de cada elemento
                        <Box
                          key={key}
                          sx={{
                            pt: key > 0 ? 2 : 0,
                            width: "auto",
                            height: "auto",
                            color: "inherit",
                          }}
                        >
                          {Object.entries(subopt).map(([name, data], key) =>
                            name ? (
                              // este compoente se encarga de hacer el renderizado profundo para cada elemento
                              <OptionNavbarSecondary
                                key={key}
                                data={data}
                                name={strNormalize(name)}
                              />
                            ) : (
                              "Valor Ilegible"
                            )
                          )}
                        </Box>
                      ))
                    ) : (
                      // en caso de que no hallan mas datos o el array.lenght sea <=0 se renderiza esto = null
                      <></>
                    )}
                  </MenuToolpit>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      ))}
    </>
  );
};
export default NavbarSecondaryDeskop;
