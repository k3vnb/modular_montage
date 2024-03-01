import { ThemeProvider } from "@emotion/react";
import { Container } from "./App.elements";
import { useGlobalContext } from "./contexts/GlobalContext";

function App() {
  const { theme } = useGlobalContext();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        Widgets and Stuff
      </Container>
    </ThemeProvider>
  );
}

export default App;
