import React, { FC, useEffect, useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import { strNormalize } from "../../../../util/helpers/normalizeStr";
import useTheme from "../../../../util/hooks/useTheme";

interface OptionProps {
  name: string;
  data: object[];
}

const OptionNavbarSecondary: FC<OptionProps> = ({ data, name }) => {
  // open es para abrir o cerra el collapse
  const [open, setOpen] = useState<boolean>(false);
  const [content, setContent] = useState<object[]>();
  // aqui se usa el theme para acceder a las configuraciones globales del theme
  const theme = useTheme();

  useEffect(() => {
    // Esta parte es mas de optimizacion, para que se construyan los datos con cada click que da el usuario
    setContent(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleOpen = () => {
    if (data.length > 0) {
      // aqui primero se valida que exista la data antes que se pueda abrir el collapse
      setOpen(!open);
    }
  };

  return (
    <Box
      sx={{
        minWidth: 200,
        p: 1,
        border: "solid 1px black",
        textTransform: "capitalize",
        color: "inherit",
      }}
    >
      <Typography
        onClick={handleOpen}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 0,
          m: 0,
        }}
        component="ul"
      >
        <Typography
          sx={{
            fontWeight: open ? "bold" : "",
            fontSize: "0.8rem",
            display: "flex",
            justifyContent: "space-between",
            color: theme.palette.text.primary,
          }}
        >
          {name.trim() || "sin datos"}
          {/* Aqui se eliminan los espacios sobrantes y se añade un valor por defecto */}
        </Typography>
        <Typography
          color={data.length > 0 ? theme.palette.success.main : "error"}
          component="span"
          sx={{ fontSize: "0.6rem" }}
        >
          {/* aqui se muestra el numero de lementos que tiene dentro */}
          {data.length}
        </Typography>
      </Typography>
      {/* antes de renderizar el collapse se valida que realmente ese render se deba hacer */}
      {data.length > 0 && open && (
        <Collapse in={open} sx={{ mt: 1, pl: 2 }}>
          {/* cuando ya se abre el collapse entonces content es true y se procede a crear la secuencia de menus anidados */}
          {content &&
            content.map((opt, key) => (
              // primero se recorre el contenido
              <Box key={key} sx={{ mt: key > 0 ? 2 : 0 }}>
                {Object.keys(opt).length > 0 ? (
                  // aqui es donde se valida y se aplica la recursividad cuando el objeto tiene elementos o longitud >0
                  Object.entries(opt).map(([name, data], key) => (
                    // despues ese contenido que esta como objecto se comvierte a un array (Se que hay varias formas de hacerlo, deje esta por conveniencia)
                    <Box key={key} component="li" sx={{ listStyle: "none" }}>
                      {/* se llama llama autonomamente la funcion cada vez que se siga cumpliendo la condicion data.lengh >0 */}
                      <OptionNavbarSecondary
                        data={data as object[]}
                        name={strNormalize(name)}
                      />
                    </Box>
                  ))
                ) : (
                  // en caso de que si llege datos, pero que los datos sean incorrectos es decir que no halla key, se muestra este valor por default
                  <Typography
                    color={"error"}
                    sx={{ fontSize: "0.7rem", textAlign: "right" }}
                  >
                    Sin datos
                  </Typography>
                )}
              </Box>
            ))}
        </Collapse>
      )}
    </Box>
  );
};

export default OptionNavbarSecondary;
