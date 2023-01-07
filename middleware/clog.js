// middleware that logs out the type
const clog = (req, res, next) => {
  const fgMagenta = '\x1b[35m';
  switch (req.method) {
    case 'GET': {
      console.info(`${fgMagenta}${req.method} request to ${req.path}`);
      break;
    }
    case 'POST': {
      console.info(`${fgMagenta}${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`${fgMagenta}${req.method} request to ${req.path}`);
  }

  next();
};

exports.clog = clog;
