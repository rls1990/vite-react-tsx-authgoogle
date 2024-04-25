export interface GoogleAuthProps {
  type?: "standard" | "icon";
  theme?: "outline" | "filled_blue" | "filled_black";
  size?: "large" | "medium" | "small";
  shape?: "rectangular" | "pill" | "circle" | "square";
  logo_alignment?: "left" | "center";
  width?: string | number;
  locale?: string | "es" | "en";
}

export const initGoogleAuth: GoogleAuthProps = {
  type: "standard",
  theme: "outline",
  size: "large",
  shape: "rectangular",
  logo_alignment: "center",
};
