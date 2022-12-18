import { Box, Collapse, Typography } from "@mui/material";
import data from "../../../../../data/data.json";
import OptionNavbarSecondary from "../../Global/OptionNavbarSecondary";
import { strNormalize } from "../../../../../util/helpers/normalizeStr";
import useTheme from "../../../../../util/hooks/useTheme";
import MenuCollapse from "../../../Global/MenuCollapse/MenuCollapse";
import { useState } from "react";

const NavbarSecondaryMobile = () => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* deje esto parametrizable en caso de que se quiera añadir mas de un menu */}
      {Object.entries(data).map(([name, dataJson], key) => (
        <Box
          key={key}
          sx={{
            display: {
              xs: "block",
              lg: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              ml: 2,
              alignItems: "center",
              justifyContent: "flex-start",
              color: "custom.navbartext",
              textAlign: "center",
              px: 1.5,
              py: 1.5,
            }}
          >
            <Typography
              onClick={() => {
                setOpen(!open);
              }}
              sx={{
                fontWeight: 300,
                alignItems: "center",
                transition: "all .2s linear",
                lineHeight: 1,
                color: "inherit",
                fontSize: "0.9rem",
                textTransform: "inherit",
                textAlign: "inherit",
                m: 0,
              }}
              component="span"
            >
              {name}
            </Typography>
          </Box>
          <Collapse in={open}>
            <Box
              component="nav"
              title={name}
              sx={{
                width: "100%",
                boxShadow: 0,
                transition: "all .2s linear",
                backgroundColor: theme.palette.background.paper,
                backgroundImage: "none",
                p: 0,
                m: 0,
              }}
            >
              {dataJson.map((opt, key) => (
                <Box
                  key={key}
                  component={"ul"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "primary",
                    p: 0,
                    m: 0,
                  }}
                >
                  {Object.entries(opt).map(([name, data], key) => (
                    <Box key={key} component={"li"} sx={{ listStyle: "none" }}>
                      <MenuCollapse
                        name={strNormalize(name)}
                        sx={{ m: 0, p: 0, textTransform: "capitalize" }}
                      >
                        {data.length > 0 ? (
                          data.map((subopt, key) => (
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
                          <></>
                        )}
                      </MenuCollapse>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Collapse>
        </Box>
      ))}
    </>
  );
};
export default NavbarSecondaryMobile;
