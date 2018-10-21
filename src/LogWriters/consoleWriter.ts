import { LogType, LogWriter } from "../Logger/logger";
import * as Rollbar from "rollbar";

export default class RollbarWriter implements LogWriter {
  private readonly _rollbar: Rollbar;

  public constructor(config: Rollbar.Configuration) {
    this._rollbar = new Rollbar(config);
  }

  public write(message: string | Error, type: LogType) {
    switch (type) {
      case LogType.info:
        this._rollbar.info(message);
        break;
      case LogType.error:
        this._rollbar.error(message);
        break;
      case LogType.warn:
        this._rollbar.warn(message);
        break;
      case LogType.log:
        this._rollbar.log(message);
        break;
    }

    return Promise.resolve();
  }
}
