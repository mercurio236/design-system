import { join, dirname } from 'path'
import {StorybookConfig} from '@storybook/react-vite'
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
  stories: ['../src/pages/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|mdx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core:{
    builder: '@storybook/builder-vite'
  },
  

  async viteFinal(config, { configType }){
    if (configType === 'PRODUCTION') {
      config.base = '/design-system/'
    }

    return config
  },
}
export default config
