const StyledView = {
  ul: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },

  ".container": {
    padding: "25px 25px",
    fontFamily: "Calibri",
    position: "absolute",
    zIndex: 2,
  },

  ".top": {
    position: "absolute",
    width: 794,
    height: 325,
    background: "#D8E1E8",
    zIndex: 1,
  },
  ".bottom": {},
  ".left": {},
  ".right": {},

  ".head": { display: "grid", color: "#202B33" },
  ".sender": {},
  ".destin": { textAlign: "right" },

  ".done-at": {
    paddingTop: 20,
    textAlign: "right",
    color: "#202B33",
  },

  ".subject-info": {
    padding: "40px 0",
    fontSize: 19,
    letterSpacing: 1.5,
    color: "#293742",
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
