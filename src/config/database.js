module.exports = {
  dialect: 'postgres',
  host: '192.168.2.20',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber-bona',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
