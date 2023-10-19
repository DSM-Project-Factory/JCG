module.exports = {
  plugins: ['@emotion'],
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
}
