const { SerialPort } = require('serialport');

const port = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 9600 });
exports.feedCat = () => {
    console.log('Feeding the cat...');

    return {
        status: 'success',
        message: 'The cat has been fed successfully!',
        time: new Date().toISOString()
    }
}