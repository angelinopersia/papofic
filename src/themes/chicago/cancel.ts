export const primaryColor = "tomato";

const StyledView = {
  ul: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },

  ".container": {
    padding: "25px 25px 25px 50px",
    fontFamily: "Calibri",
  },

  ".top": {},
  ".bottom": {},
  ".left": {
    width: 25,
    height: 1123,
    background: primaryColor,
    position: "absolute",
  },
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
    fontSize: 18,
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
