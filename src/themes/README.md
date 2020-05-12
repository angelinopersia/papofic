<div align="center">

# Adding your own theme

</div>

Each theme has its own **folder**. Such **folders** contain **typescript files**.
Each one of those **typescript files** represent the css of a template.

To add your own theme:

1. Create a new **folder** within `/src/themes`, with a name of your choosing.

2. In your newly created **folder**, create a **typescript file** named after an existing template of your choice from `/src/models`, in lowercase (e.g., Model -> model).

The content of your **typescript file** must begin from the code snippet found in the **README** file in `/src/models/(your chosen template)`.

3. In `/src/themes/themesConfig.ts`, import your own theme from your **theme folder**'s **typescript file**.

The import must be named after your theme name, concatenated with the concerned document name, in CamelCase.

e.g., `import MyThemeModel from "./myTheme/model";`

4. Still in `/src/themes/themesConfig.ts`, export your theme in the constant array `themes` as an object.

The object must contain:

- the name of your theme as a lowercase string in the key `title`.
- the import(s) related to your theme in the key(s) named after the model(s) present in your **theme folder**.

e.g., `{ title: "myTheme", model: MyThemeModel, },`
