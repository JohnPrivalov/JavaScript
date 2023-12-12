
const dayOfWeek = 6;
const logIncorect = 'Не правильно набран номер'
switch(dayOfWeek){
    case 1: whichDay = 'monday' 
    break;
    case 2: whichDay = 'tuesday' 
    break;
    case 3: whichDay = 'wedensday' 
    break;
    case 4: whichDay =  'thursday'
    break;
    case 5: whichDay =  'friday'
    break;
    case 6: whichDay =  'saturday'
    break;
    case 7: whichDay =  'sunday'
    break; 
    
    default: whichDay = logIncorect;
} console.log(whichDay)

const month = 111 ;
switch(month){
    case 1: wichMonth = 'January'
    break;
    case 2: wichMonth = 'February'
    break;
    case 3: wichMonth = 'March'
    break;
    case 4: wichMonth = 'April'
    break;
    case 5: wichMonth = 'May'
    break;
    case 6: wichMonth = 'June'
    break;
    case 7: wichMonth = 'July'
    break;
    case 8: wichMonth = 'August'
    break;
    case 9: wichMonth = 'September'
    break;
    case 10: wichMonth = 'October'
    break;
    case 11: wichMonth = 'November'
    break;
    case 12: wichMonth = 'December'
    break;
    default: wichMonth = 'Incorrect number of month';
} console.log(wichMonth)



const isRaining = 1
const niceWeather = 0 //, null ,undefined -1
const ternarAnswer = isRaining <= 1 ? "Дождливо" : "Сухо";
console.log(`Погода хорошая ?  ${isRaining <= -1 ? 'Да' : "Нет"}`  )
console.log(ternarAnswer);


const score = 90; // баллы  
const rate =  (score >= 90) ? "A" : (score >= 80) ?  "B" :(score >= 70) ?  "C" : (score >= 60) ? 'D' : 'F';
console.log(rate);

//Пойдет ли в ресторан 
const hasMoney = true;
const isHungry = 1;

// if(hasMoney && isHungry){
//     console.log('Иду кушать в ресторан');
// } else{
//     console.log('Не иду в ресторан')
// }

// Идет ли на вечеринку 
const isWeekendd = true; 
const partyInvated = true;
console.log(isWeekendd || partyInvated ? "Иду на вечеринку " : "Не иду на вечеринку")

// Оператор нулевого слияния 

const userName = 'User' //null , 0 ;
console.log(userName ?? "Guest") // Если первое выражение false оператор нулевого слияния выводит значение справ

const isUserAge = 22
console.log(isUserAge ?? 18)

// Смешанные задачи

const grade = "D";

switch(grade){
    case "A": whicGrade = 1
    break;
    case "B": whicGrade = 2
    break;
    case "C": whicGrade = 3
    break;
    case "D": whicGrade = 4
    break;
    case "F": whicGrade = 5
    break;
    default : whicGrade = "Grade is not found"
} console.log(whicGrade);

// 2.

const num1 = 12222
const num2 = 3322


console.log(decision = num1 >= num2 ? "num1 is more" : "num2 is more");

// 3.

const isMorning = true; // false . null , 0
console.log(answerTime = isMorning === true ? "Yes now is morning" : "Now is day");

// 4 

const isAdult = true && 18;
console.log(acceptAdult = isAdult === true || isAdult <= 12 ? "Вам разрешено" : "Вам запрещено")

// 5. 

const temperature = 25.5;

switch(true){
    case temperature <=0 : console.log('Winter')
    break;
    case temperature <=10 : console.log('Spring')
    break;
    case temperature >= 25 : console.log("Summer")
    break;
        default : console.log('Autumn')
}

// 6.
const isLoggedIn = true;// 1 0
const logStatus = isLoggedIn ? "Пользователь вошел " : "Guest";
console.log(logStatus);

//7.

const isEvning = true
const hasGuest = true

const answerAboutStay = isEvning && hasGuest ? "Да остаюсь с гостями" : "Нет иду гулять";
console.log(answerAboutStay);

// 8.

const hasPermission = true
const isPaid = true
 
console.log(canI = hasPermission && isPaid)

// 9

const userRole = 'user' // какое либо значение
const isAdmin = true // Тумблер является ли админом (может ли быть)


switch(userRole){
    case "user": statuss = "Пользователь"
    break;
    case "moder": statuss = "Модератор"
    break
    case "admin" : statuss = isAdmin ? "Admin" : "Error" // Проверка через кейс на админа, вывод с помощью ? : "" тернарного оператора 
    break
    default : statuss = "Nohave"
}console.log(statuss);

// 10

const isMorningg = true
const isWeekend = false

const taskAnswer = isMorningg && !isWeekend;

console.log("Нужно вставать:" , taskAnswer)

// 11 

const isAllowed = true //  Разрешен 
const isExpired = false // Уже использован

console.log(isAllowed && !isExpired ? "Да можно":"Нет нельзя ")


