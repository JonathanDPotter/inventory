const getTimeStamp = () => {
  return new Date().toISOString();
};

const info = (namespace: string, message: string, object: any = null) => {
  object
    ? console.log(`[${getTimeStamp()}][INFO][${namespace}] ${message}`, object)
    : console.log(`[${getTimeStamp()}][INFO][${namespace}] ${message}`);
};

const warn = (namespace: string, message: string, object: any = null) => {
  object
    ? console.warn(`[${getTimeStamp()}][warn][${namespace}] ${message}`, object)
    : console.warn(`[${getTimeStamp()}][warn][${namespace}] ${message}`);
};

const error = (namespace: string, message: string, object: any = null) => {
  object
    ? console.error(
        `[${getTimeStamp()}][error][${namespace}] ${message}`,
        object
      )
    : console.error(`[${getTimeStamp()}][error][${namespace}] ${message}`);
};

const debug = (namespace: string, message: string, object: any = null) => {
  object
    ? console.debug(
        `[${getTimeStamp()}][debug][${namespace}] ${message}`,
        object
      )
    : console.debug(`[${getTimeStamp()}][debug][${namespace}] ${message}`);
};

export default { info, warn, error, debug };
