import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import Header from '../../components/Header';

function FormDataAdd() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');

  // Отправить данные на сервер
  const handleSubmit = () => {
    const newPost = {
      title,
      description,
      text,
    };

    fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Успешно добавлен новый пост:', data);
        // Обновить состояние или выполнить другие действия
      })
      .catch((error) => {
        console.error('Ошибка при добавлении нового поста:', error);
      });
  };

  return (
    <Box m="20px">
      <Header title="ДОБАВИТЬ НОВЫЙ ПОСТ" subtitle="Добавление нового поста на клиентскую часть" />

      <Box mt={2}>
        <TextField
          label="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
        />
      </Box>

      <Box mt={2}>
        <TextField
          label="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          multiline
          rows={4}
        />
      </Box>

      <Box mt={2}>
        <TextField
          label="Текст"
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          multiline
          rows={8}
        />
      </Box>

      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Добавить пост
        </Button>
      </Box>
    </Box>
  );
}

export default FormDataAdd;