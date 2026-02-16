import express from 'express';
import { read } from '../utils/functions.js';
export const logRouter = express.Router();

logRouter.post('/login', async (req, res) => {
  try {
    const name = req.body.name;
    const password = req.body.password;
    const data = await read('./data/data.json');
    const response = data.findIndex((user) => {
      return user.name === name && user.password === password;
    });
    if (response === -1) {
      throw new Error('User Not Found');
    } else {
      res.status(200).json({
        id: data[response].id,
        name: data[response].name,
        role: data[response].role,
      });
    }
  } catch (error) {
    console.error('An error occurred: ' + error.message);
  }
});
