const StyledView = {
  ".container": {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    padding: "25px",
    width: "794px",
    // height: "1123px",
    backgroundColor: "white",
    color: "black",
    fontFamily: "calibri",
  },

  ".outer-header": {
    // width: "auto",
    height: "50px",
  },

  ".inner-header": {
    width: "50%",
    height: "100px",
    borderBottom: "1px black solid",
    gridColumnStart: "2",
    gridColumnEnd: "4",
  },

  ".inner-footing": {
    // width: "auto",
    // height: "auto",
  },

  ".outer-footing": {
    // width: "auto",
    // height: "auto",
  },

  ".sender-info": {
    display: "flex",
    flexDirection: "column",
    gridColumnStart: "1",
    gridColumnEnd: "4",
    gridRow: "1",
    color: "red",
    fontWeight: "bold",
  },

  ".destin-info": {
    display: "flex",
    flexDirection: "column",
    gridColumnStart: "1",
    gridColumnEnd: "4",
    gridRow: "3",
  },

  ".done-at": {
    paddingTop: "20px",
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "column",
    gridColumnStart: "1",
    gridColumnEnd: "4",
    gridRow: "2",
    color: "red",
  },

  ".object-info": {
    padding: "20px 0 20px 0",
    fontWeight: "bold",
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },

  ".content": {
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },

  ".signature": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingTop: "20px",
    fontStyle: "italic",
    fontWeight: "800",
    fontSize: "20px",
    gridColumnStart: "1",
    gridColumnEnd: "4",
    textAlign: "center",
    color: "red",
  },
};

export default StyledView;
