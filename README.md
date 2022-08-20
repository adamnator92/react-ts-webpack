Tutorial video url: https://www.youtube.com/watch?v=Elpu7CIuqjY&list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo

Configuration Tools: https://createapp.dev/

### Start

1. `npm init -y`
2. `yarn add react react-dom`
3. `yarn add -D typescript @types/react @types/react-dom`
4. `npx tsc --init` to generated tsconfig.json update the config to suite your case, we will use it for type checking, but to transpile we will use babel
5. `yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript`, babel will tell webpack how to compile the code
6. create `.babelrc` file and add `"presets": ["@babel/preset-env", "@babel/react", "@babel/preset-typescript"]`, `present-` is optional, babel will understand https://stackoverflow.com/a/56116292/6715348

What is babel and ES6 https://blog.jakoblind.no/babel-webpack-es6/
What is @babel/preset-env and why do I need it? https://blog.jakoblind.no/babel-preset-env/
TLDR:

- babel compile code to ES5 which is the version compatible with most browser, you can compile the code using `npx babel input.js --out-file output.js`
- babelrc > plugin like `@babel/plugin-transform-arrow-functions` transform the arrow function to es5 function
- babelrc > presets like `@babel/preset-env` contain all plugins you need to transpile all ES6 features, in short `@babel/preset` is a package that contains common bundles of babel plugins

7. `yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin` use webpack to bundle
8. `yarn add -D babel-loader` allow transpile using babel with webpack
9. create `src/index.tsx`, `public/index.html` and `webpack.config.js`, see explanation in webpack.config.js file
10. `yarn add -D css-loader style-loader` to allow webpack understand css, add it to webpack.config.js

### Eslint

1. `yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks`, contain rule for react and react hook
2. `yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin`, first package allow typescript code to be lint, second contain rule typescript specific
3. create .estlintrc.js

### Prettier

1. `yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`, `eslint-config-prettier` disabled prettier rule that might conflict with prettier formation, run prettier as eslint rules
2. create .prettierrc
3. make sure prettier is the default vscode formatter

### Pre-Commit

1. `yarn add -D husky@4 lint-staged`
2. add configuration to package.json

# GOOD to Have

### Save code size

1. `yarn add -D @babel/runtime @babel/plugin-transform-runtime`

### Copy assets

1. `yarn add -D copy-webpack-plugin`

### Bundle analyze

1. `yarn add -D webpack-bundle-analyzer`

### SCSS loader

https://dev.to/deadwing7x/setup-a-react-app-with-webpack-and-babel-4o3k

### Browser compatible

1. (optional): configure browser you support using .browserlistrc, https://blog.jakoblind.no/babel-preset-env-custom-browserlistrc/
