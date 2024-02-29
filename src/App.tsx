import { ThemeProvider } from "@emotion/react";
import { Container } from "./App.elements";
import { useGlobalContext } from "./contexts/GlobalContext";

function App() {
  const { theme } = useGlobalContext();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        Use Form State
      </Container>
    </ThemeProvider>
  );
}

export default App;
