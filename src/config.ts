import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mysql: {
      database: process.env.MYSQL_DB,
      port: parseInt(process.env.MYSQL_PORT, 10),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
    },
  };
});
