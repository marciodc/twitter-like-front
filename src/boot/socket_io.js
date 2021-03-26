import Vue from 'vue'
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io'

export const socketConnection = SocketIO('http://localhost:4040');

Vue.use(new VueSocketIO({
    debug: true,
    connection: socketConnection
}));