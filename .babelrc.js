module.exports = {
  presets: [
    ['@babel/typescript'],
    [
      '@babel/preset-react',
      {
        development: true,
      },
    ],
    [
      "@babel/preset-env",
      {
        corejs: { version: 3 },
        useBuiltIns: "usage",
        targets: {
          edge: 17,
          firefox: 60,
          chrome: 67,
          safari: 11.1,
          ie: 11
        }
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ["@babel/transform-runtime"],
    [
      'babel-plugin-import',
      {
        'libraryName': '@material-ui/core',
        'libraryDirectory': 'esm',
        'camel2DashComponentName': false
      },
      'core'
    ],
    [
      'babel-plugin-import',
      {
        'libraryName': '@material-ui/icons',
        'libraryDirectory': 'esm',
        'camel2DashComponentName': false
      },
      'icons'
    ]
  ]
}