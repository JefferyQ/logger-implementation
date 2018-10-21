
enum LogType {
  info,
  error,
  warn,
  log
}

interface LogWriter {
  readonly write: (message: string | Error, type?: LogType, params?: Obje) => Promise<void>;
}

function error(error: Error, writers: ReadonlyArray<LogWriter>) {
  for (const writer of writers) {
    writer.write(error, LogType.error);
  }
}

function fatal(error: Error, writers: ReadonlyArray<LogWriter>) {
  for (const writer of writers) {
    writer.write(error, LogType.error);
  }
}

function warning(message: string, writers: ReadonlyArray<LogWriter>) {
  for (const writer of writers) {
    writer.write(message, LogType.warn);
  }
}

function info(message: string, writers: ReadonlyArray<LogWriter>) {
  for (const writer of writers) {
    writer.write(message, LogType.info);
  }
}

function log(message: string, writers: ReadonlyArray<LogWriter>) {
  for (const writer of writers) {
    writer.write(message, LogType.log);
  }
}

export { error, log, warning, info, fatal, LogType, LogWriter };
