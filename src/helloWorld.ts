import logger from './config/logger'

export const sayHello = (): string => {
  logger.info('Saying hi!')
  return 'Hi!'
}

export const sayHelloAsync = async (): Promise<string> => 'Hi!'
