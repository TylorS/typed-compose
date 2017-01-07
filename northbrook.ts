export = {
  plugins: [
    'northbrook/plugins',
    'mocha',
    'tsc',
    'tslint',
  ],

  tsc: {
    es2015: true,
    patterns: [
      'src/*.ts',
      '!src/*.test.ts',
    ],
  },
};
