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

- The document type's first letter
- The reason's 3 first letters
- The number

Those parts are concatenated together in that same order.

e.g.:

1. Document type: **Letter -> (L)**

2. Reason: **Cancellation -> (CAN)**

3. Number: Does a version of a cancellation letter already exist? **-> 000\***

### Result: LCAN001

## Structure

blablabla build like this

# API

## Naming process

### Document type initials

| **Document Type** | **Initial** |
| :---------------- | :---------- |
| Letter            | `L`         |

### Reason initials

| **Reason**   | **Initial** |
| :----------- | :---------- |
| Cancellation | `CAN`       |

## Structure

typescript stuff
