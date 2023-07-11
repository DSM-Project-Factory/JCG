module.exports = {
  plugins: [
    '@emotion',
    '@emotion/babel-plugin',
  ],
  presets: [
    '@emotion/babel-preset-css-prop',
    [
      '@babel/preset-react',
      {
        runtime: 'classic',
        importSource: '@emotion/react',
      },
    ],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
};
