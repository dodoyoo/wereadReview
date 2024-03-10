const { AppDataSource } = require('./data-source');

const createUser = async (nickname, email, password) => {
  await AppDataSource.query(
    `
        INSERT INTO users( 
        nickname,
        email,
        password
    )   VALUE (
        ?,
        ?,
        ?
        )    
        `,
    [nickname, email, password]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
        SELECT 
        id,
        nickname,
        email,
        password
        FROM users
        WHERE email = ?
        `,
    [email]
  );
  return user;
};

const getUserById = async (userId) => {
  await AppDataSource.query(
    `SELECT id
        FROM users
        WHERE id = ?
        `,
    [userId]
  );
};

module.exports = { createUser, getUserByEmail, getUserById };
