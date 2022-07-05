import winston from 'winston'

const dateFormat = () => {
  return new Date(Date.now()).toUTCString()
}

class Logger {
  private logger: winston.Logger

  constructor(route: string) {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `./logs/${route}.log`
        })
      ],
      format: winston.format.printf((info) => {
        let msg = `${dateFormat()} | ${info.level.toUpperCase()} | ${route}.log | ${info.message} | `
        if (info.obj) msg += `data:${JSON.stringify(info.obj)} | `
        return msg
      })
    })
  }

  public async info(msg: string, obj?: any) {
    obj 
      ? this.logger.log('info', msg, { obj })
      : this.logger.log('info', msg)
  }

  public async debug(msg: string, obj?: any) {
    obj
      ? this.logger.debug('debug', msg, { obj })
      : this.logger.debug('debug', msg)
  }

  public async error(msg: string, obj?: any) {
    obj
      ? this.logger.error('error', msg, { obj })
      : this.logger.error('error', msg)
  }
}

export const logger = new Logger('app')
