import Vue from 'vue'
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io'

const url = process.env.URL.replace(/"/g, '')
export const socketConnection = SocketIO(url);

Vue.use(new VueSocketIO({
    debug: true,
    connection: socketConnection
}));