const StyledView = {
  ".container": {
    // border: "1px red dashed",
    display: "grid",
    // gridTemplateColumns: "50% 50%",
    padding: "25px",
    width: "794px",
    // height: "1123px",
    backgroundColor: "white",
    color: "black",
  },

  ".outer-header": {
    // border: "1px red dashed",
  },
  ".inner-header": {
    // border: "1px red dashed",
  },

  ".inner-footing": {
    // border: "1px red dashed",
  },
  ".outer-footing": {
    // border: "1px red dashed",
  },

  ".sender-names": {
    // border: "1px red dashed",
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
    gridColumn: "1",
    gridRow: "3",
  },
  ".sender-postcode": {
    // border: "1px red dashed",
    gridColumn: "1",
    gridRow: "4",
  },
  ".sender-city": {
    // border: "1px red dashed",
    gridColumn: "1",
    gridRow: "5",
  },
  ".sender-phone": {
    // border: "1px red dashed",
    gridColumn: "1",
    gridRow: "6",
  },
  ".sender-email": {
    // border: "1px red dashed",
    gridColumn: "1",
    gridRow: "7",
  },

  ".destin-name": {
    // border: "1px red dashed",
    gridColumn: "2",
    gridRow: "8",
    textAlignLast: "right",
  },
  ".destin-address": {
    // border: "1px red dashed",
    gridColumn: "2",
    gridRow: "9",
    textAlignLast: "right",
  },
  ".destin-postcode": {
    // border: "1px red dashed",
    gridColumn: "2",
    gridRow: "10",
    textAlignLast: "right",
  },
  ".destin-city": {
    // border: "1px red dashed",
    gridColumn: "2",
    gridRow: "11",
    textAlignLast: "right",
  },

  ".done-at": {
    // border: "1px red dashed",
    paddingTop: "20px",
    textAlignLast: "right",
    gridColumn: "1 / 3",
  },

  ".object-info": {
    // border: "1px red dashed",
    padding: "20px 0 20px 0",
    fontWeight: "bold",
    gridColumn: "1 / 3",
  },

  ".content": {
    // border: "1px red dashed",
    gridColumn: "1 / 3",
  },

  ".signature": {
    // border: "1px red dashed",
    paddingTop: "20px",
    fontStyle: "italic",
    gridColumn: "1 / 3",
  },
};

export default StyledView;
