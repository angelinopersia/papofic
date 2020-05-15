# Model creation

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

Those parts are concatenated together in that same order.

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

```ts
const Builder: BuilderType[] = [
  {
    title: "Sender",
    id: "sender",
    // Each object in "items" will appear as a text input object
    // in the builder
    items: [
      { title: "First name", name: "sFirstName", icon: "person" },
      { title: "Last Name", name: "sLastName", icon: "person" },
      { title: "Address", name: "sAddress", icon: "home", fullRow: true },
    ],
  },
  {
    title: "Destination",
    id: "destination",
    items: [
      { title: "Recipient", name: "dName", icon: "person", fullRow: true },
      { title: "Address", name: "dAddress", icon: "home", fullRow: true },
    ],
  },
];
```

### API

#### Builder config

##### Upper level

| Key       | Type     | Note                                                                                          | Required |
| --------- | -------- | --------------------------------------------------------------------------------------------- | -------- |
| **title** | `string` | Identifies categories front-wise.                                                             | Yes      |
| **id**    | `string` | Serves as id for the category of information to be rendered in the Builder.                   | Yes      |
| **items** | `array`  | Contains `objects` containing [lower level](#lower-level) keys to be rendered in the Builder. | Yes      |

```ts
{
// "title" appears on the front end.
// "id" is for the code's process.
// See the Lower level section for "items".
	title: "Content",
	id: "content",
	items: [
		// {...},
	],
  },
```

##### Lower level

| Key         | Type      | Note                                                                     | Required |
| ----------- | --------- | ------------------------------------------------------------------------ | -------- |
| **title**   | `string`  | Identifies the items inside front-wise.                                  | Yes      |
| **name**    | `string`  | Serves as id for the key to be used by and for the global state manager. | Yes      |
| **icon**    | `string`  | Displays a chosen icon in the input text object.                         | No       |
| **fullRow** | `boolean` | When `true`, the item takes the entire row's space.                      | No       |
| **type**    | `string`  | Changes the type of the input text object into the given one.            | No       |

```ts
// {...}
items: [
// The key "name" should always start with the first letter(s)
// of the parent's "id" key (i.e. "content" -> "c")
	{ title: "First name", name: "cFirstName", icon: "person" },
	{ title: "Address", name: "cAddress", icon: "home", fullRow: true },
	{ title: "Reason", name: "cReason", type: "textArea" },
],
```
