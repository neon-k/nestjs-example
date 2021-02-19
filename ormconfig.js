module.exports = {
  type: "mysql",
  host: "db-server",
  port: 3306,
  username: "root",
  password: "password",
  database: "develop",
  synchronize: false,
  entities: [__dirname + '/dist/**/*.entitie.js'],
  migrations: [__dirname + '/dist/migration/**/*.js'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'db/migration'
  }
}