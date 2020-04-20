const StyledView = {
  ".container": {
    // border: "1px red dashed",
    display: "grid",
    padding: "25px",
    width: "794px",
    // height: "1123px",
    backgroundColor: "white",
    color: "black",
    fontFamily: "sans",
  },

  ".outer-header": {
    // width: "auto",
    // height: "50px",
  },

  ".inner-header": {
    // border: "1px red dashed",
    width: "100%",
    borderBottom: "2px #B50000 solid",
    gridColumn: "1 / 4",
    gridRow: "7",
  },

  ".inner-footing": {
    // border: "1px red dashed",
    position: "absolute",
    bottom: "5%",
    left: "5%",
    width: "90%",
    borderBottom: "2px #B50000 solid",
  },

  ".outer-footing": {
    // width: "auto",
    // height: "auto",
  },

  ".sender-names": {
    // border: "1px red dashed",
    display: "flex",
    flexDirection: "row",
    fontSize: "30px",
    color: "#B50000",
    gridColumn: "1",
    gridRow: "1 / 8",
  },
  ".sender-first-name": {
    // border: "1px red dashed",
    display: "flex",
    flexDirection: "column-reverse",
    paddingRight: "10px",
  },
  ".sender-last-name": {
    // border: "1px red dashed",
    display: "flex",
    flexDirection: "column-reverse",
  },
  ".sender-address": {
    // border: "1px red dashed",
    color: "#B50000",
    fontWeight: "bold",
    textAlign: "right",
    gridColumn: "2",
    gridRow: "3",
  },
  ".sender-postcode": {
    // border: "1px red dashed",
    color: "#B50000",
    fontWeight: "bold",
    textAlign: "right",
    gridColumn: "2",
    gridRow: "4",
  },
  ".sender-city": {
    // border: "1px red dashed",
    color: "#B50000",
    fontWeight: "bold",
    textAlign: "right",
    gridColumn: "2",
    gridRow: "5",
  },
  ".sender-phone": {
    // border: "1px red dashed",
    color: "#B50000",
    fontWeight: "bold",
    textAlign: "right",
    gridColumn: "2",
    gridRow: "6",
  },
  ".sender-email": {
    // border: "1px red dashed",
    color: "#B50000",
    fontWeight: "bold",
    textAlign: "right",
    gridColumn: "2",
    gridRow: "7",
  },

  ".destin-name": {
    // border: "1px red dashed",
    gridColumn: "1",
    gridRow: "9",
  },
  ".destin-address": {
    // border: "1px red dashed",
    gridColumn: "1",
    gridRow: "10",
  },
  ".destin-postcode": {
    // border: "1px red dashed",
    gridColumn: "1",
    gridRow: "11",
  },
  ".destin-city": {
    // border: "1px red dashed",
    gridColumn: "1",
    gridRow: "12",
  },

  ".done-at": {
    // border: "1px red dashed",
    padding: "20px 0 20px 0",
    gridColumn: "1",
    gridRow: "8",
  },

  ".object-info": {
    // border: "1px red dashed",
    padding: "20px 0 20px 0",
    fontWeight: "bold",
    gridColumn: "1 / 3",
    gridRow: "13",
  },

  ".content": {
    // border: "1px red dashed",
    paddingTop: "50px",
    gridColumn: "1 / 3",
    gridRow: "14",
  },

  ".signature": {
    // border: "1px red dashed",
    paddingTop: "20px",
    fontStyle: "italic",
    gridColumn: "1 / 3",
    gridRow: "15",
  },
};

export default StyledView;
