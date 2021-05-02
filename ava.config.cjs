module.exports = {
  extensions: {
    ts: 'module',
  },
  nodeArguments: [
    '--loader=ts-node/esm',
    '--experimental-specifier-resolution=node',
  ],
  nonSemVerExperiments: {
    configurableModuleFormat: true,
  },
  files: ['test/**/*.ts'],
};
