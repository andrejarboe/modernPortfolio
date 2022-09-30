# Modern Portfolio

### my notes from this project
- ctrl r in the terminal is recursive search 
- add node_modules to global gitignore

## Setup:
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
- centering:
    * max-w-7xl mx-auto p-5
- make Header.tsx
    * type tsrfce
- npm install react-social-icons
- framer motion



"result":[2 items
0:{5 items
"_id":"1d212b32-6e51-4735-969e-84714a60ede8"
"description":"A responsive email made with html"
"mainImage":{2 items
"_type":"image"
"asset":{2 items
"_ref":"image-2717366c220d5264878f6adc0379cf38fa96013c-975x830-jpg"
"_type":"reference"
}
}
"slug":{2 items
"_type":"slug"
"current":"responsive-watch-email"
}
"title":"Responsive Watch Email"
}
1:{5 items
"_id":"aa2ba6c3-5565-4aa2-8c26-22871e12a2d1"
"description":"A chrome extension that makes teachable.com more user friendly."
"mainImage":NULL
"slug":{2 items
"_type":"slug"
"current":"teachable-enhanced-chrome-extension"
}
"title":"Teachable Enhanced Chrome Extension"
}
]