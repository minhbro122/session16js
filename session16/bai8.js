let number1 = prompt("Mời bạn nhập số thứ 1");
let number2 = prompt("Mời bạn nhập số thứ 2");
let number3 = prompt("Mời bạn nhập số thứ 3");
if (number1=number2 && number2 ==number3 && number1==number3) {
    document.write("Số không hợp lệ");
} else {
    let maxNum = Math.max(number1, number2, number3);
    document.write("số lớn nhất là ", maxNum);
}