const StyledView = {
  ".container": {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    padding: "25px",
    width: "794px",
    // height: "1123px",
    backgroundColor: "white",
    color: "black",
    border: "1px red dashed",
  },

  ".outer-header": {
    // border: "1px red dashed",
    // width: "auto",
    // height: "auto",
  },
  ".inner-header": {
    // border: "1px red dashed",
    // width: "auto",
    // height: "auto",
  },

  ".inner-footing": {
    // border: "1px red dashed",
    // width: "auto",
    // height: "auto",
  },
  ".outer-footing": {
    // border: "1px red dashed",
    // width: "auto",
    // height: "auto",
  },

  ".sender-info": {
    display: "flex",
    flexDirection: "column",
    border: "1px red dashed",
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },

  ".destin-info": {
    display: "flex",
    flexDirection: "column",
    textAlignLast: "right",
    border: "1px red dashed",
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },

  ".done-at": {
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    textAlignLast: "right",
    border: "1px red dashed",
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },

  ".object-info": {
    padding: "20px 0 20px 0",
    fontWeight: "bold",
    border: "1px red dashed",
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },

  ".content": {
    border: "1px red dashed",
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },

  ".signature": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingTop: "20px",
    fontStyle: "italic",
    border: "1px red dashed",
    gridColumnStart: "1",
    gridColumnEnd: "4",
  },
};

// const StyledView = {
//   ".container": {
//     display: "flex",
//     flexDirection: "column",
//     padding: "25px",
//     width: "794px",
//     height: "1123px",
//     backgroundColor: "white",
//     color: "black",
//   },

//   ".sender-info": {
//     display: "flex",
//     flexDirection: "column",
//   },

//   ".destin-info": {
//     display: "flex",
//     flexDirection: "column",
//     textAlignLast: "right",
//   },

//   ".done-at": {
//     paddingTop: "20px",
//     display: "flex",
//     flexDirection: "column",
//     textAlignLast: "right",
//   },

//   ".object-info": {
//     padding: "20px 0 20px 0",
//     fontWeight: "bold",
//   },

//   ".signature": {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-end",
//     height: "40%",
//     paddingTop: "20px",
//     fontStyle: "italic",
//   },
// };

export default StyledView;
