const StyledView = {
  ".x": {
    // border: "1px red dashed",
  },

  ".container": {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    // padding: "25px",
    width: "794px",
    height: "1123px",
    backgroundColor: "white",
    color: "black",
    fontFamily: "calibri",
  },

  ".outer-header": {
    //
  },
  ".inner-header": {
    backgroundColor: "#042a57",
    fontSize: "24px",
    gridColumn: "1",
    gridRow: "2 / 4",
  },

  ".inner-footing": {
    backgroundColor: "#083974",
    gridColumn: "1",
    gridRow: "9 / 30",
  },
  ".outer-footing": {
    //
  },

  // SENDER
  ".sender-names": {
    padding: "20px 10px 0px 10px",
    fontSize: "25px",
    color: "white",
    backgroundColor: "#083974",
    gridColumn: "1",
    gridRow: "1",
  },
  ".sender-first-name": {
    //
  },
  ".sender-last-name": {
    //
  },
  ".sender-address": {
    padding: "10px 10px 0px 10px",
    backgroundColor: "#083974",
    color: "white",
    gridColumn: "1",
    gridRow: "4",
  },
  ".sender-postcode": {
    padding: "10px 10px 0px 10px",
    backgroundColor: "#083974",
    color: "white",
    gridColumn: "1",
    gridRow: "5",
  },
  ".sender-city": {
    padding: "10px 10px 0px 10px",
    backgroundColor: "#083974",
    color: "white",
    gridColumn: "1",
    gridRow: "6",
  },
  ".sender-phone": {
    padding: "10px 10px 0px 10px",
    backgroundColor: "#083974",
    color: "white",
    gridColumn: "1",
    gridRow: "7 / 8",
  },
  ".sender-email": {
    padding: "10px 10px 0px 10px",
    backgroundColor: "#083974",
    color: "white",
    gridColumn: "1",
    gridRow: "8 / 11",
  },

  // DESTINATION
  ".destin-name": {
    padding: "0 10px 0px 10px",
    gridColumn: "2",
    gridRow: "4",
  },
  ".destin-address": {
    padding: "0 10px 0px 10px",
    gridColumn: "2",
    gridRow: "5",
  },
  ".destin-postcode": {
    padding: "0 10px 0px 10px",
    gridColumn: "2",
    gridRow: "6",
  },
  ".destin-city": {
    padding: "0 10px 0px 10px",
    gridColumn: "2",
    gridRow: "7",
  },

  // MISC
  ".done-at": {
    padding: "20px 10px 0px 10px",
    gridColumn: "2 / 3",
    gridRow: "1",
  },

  ".object-info": {
    padding: "20px 10px 20px 10px",
    fontWeight: "bold",
    gridColumn: "2 / 3",
    gridRow: "8",
  },

  // CONTENT
  ".content": {
    padding: "0 10px 0px 10px",
    gridColumn: "2 / 3",
    gridRow: "9",
  },

  ".signature": {
    padding: "20px 10px 0px 10px",
    fontStyle: "italic",
    gridColumn: "2 / 3",
    gridRow: "10",
  },
};

export default StyledView;
