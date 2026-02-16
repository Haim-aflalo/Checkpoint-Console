import bcrypt from 'bcrypt';
import fs from 'fs';

export async function read(path) {
  return JSON.parse(await fs.promises.readFile(path));
}

export async function write(path, data, f = null) {
  await fs.promises.writeFile(path, JSON.stringify(data, f, 2));
}

async function hashPassword(plainPassword, saltRounds = 10) {
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

async function verifyPassword(plainPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}
