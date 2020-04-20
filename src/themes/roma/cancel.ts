const StyledView = {
  ".container": {
    // border: "1px red dashed",
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
    // border: "1px red dashed",
  },

  ".inner-header": {
    // border: "1px red dashed",
    backgroundColor: "#042a57",
    fontSize: "24px",
    gridColumn: "1",
    gridRow: "2 / 4",
  },

  ".inner-footing": {
    // border: "1px red dashed",
    backgroundColor: "#083974",
    gridColumn: "1",
    gridRow: "9 / 30",
  },
  ".outer-footing": {
    // border: "1px red dashed",
  },

  // ".photo": {
  // border: "1px red dashed",
  //   backgroundImage:
  //     "url('https://www.gstatic.com/tv/thumb/persons/514222/514222_v9_bb.jpg')",
  //   width: "auto",
  //   height: "50%",
  // },

  ".sender-names": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    fontSize: "25px",
    color: "white",
    backgroundColor: "#083974",
    gridColumn: "1",
    gridRow: "1",
  },
  ".sender-first-name": {
    // border: "1px red dashed",
  },
  ".sender-last-name": {
    // border: "1px red dashed",
  },
  ".sender-address": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    backgroundColor: "#083974",
    color: "white",
    gridColumn: "1",
    gridRow: "4",
  },
  ".sender-postcode": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    backgroundColor: "#083974",
    color: "white",
    gridColumn: "1",
    gridRow: "5",
  },
  ".sender-city": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    backgroundColor: "#083974",
    color: "white",
    gridColumn: "1",
    gridRow: "6",
  },
  ".sender-phone": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    backgroundColor: "#083974",
    color: "white",
    gridColumn: "1",
    gridRow: "7 / 8",
  },
  ".sender-email": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    backgroundColor: "#083974",
    color: "white",
    gridColumn: "1",
    gridRow: "8 / 11",
  },

  ".destin-name": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    gridColumn: "2",
    gridRow: "4",
  },
  ".destin-address": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    gridColumn: "2",
    gridRow: "5",
  },
  ".destin-postcode": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    gridColumn: "2",
    gridRow: "6",
  },
  ".destin-city": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    gridColumn: "2",
    gridRow: "7",
  },

  ".done-at": {
    // border: "1px red dashed",
    padding: "20px 10px 0px 10px",
    gridColumn: "2 / 3",
    gridRow: "1",
  },

  ".object-info": {
    // border: "1px red dashed",
    padding: "20px 10px 20px 10px",
    fontWeight: "bold",
    gridColumn: "2 / 3",
    gridRow: "8",
  },

  ".content": {
    // border: "1px red dashed",
    padding: "0 10px 0px 10px",
    gridColumn: "2 / 3",
    gridRow: "9",
  },

  ".signature": {
    // border: "1px red dashed",
    padding: "20px 10px 0px 10px",
    fontStyle: "italic",
    gridColumn: "2 / 3",
    gridRow: "10",
  },
};

export default StyledView;
