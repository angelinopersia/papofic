# Model creation

Summary:

- [Naming process](#naming-process)
- [Structure](#structure)

## Naming process

Several details are necessary for the naming of the model:

**1. Document type**

To determine if the document is a letter, a bill, an estimate...

**2. Reason**

Depending on the document type, the reason must be precised as well. It could be resignation, cancellation...

**3. Number**

Multiple variants of a model (same document type and same reason) may exist. The number will differentiate them.

---

The name of the model consists of:

- The **Document type**'s first letter
- The **Reason**'s first 3 letters \*
- The **Number**

Those parts are concatenated together in that same order and in uppercase.

\* _If the first 3 letters of a newly created reason already exist for another reason, include the next letter to differentiate them (i.e. the first 4 letters, and so on...)_

e.g.:

1. Document type: **Letter -> (L)**

2. Reason: **Cancellation -> (CAN)**

3. Number **-> 001** (Number is determined by `amount of existing variants + 1`)

#### Result: LCAN001

### API

| **Document Type** | **Initial** |
| :---------------- | :---------- |
| Letter            | `L`         |

| **Reason**   | **Initial** |
| :----------- | :---------- |
| Cancellation | `CAN`       |
| Resignation  | `RES`       |

## Structure

The following code snippet is a brief example of how the builder's content is structured.
You may use it to create your own builder layout.

```ts
const Builder: BuilderType[] = [
  {
    title: "Sender",
    id: "sender",
    items: [
      { title: "First name", name: "sFirstName", icon: "person" },
      // {...}
    ],
    // Each object in "items" will appear as a text input object
    // in the builder
  },
  // {...}
];
```

### Creating the file

Create a `.tsx` file, of which the name is up to standard according to the [naming process](#naming-process).

The file must basely look like the following code:

```jsx
import React from "react";
import styled from "styled-components";
import { BuilderType } from "../../types/index";

const Builder: BuilderType[] = [
  // YOUR BUILDER CONFIG HERE
];
const View = ({}: // Default strings for typed item names
// sFirstName = "First name",
// ... = "...",
any) => (
  <Div>
    <div className="top" />
    <div className="left" />
    <div className="right" />
    <div className="container">
      <div className="head">
        <ul className="sender">
          <li>{/* Sender data list */}</li>
        </ul>
        <ul className="destin">
          <li>{/* Destination data list */}</li>
        </ul>
        <span className="done-at">{/* Done at data */}</span>
        <span className="object-info">{/* Object data */}</span>
      </div>
      <div className="content">{/* Document's content */}</div>
      <p className="signature"></p>
    </div>
    <div className="bottom" />
  </Div>
);

const Naming = {
  id: [
    // Your processed model name as a string
  ],
  title: [
    // The normal, full name of the model for front end view
  ],
};

export const LXXX001 = { Builder, View, Naming };
const Div = styled.div`
  background: white;
  ${(p: any) => p.theme};
`;
```

### API

#### Builder config

##### Group

| Key       | Type     | Note                                                                                | Required |
| --------- | -------- | ----------------------------------------------------------------------------------- | -------- |
| **title** | `string` | Identifies categories front-wise.                                                   | Yes      |
| **id**    | `string` | Serves as id for the category of information to be rendered in the Builder.         | Yes      |
| **items** | `array`  | Contains `objects` containing [fields](#fields) keys to be rendered in the Builder. | Yes      |

```ts

{
// "title" appears on the front end.
// "id" is for the code's process.
// See the "Fields" section for "items".
	title: "Content",
	id: "content",
	items: [
		// {...} (Fields),
	],
  },
```

##### Fields

| Key         | Type      | Note                                                                     | Required |
| ----------- | --------- | ------------------------------------------------------------------------ | -------- |
| **title**   | `string`  | Identifies the items inside front-wise.                                  | Yes      |
| **name**    | `string`  | Serves as id for the key to be used by and for the global state manager. | Yes      |
| **icon**    | `string`  | Displays a chosen icon in the input text object.                         | No       |
| **fullRow** | `boolean` | When `true`, the item takes the entire row's space.                      | No       |
| **type**    | `string`  | Changes the type of the input text object into the given one.            | No       |

```ts
// {...} (Group)
items: [
// The key "name" should always start with the first letter(s)
// of the Group's "id" key (i.e. "content" -> "c")
	{ title: "First name", name: "cFirstName", icon: "person" },
	{ title: "Address", name: "cAddress", icon: "home", fullRow: true },
	{ title: "Reason", name: "cReason", type: "textArea" },
],
```
