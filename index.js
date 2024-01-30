var strSum = prompt("შეიყვანეთ ანაბრის თანხა" , 1000)

var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი" , 10)

var finalAmount = parseInt(strSum)

var finalPercent = parseInt(strPercent)

finalAmount = finalAmount + finalAmount * finalPercent / 100

alert("პროცენტის დარიცხვის შემდეგ თქვენი თანხა იქნება " + finalAmount)


if(finalPercent > 5) {
    alert("პროცენტის დარიცხვის შემდეგ თქვენი თანხა იქნება " + finalAmount, "ცუდი შედეგია")
} else if (finalPercent > 10) {
    alert("პროცენტის დარიცხვის შემდეგ თქვენი თანხა იქნება " + finalAmount ,"ნორმალური შედეგია")
} else {
    alert("პროცენტის დარიცხვის შემდეგ თქვენი თანხა იქნება " + finalAmount ,"კარგი შედეგია")
}