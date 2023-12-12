// Статус 
const orderStatusProcessing = "В обработке";
const orderStatusSent = "отправлен";
const orderStatusDelivered ="Доставлен";
const statuss = orderStatusDelivered;



if(statuss == orderStatusDelivered){
    console.log(`${orderStatusDelivered}`);
} else if (statuss == orderStatusProcessing){
    console.log(`${orderStatusSent}`);
} else if (statuss == orderStatusSent){
    console.log(`${orderStatusSent}`);
} else{
    console.log('STOP')
}

///Возраст пользователя и имя пользователя

const ageNeedTo = 21;
const userName = 'John';
const userAge = 25;
const greetings = 'Welcome'
const youCantJoin = 'Sorry You cant join'

if(userAge >= ageNeedTo){
    console.log(`${greetings} ${userName}`)
}else{
    console.log(`${youCantJoin} ${userName}` )
}


// Оценка студента 
const rating = 5;
const answer = 'Ваш ответ';
const ratingGreat = "Отлично";
const ratingGood = "Хорошо";
const ratingSatisfactorily = "Удовлетворительно";
const ratingGoodUnsatisfactory = "Неудовлетворительно";

if(rating === 5){
    console.log(`${answer} ${ratingGreat}`)
} else if (rating === 4){
    console.log(`${answer} ${ratingGood}`)
} else if (rating === 3){
    console.log(`${answer} ${ratingSatisfactorily}`)
} else if (rating === 2){
    console.log(`${answer} ${ratingGoodUnsatisfactory}`)
} else {
    console.log('STOP');
}

console.log('Ваша оценка удовлетворительно');

// Календарь месяца

const toDay =  12;
const december = 12;
const daysInDecember = 31;

if(toDay === december){
    console.log(`${daysInDecember}`)
} else {
    console.log('STOP');
}


// Логин и пароль пользователя 

const user = "Введите имя и пароль:";
const userLogin = 'qwe';
const userPass = '123';

const passCorrect = 'Пароль верный';
const passIncorect = 'Пароль неверный';
const logCorrect = 'Логин верный';
const logIncorect = 'Логин неверный';

console.log(user);

if(userPass == '123' ){
    console.log(`${passCorrect}`)
}else{
    console.log(`${passIncorect}`)
}

if(userLogin == 'qwe'){
    console.log(`${logCorrect}`);
    
} else {
    console.log(`${logIncorect}`)
}   