import yup from "yup";
import { regexPassword } from "./regex";

export const loginSchema = () =>
  yup.object({
    name: yup
      .string()
      .min(4, "El nombre de usuario debe tener mínimo cuatro caracteres")
      .required("El nombre de usuario es requerido"),
    password: yup
      .string()
      .min(6, "El Password debe tener mínimo 6 caracteres")
      .matches(
        regexPassword,
        "El password debe contener letras mayúsculas, minúsculas y números"
      )
      .required("El password es requerido"),
  });
