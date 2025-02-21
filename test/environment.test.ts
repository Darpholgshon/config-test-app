describe('Environment', () => {
  let config = null;

  beforeAll(() => {
    // Set a couple of environment variables for environment overrides.
    process.env.SERVER_PORT = '3000';
    process.env.MICROSERVICE_NAME = 'config/test/app/v1';

    /*
     * Load the config which should be represented by the defaults,
     * overlaid with test overrides and finally environment overrides.
     */
    config = require('config');

    // This has no effect as the environment overrides are already loaded.
    process.env.LOG_LEVEL = 'warn';
  });

  it('should have a correct test config', () => {
    expect(config.get('app')).toEqual({
      server: {
        port: 3000, // <-- This value is a numeric from the environment variables!
      },
      log: {
        level: 'debug', // <-- This value is from the test overrides.
      },
      microservice: {
        basePath: 'services', // <-- This value is from the defaults.
        server: {
          name: 'config/test/app/v1', // <-- This value is (a string) from the environment variables!
        },
      },
    });
  });
});
