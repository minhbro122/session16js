let number1 = prompt("Nhập số thứ 1:");
let number2 = prompt("Nhập số thứ 2:");
let randomNumber = Math.floor(Math.random() * (Math.max(number1, number2) - Math.min(number1, number2) + 1)) + Math.min(number1, number2);
alert(`Số ngẫu nhiên: ${randomNumber}`);