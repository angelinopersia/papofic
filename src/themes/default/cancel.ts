const StyledView = {
  ".x": {
    // border: "1px red dashed",
  },

  ".container": {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    padding: "25px",
    width: "794px",
    // height: "1123px",
    backgroundColor: "white",
    color: "black",
  },

  ".outer-header": {
    //
  },
  ".inner-header": {
    //
  },

  ".inner-footing": {
    //
  },
  ".outer-footing": {
    //
  },

  // SENDER
  ".sender-names": {
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
    gridColumn: "1",
    gridRow: "3",
  },
  ".sender-postcode": {
    gridColumn: "1",
    gridRow: "4",
  },
  ".sender-city": {
    gridColumn: "1",
    gridRow: "5",
  },
  ".sender-phone": {
    gridColumn: "1",
    gridRow: "6",
  },
  ".sender-email": {
    gridColumn: "1",
    gridRow: "7",
  },

  // DESTINATION
  ".destin-name": {
    gridColumn: "2",
    gridRow: "8",
    textAlignLast: "right",
  },
  ".destin-address": {
    gridColumn: "2",
    gridRow: "9",
    textAlignLast: "right",
  },
  ".destin-postcode": {
    gridColumn: "2",
    gridRow: "10",
    textAlignLast: "right",
  },
  ".destin-city": {
    gridColumn: "2",
    gridRow: "11",
    textAlignLast: "right",
  },

  // MISC
  ".done-at": {
    paddingTop: "20px",
    textAlignLast: "right",
    gridColumn: "1 / 3",
  },

  ".object-info": {
    padding: "40px 0 40px 0",
    fontWeight: "bold",
    gridColumn: "1 / 3",
  },

  // CONTENT
  ".content": {
    gridColumn: "1 / 3",
  },

  ".signature": {
    paddingTop: "100px",
    fontStyle: "italic",
    gridColumn: "1 / 3",
  },
};

export default StyledView;
