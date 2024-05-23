import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/system";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { THEMES, THEME_IDS } from "../src/theme";

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
      themes: THEMES,
      defaultTheme: THEME_IDS.default,
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
