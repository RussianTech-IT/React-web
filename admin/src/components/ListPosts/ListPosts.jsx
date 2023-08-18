import { useState } from 'react';
import { Card, CardContent, Typography, IconButton, TextField, } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Delete as DeleteIcon, Edit as EditIcon, Save as SaveIcon, } from '@mui/icons-material';

function ListPosts({ id, title, description, text }) {
  const [expanded, setExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeleteClick = () => {
    // Обработка логики удаления
    console.log('delete');
    fetch(`http://localhost:5000/api/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);

    const updatedPost = {
      id,
      title,
      description,
      text: editedText,
    };

    fetch(`http://localhost:5000/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Card className='list-posts-card'>
      <CardContent>
        <Typography variant='h6' color='textSecondary'>
          ID: {id}
        </Typography>
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
        {editMode ? (
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            fullWidth
            multiline
            variant='outlined'
          />
        ) : (
          <Typography variant='body2' color='textSecondary'>
            {description}
          </Typography>
        )}
        {expanded && (
          <Typography variant='body2' color='textSecondary'>
            {text}
          </Typography>
        )}
      </CardContent>
      <IconButton
        className={expanded ? 'expand-button expanded' : 'expand-button'}
        onClick={handleExpandClick}
      >
        <ExpandMoreIcon />
      </IconButton>
      <IconButton className='delete-button' onClick={handleDeleteClick}>
        <DeleteIcon />
      </IconButton>
      {editMode ? (
        <IconButton className='edit-button' onClick={handleSaveClick}>
          <SaveIcon />
        </IconButton>
      ) : (
        <IconButton className='edit-button' onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
      )}
    </Card>
  );
}

export default ListPosts;
