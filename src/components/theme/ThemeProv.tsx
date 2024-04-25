import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

interface ThemeProvProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const ThemeProv = ({ children }: ThemeProvProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProv;
