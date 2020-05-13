<div align="center">

# Adding your own theme

</div>

Each theme has its own **folder**. Such **folders** contain **typescript files**.
Each one of those **typescript files** represent the css of a template.

To add your own theme:

1. Create a new **folder** within `/src/themes`, with a name of your choosing.

2. In your newly created **folder**, create a **typescript file** named after an existing template of your choice from `/src/models`.

The content of your **typescript file** must begin from the code snippet found in the **README** file in `/src/models/(your chosen template)`.

3. In `/src/themes/themesConfig.ts`, import your own theme from your **theme folder**'s **typescript file**.

The import must be named after your theme name, concatenated with the concerned document name, in _CamelCase_.

e.g., `import MyThemeXX000 from "./myTheme/XX000";`

4. Still in `/src/themes/themesConfig.ts`, export your theme in the constant array `themes` as an object.

The object must contain:

- the name of your theme as a lowercase string in the key `title`.
- the import(s) related to your theme in the key(s) named after the model(s) present in your **theme folder**.

e.g., `{ title: "myTheme", model: MyThemeXX000, },`

## Thumbnails

Each theme appears in a themes tab with their own thumbnail.

Papofic's themes thumbnails come from [Quinn Rohlf](https://github.com/qrohlf)'s fantastic [trianglify](https://trianglify.io/).

Thus you must also create a thumbnail from trianglify. Don't worry, it's easy.

1. The thumbnail must at least:

- have its width and height be 150 pixels each.
- have its colors match the look of the theme (as to not mislead users).

The rest of the details are up to you and your creativity.

2. When you're done creating your thumbnail, click on **"Export"** and **"Download Low-Res Preview"**.

3. Rename the exported PNG after your theme's name in _camelCase_, and drop it into `/src/thumbnails`.

4. Import it into `/src/thumbnails/index.ts`.

The import must be named after your theme's name in _camelCase_.

5. Include the import in the constant object `thumbnails`.

### Done! Your theme is now compatible!
