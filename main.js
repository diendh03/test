//Kiểm tra cặp kí tự có tạo thành tiếng việt hay không
function isCheked(pair) {
  switch (pair) {
    case "aw":
    case "aa":
    case "dd":
    case "ee":
    case "oo":
    case "ow":
    case "w":
      return true;
    default:
      return false;
  }
}
//Đếm số lượng kí tự tiếng việt
function soLuongKiTuTiengViet(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const nextChar = string[i + 1];

    if (isCheked(currentChar + nextChar)) {
      count++;
      i++;
    } else if (isCheked(currentChar)) {
      count++;
    }
  }

  return count;
}

const inputString = "hfdawhwhcoomdd";
const result = soLuongKiTuTiengViet(inputString);
console.log(`Số lượng chữ cái Tiếng Việt có thể tạo thành: ${result}`);
