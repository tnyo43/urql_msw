export const setServer = () => {
  if (typeof window === 'undefined') {
    // サーバー側
    const { server } = require('./server');
    server.listen();
  } else {
    // ブラウザ側
    const { worker } = require('./browser');
    worker.start();
  }
};
