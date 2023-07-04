### install

```sh
yarn add -D daisy
```

### file

./tailwind.config.js

```diff
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
  },
+  plugins: [require("daisyui")],
}
```

### Test

```
    <div className='tooltip' data-tip='hello'>
        <button className='btn'>Hover me</button>
    </div>
```
