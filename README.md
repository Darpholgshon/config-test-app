# Configuration Test

Sample application to demonstrate how "config" works and how custom configuration can be used to override default configuration. 

## Installation

To install the dependencies, execute the following command:
```bash
$ npm ci
```

## Execution

To run with the default config file, execute the following command:
```bash
$ npm run start
```

To run with an environment override
```bash
$ SERVER_PORT=35001 ts-node app.ts
```
