import { LogType, LogWriter } from '../Logger/logger'

export default class ConsoleWriter implements LogWriter {
  public write(message: string | Error, type: LogType) {
    switch (type) {
      case LogType.info:
        console.info(message);
        break;
      case LogType.error:
        console.error(message);
        break;
      case LogType.warn:
        console.warn(message);
        break;
      case LogType.log:
        console.log(message);
        break;
    }

    return Promise.resolve();
  }
}