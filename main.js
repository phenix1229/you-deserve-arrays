function getFirstItemFrom(ar) {
  return ar[0];
}

function getLastItemFrom(ar) {
  return ar[ar.length - 1];
}

function getIndex3(ar) {
  if (ar.length >= 4){
    return ar[3];
  } else{
    return ar[ar.length -1];
  }
}

function firstItemIsNumber(ar) {
  if (typeof ar[0] == 'number'){
    return true;
  } else {
    return false;
  }
}

function isLongList(ar) {
  if (ar.length >= 10){
    return true;
  } else {
    return false;
  }
}



module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
}