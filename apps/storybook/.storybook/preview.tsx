export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// We can define custom decorators here if we need! :)
// Like adding Theme providers for Styled Components
export const decorators = [(Story) => <Story />];
