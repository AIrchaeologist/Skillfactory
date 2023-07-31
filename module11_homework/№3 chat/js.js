const inputMessage = document.querySelector('.div__input-text');
const divOutput = document.querySelector('.div__output');
const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com/');

// текущая дата и время
function showDate() {
    let date = new Date();
    let showNow = date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear()+' ('+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+')';
    return showNow;
}

// соединение открыто
websocket.addEventListener('open', function (event) {});

// отображает ответы сервера
websocket.addEventListener('message', function (event) { 
    if (event.data != "[object GeolocationCoordinates]") {
        let serverAnswer = `<div class="div__output_answer"><p class="div__output_p"><b>${showDate()}<br>SERVER:</b></p><p>${event.data}</p></div>`;
        divOutput.innerHTML += serverAnswer;
        document.body.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }, false);
    }
});

// отображает сообщения пользователя
function showOutputMessage(message) {
    let outputMessage = `<div class="div__output_message"><p class="div__output_p"><b>${showDate()}<br>YOU:</b></p><p>${message}</p></div>`;
    divOutput.innerHTML += outputMessage;
};

// отправка сообщения
document.querySelector('.div__input_button').onclick = function(){
    let message = inputMessage.value;
    websocket.send(message);
    showOutputMessage(message);
    inputMessage.value = '';
};

// гео-локация
document.querySelector('.div__input_geo-button').onclick = function(){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            websocket.send(coords);
            let geoLink = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`;
            let serverAnswer = `<div class="div__output_message"><p class="div__output_p"><b>${showDate()}</b></p><p><a href="${geoLink}" target="_blank">ГЕО-ЛОКАЦИЯ</a></p></div>`;
            divOutput.innerHTML += serverAnswer;
            document.body.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }, false);
        });
    } else {
        let serverAnswer = `<div class="div__output_message"><p class="div__output_p"><b>${showDate()}</b></p><p>ДАННЫЕ ГЕО-ЛОКАЦИИ НЕДОСТУПНЫ</p></div>`;
        divOutput.innerHTML += serverAnswer;
        document.body.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }, false);
    }
};