import config from 'config';

import { ApplicationConfiguration } from './lib/model/app.config';

const applicationConfig: ApplicationConfiguration = config.get('app');
console.log(JSON.stringify(applicationConfig, null, 2));
