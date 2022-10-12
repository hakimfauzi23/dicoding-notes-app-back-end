const Hapi = require('@hapi/hapi');
const routesHandler = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 8001,
    host: 'localhost',
    routes: {
      cors: {
        origin: 'ignore',
      },
    },
  });

  server.route(routesHandler);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
