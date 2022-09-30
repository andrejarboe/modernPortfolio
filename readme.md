# Modern Portfolio

## My steps:
- npx create-next-app@latest --ts client
- cd client
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- add to tailwind config:
    ```
     content: [
        './pages/**/*.{js,ts,jsx.tsx}',
        './components/**/*.{js,ts,jsx.tsx}'
    ],
    ```