const formAuth = document.getElementById('form-fetch');
const output = document.querySelector('.profile');

async function auth(event){
    event.preventDefault();//отменяем отправку формы
    let data = new FormData(formAuth);//собираем данные
    const response = await fetch("api/auth.php",{
        method: 'POST',
        'Content-Type':'applicatiopn/json', 
        body: data
    });

    json = await response.json();
   
     console.log(json);
    if(json.status){
        output.innerHTML = "Вы авторизованы как " + json.name + " " + "<a href='profile.php'>Ваш профиль</a>";
        formAuth.style.display = "none";
    } 
    else{
        let p = document.createElement("p");
         p.innerHTML = "Ошибка авторизации";
        output.prepend(p);
    }
}
formAuth.addEventListener("submit", auth);
