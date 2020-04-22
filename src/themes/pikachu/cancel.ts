const StyledView = {
  ".x": {
    // border: "1px red dashed",
  },

  ".container": {
    display: "grid",
    padding: "25px",
    width: "794px",
    // height: "1123px",
    backgroundColor: "white",
    color: "black",
    fontFamily: "sans",
  },

  ".outer-header": {
    //
  },
  ".inner-header": {
    width: "100%",
    borderBottom: "2px #B50000 solid",
    gridColumn: "1 / 4",
    gridRow: "7",
  },

  ".inner-footing": {
    gridColumn: "1 / 4",
    gridRow: "17",
    width: "100%",
    height: "330px",
    borderBottom: "2px #B50000 solid",
  },
  ".outer-footing": {
    //
  },

  // SENDER
  ".sender-names": {
    display: "flex",
    flexDirection: "row",
    fontSize: "30px",
    color: "#B50000",
    gridColumn: "1",
    gridRow: "1 / 8",
  },
  ".sender-first-name": {
    display: "flex",
    flexDirection: "column-reverse",
    paddingRight: "10px",
  },
  ".sender-last-name": {
    display: "flex",
    flexDirection: "column-reverse",
  },
  ".sender-address": {
    color: "#B50000",
    fontWeight: "bold",
    textAlign: "right",
    gridColumn: "2",
    gridRow: "3",
  },
  ".sender-postcode": {
    color: "#B50000",
    fontWeight: "bold",
    textAlign: "right",
    gridColumn: "2",
    gridRow: "4",
  },
  ".sender-city": {
    color: "#B50000",
    fontWeight: "bold",
    textAlign: "right",
    gridColumn: "2",
    gridRow: "5",
  },
  ".sender-phone": {
    color: "#B50000",
    fontWeight: "bold",
    textAlign: "right",
    gridColumn: "2",
    gridRow: "6",
  },
  ".sender-email": {
    color: "#B50000",
    fontWeight: "bold",
    textAlign: "right",
    height: "23px",
    gridColumn: "2",
    gridRow: "7",
  },

  // DESTINATION
  ".destin-name": {
    gridColumn: "1",
    gridRow: "9",
  },
  ".destin-address": {
    gridColumn: "1",
    gridRow: "10",
  },
  ".destin-postcode": {
    gridColumn: "1",
    gridRow: "11",
  },
  ".destin-city": {
    gridColumn: "1",
    gridRow: "12",
  },

  // MISC
  ".done-at": {
    padding: "20px 0 20px 0",
    gridColumn: "1",
    gridRow: "8",
  },

  ".object-info": {
    padding: "20px 0 20px 0",
    fontWeight: "bold",
    gridColumn: "1 / 3",
    gridRow: "13",
  },

  // CONTENT
  ".content": {
    paddingTop: "50px",
    gridColumn: "1 / 3",
    gridRow: "14",
  },

  ".signature": {
    paddingTop: "20px",
    fontStyle: "italic",
    gridColumn: "1 / 3",
    gridRow: "15",
  },
};

export default StyledView;
