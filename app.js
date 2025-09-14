// Инициализация приложения
let TgApp = window.Telegram.WebApp;

// Расширяем приложение на весь экран (опционально)
TgApp.expand();

// Получаем данные пользователя от Telegram
let user = TgApp.initDataUnsafe.user;

// Выводим имя пользователя на страницу
if (user) {
    document.getElementById('user-name').innerText = `${user.first_name}`;
}

// Функция для отправки данных обратно боту
function sendData() {
    let data = "Данные, которые я хочу отправить!";
    // Метод sendData закрывает приложение и отправляет данные в бот
    TgApp.sendData(data);
    
    // Альтернатива: можно отправить данные без закрытия приложения через Events
    // TgApp.triggerEvent('web_app_data_send', { data: data });
}

// Вешаем обработчик на событие получения данных от бота (если нужно)
TgApp.onEvent('web_app_data_send', (event) => {
    console.log('Данные отправлены:', event);
});