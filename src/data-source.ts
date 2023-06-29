import "reflect-metadata";
import 'dotenv/config'
import { DataSource } from "typeorm";

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "postgres",
//   database: "postgres",
//   synchronize: true,
//   logging: false,
//   entities: [`${__dirname}/**/entities/*.{ts,js}`],
//   migrations: [`${__dirname}/**/migration/*.{ts,js}`],
//   migrationsRun: true,
// });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migration/*.{ts,js}`],
  migrationsRun: true,
});
