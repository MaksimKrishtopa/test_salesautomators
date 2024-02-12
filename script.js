// Замени токен и домен на свои значения
const apiToken = "e319b7ac80e2731abedc8d689e9500d233eef8ed";
const domain = "https://salesautomators-sandbox12.pipedrive.com";

// Функция для создания сделки
function createDeal() {
    // Пример данных для новой сделки
    const dealData = {
        title: "Название сделки",
        value: 1000, // Сумма сделки
        org_id: 1, // ID организации (замени на реальный ID)
    };

    // Выполнение POST-запроса к API Pipedrive
    fetch(`${domain}/api/v1/deals?api_token=${apiToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dealData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Сделка успешно создана:', data);
        alert('Сделка успешно создана!');
    })
    .catch(error => {
        console.error('Ошибка при создании сделки:', error);
        alert('Произошла ошибка при создании сделки.');
    });
}

