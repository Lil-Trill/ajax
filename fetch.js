const formAuth = document.getElementById('form-fetch');
const output = document.querySelector('.profile');

function auth(event){
    event.preventDefault();//отменяем отправку формы
    let data = new FormData(formAuth);//собираем данные

    fetch("api/auth.php",{
        method: 'POST',
        'Content-Type':'applicatiopn/json', 
        body: data
    }).then(
        (response)=>{
        return response.json();
    }).then(
        (json) => {
            console.log(json);
            if(json.status){
                output.innerHTML = "Вы авторизованы как " + json.name;
                formAuth.style.display = "none";
            } 
            else{
                let p = document.createElement("p");
                p.innerHTML = "Ошибка авторизации";
                output.prepend(p);
            }
        }
    )
}

formAuth.addEventListener("submit", auth);
