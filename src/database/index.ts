import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'irental-cars-database',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'irental-cars',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});

export default AppDataSource.initialize();
