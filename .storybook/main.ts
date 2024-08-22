import type { StorybookConfig } from "@storybook/nextjs";

const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  babel: async option => ({
    ...option,
    plugin: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object'
    ],
  }),
  webpackFinal: async (config) => {

    config.resolve = config.resolve || {};
    
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json')
      }),
    ];

    return config;
  }
};
export default config;
