## 安裝

### install

```sh
yarn add -D prettier eslint-config-prettier prettier-plugin-tailwindcss
```

### diff file

./eslintrc.json

```diff
{
  "extends": [
    "next/core-web-vitals",
+   "plugin:prettier/recommended",
+   "prettier"
    ]
}

```

./.prettierrc.json

```diff
{
+ "trailingComma": "es5",
+ "semi": true,
+ "tabWidth": 2,
+ "singleQuote": true,
+ "jsxSingleQuote": true,
+ "plugins": ["prettier-plugin-tailwindcss"]
}

```

````

./.prettierignore

```
.github
.husky
dist
node_modules

````

## 參考

https://gist.github.com/Nivethan-Ar/2375bf451d4c30148916b59c7e0c51c0
