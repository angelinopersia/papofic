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
  ".bottom": {
    width: 794,
    height: 500,
    background: "#ade4c5",
    position: "absolute",
    transform: "skewY(-11deg)",
  },
  ".left": {},
  ".right": {},

  ".head": { display: "grid" },
  ".sender": {},
  ".destin": { textAlign: "right" },

  ".done-at": {
    paddingTop: 20,
    textAlign: "right",
  },

  ".subject-info": {
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
