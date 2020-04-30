export const primaryColor = "#000000";

const StyledView = {
  ul: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },

  ".container": {
    padding: 25,
    fontFamily: "Calibri",
  },

  ".top": {},
  ".bottom": {},
  ".left": {},
  ".right": {},

  ".head": { display: "grid" },
  ".sender": {},
  ".destin": { textAlign: "right" },

  ".done-at": {
    paddingTop: 20,
    textAlign: "right",
  },

  ".object-info": {
    padding: "40px 0",
    fontWeight: 700,
  },

  ".content": {
    textAlign: "justify",
  },

  ".signature": {
    paddingTop: 100,
    fontStyle: "italic",
  },
};

export default StyledView;
