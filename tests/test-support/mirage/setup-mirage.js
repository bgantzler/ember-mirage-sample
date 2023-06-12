import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    models: {
      movie: Model,
    },

    routes() {
      this.namespace = 'api';

      this.resource('movie');
    },
  });
}
