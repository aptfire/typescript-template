import logger from './config/logger'
import { sayHello } from './helloWorld'

logger.info('Getting ready to say hello.')

setInterval(sayHello, 2000)
