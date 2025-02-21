export interface ApplicationConfiguration {
  server: {
    port: number;
  },
  log: {
    level: 'debug' | 'info' | 'warn' | 'error';
  },
  microservice: {
    basePath: string;
    server: {
      name: string;
    },
  },
}
