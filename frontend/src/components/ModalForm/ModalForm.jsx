import React, { useState } from 'react'
import './ModalForm.css'

function ModalForm() {
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const [isMessageSent, setIsMessageSent] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Здесь используется API телеграма для отправки сообщения с использованием токена бота и идентификатора чата
        const telegramBotToken = '6195445552:AAHNwMyZf92gGUX1K9fY6haGlAQaKNfp85s';
        const chatId = '-870600326';
        const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        // Формируем тело запроса с данными для отправки
        const requestBody = {
            chat_id: chatId,
            text: `Username: ${username}\nText: ${text}`,
        };

        // Отправляем запрос на API телеграма
        fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Message sent:', data);
                // Очищаем поля после отправки
                setUsername('');
                setText('');
                setIsMessageSent(true); // Устанавливаем значение isMessageSent в true после успешной отправки
            })
            .catch((error) => {
                console.error('Error sending message:', error);
            });
    };

    return (
        <div className="modal-form">
            <div className="form-container">
                {/* {isMessageSent && <h1>Сообщение отправлено!</h1>} Отображаем <h1>, если сообщение отправлено */}
                <p className="title">Feedback</p>
                <form className="form" onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Email</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder=""
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Message</label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder=""
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <button className="sign" type="submit">
                        Отправить
                    </button>
                </form>
                <div className="social-message">
                    <div className="line"></div>
                    <p className="message">Хотите с нами связаться?</p>
                    <div className="line"></div>
                </div>

                <p className="answer-text">Мы ответим вам!</p>
                {isMessageSent && <div className="success-animation">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                    <p className='title-succesfull'>Ваше сообщение успешно отправлено!</p>
                </div>}
            </div>
        </div>
    )
}

export default ModalForm;
