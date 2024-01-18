module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'airbnb', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'off', // import시 절대경로 오류 해결
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ], // 변수명 'state'의 배열 의존성 무시
    'react/react-in-jsx-scope': 'off', // React를 import 하지 않아도 jsx 작성 가능
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // .js file 안에서도 jsx 작성 가능
  },
};
