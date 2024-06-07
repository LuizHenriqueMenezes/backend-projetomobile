
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Tasks } from './entity/Tasks';


const PostgresAppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cpg7nc6ct0pc73d8vbmg-a.oregon-postgres.render.com',
  port: 5432,
  username: 'tarefadb_unwm_user',
  password: 'uUYrTsKiR1FSqg4c0GH77gxDFKyLq46h',
  database: 'tarefadb_unwm',
  synchronize: true,
  logging: true,
  entities: [User, Tasks],
  migrations: [],
  subscribers: [],
  ssl: true,
});


const SqliteAppDataSource = new DataSource({
  type: 'sqlite',
  database: 'tarefadb.sql',
  synchronize: true,
  logging: true,
  entities: [User, Tasks],
  migrations: [],
  subscribers: [],
});


export const AppDataSource =
  process.env.ENV === 'PROD' ? PostgresAppDataSource : SqliteAppDataSource;
