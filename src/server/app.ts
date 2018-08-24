import * as express from 'express';
import * as ws from 'ws';

class App {
    Start() {
        /**
         * Express Server
         */
        const app = express();
        app.set('view engine', 'pug');
        app.use(express.static('dist'));
        app.get('/', (req, res) => res.render('index'));
        app.listen(3000);
        console.log('Express server is started on port %s', 3000);

        /**
         * WebSocket Server
         */
        const wss = new ws.Server({ port: 8680 });
        wss.on('connection', (socket) => socket.on('message', (message) => wss.clients.forEach((client) => {
            if (client.readyState === ws.OPEN) {
                client.send(message);
            }
        })));
        console.log('WebSocket server is started on port %s', 8680);
    }
}

const app = new App();
app.Start();
