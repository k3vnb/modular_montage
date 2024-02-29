import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { theme } from "../src/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      themes: {
        lucid: theme,
      },
      defaultTheme: "lucid",
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
