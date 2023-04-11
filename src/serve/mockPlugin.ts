import { DevServerCoreConfig, getRequestFilePath, Plugin } from '@web/dev-server-core';
import { MockPluginConfig } from '../shared/config/MockPluginConfig';
import { validateMockConfig } from '../shared/config/validateMockConfig';
import { readMockConfig } from '../shared/config/readMockConfig';

const regexpReplaceWebsocket = /<!-- injected by web-dev-server -->(.|\s)*<\/script>/m;

export function storybookPlugin(pluginConfig: MockPluginConfig): Plugin {
  validateMockConfig(pluginConfig);

  const storybookConfig = readMockConfig(pluginConfig);
  let serverConfig: DevServerCoreConfig;

  return {
    name: 'mock-server',

    serverStart(args) {
      serverConfig = args.config;
    },

    resolveMimeType(context) {
    },

    async transform(context) {
    },

    async serve(context) {
      //TODO: add return response based on host e.g. should start with api.* and path
      if (context.path === '/') {

        throw new Error("Unimplement flow")

      }

    },
  };
}
