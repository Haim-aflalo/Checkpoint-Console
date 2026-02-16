import express from 'express';
import { read, write } from '../utils/functions.js';
export const msgRouter = express.Router();

msgRouter.post('/messages', async (req, res) => {
  try {
    const id = req.headers.id;
    console.log(id);

    const data = await read('./data/data.json');
    const index = data.findIndex((user) => {
      return user.id == id;
    });
    console.log(index);
    if (index !== -1) {
      data[index].messages.push(req.body.message);
      await write('./data/data.json', data);
      return res.status(200).json({ msg: 'Messages updated successfully' });
    } else {
      return res.status(404).json({ msg: 'User Not Found' });
    }
  } catch (error) {
    console.error('An error occurred: ' + error.message);
  }
});

msgRouter.get('/messages', async (req, res) => {
  try {
    const id = req.headers.id;
    const data = await read('./data/data.json');
    const index = data.findIndex((user) => {
      return user.id == id;
    });
    if (index !== -1) {
      return res.status(200).json({ messages: data[index].messages });
    } else {
      return res.status(404).json({ error: 'User Not Found' });
    }
  } catch (error) {
    console.error('An error occurred: ' + error.message);
  }
});
