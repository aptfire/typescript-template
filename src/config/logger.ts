import winston from 'winston'

// TODO: Uncomment the following line to initialize file-based logging.
// const files = new winston.transports.File({ filename: `./logs/${new Date().toJSON().replace(/T.*$/g, '')}.log` })
const console = new winston.transports.Console({ format: winston.format.simple() })

const level = process.env['LOG_LEVEL'] || 'info'

const logger = winston.createLogger({
  level,
  transports: [console]
  // TODO: Uncomment the following line to initialize file-based logging.
  // transports: [files, console]
})

logger.info(`LOGGING SYSTEM INITIALIZED: ${new Date().toISOString()}`)

export default logger
