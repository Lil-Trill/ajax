const  formInsert = document.getElementById("form-insert-student");
const msg = document.querySelector(".message");
const content = document.querySelector(".content")

//отправка данных через формы
formInsert.addEventListener("submit", (event)=>{
    event.preventDefault();//отменяем стандартную отправку формы
    let formData = new FormData(formInsert);//собираем данные с формы, которые ввел пользователь

    let xhr = new XMLHttpRequest();//создаем объект отправки запроса на сервер
    xhr.open("POST", "insertStudent.php"); //открываем соединение
    xhr.send(formData);//оправка данных на сервер

    xhr.onload = () => {
        if(xhr.response == "ok"){
            msg.innerHTML="студент добавлен!";
            msg.classList.add("success");
            msg.classList.add("show-message");
            let div = document.createElement("div");
            let fname = formData.get("fname");
            let lname = formData.get("lname");
            let gender = formData.get("gender");
            let age = formData.get("age");

            div.innerHTML = `${lname}, ${fname}, ${gender}, ${age}`;
            content.append(div);
        } 
        else {
            msg.innerHTML="Ошибка! что-то пошло не так";
            msg.classList.add("reject");
            msg.classList.add("show-message");
        } 
    };
});

//отправка данных без формы - метод get
//лайкит у студентов
let btnLikes = document.querySelectorAll(".like");

//почитать про ад калбеков можно по ссылке http://callbackhell.ru/
function setLike(str1, str2){
return function(event){
    let idStudent = event.target.closest(".student").dataset.id;
    console.log(idStudent);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "api/setLike.php?id=" + idStudent);
    xhr.onload = function(){
        if(xhr.response == "ok"){
            let num = +event.target.closest(".student").querySelector(".num-like").textContent;
            event.target.closest(".student").querySelector(".num-like").innerHTML = num+1;
            console.log(str1);
        }
        else console.log(str2);
    }
    xhr.send();
}
}

for(btn of btnLikes){
    btn.addEventListener('click', setLike("успешно", "тупа ошибочка"));
}

//пример promise
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}


const myPromice = new Promise((resolve, reject)=>{
    console.log("привет я - зигота");
    let num;
    setTimeout(()=>{
        num = getRandomInt(10);
        console.log(num);
        if(num >= 5) resolve(num);
        else reject("антибархатная тяга");
    }, 500);
});

myPromice.then(
(result)=>{
    console.log(result);
    result++;
    console.log(result);
    return result;
}
).then(
    (result)=>{
        console.log(result*2);
    }
).catch(
    (result)=>{
        console.log(result);
    }
).finally(
    ()=>{
        console.log("конец промиса");
    }
);

