export const debuggingOn = false;

export const debug = message => {
  if(debuggingOn) { console.log(message); }
}

export const verbose = message => debug(message);

export const warn = message => debug(message);