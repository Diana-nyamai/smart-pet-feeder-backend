const { SerialPort } = require('serialport');

// const port = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 9600 });

exports.feedCat = () => {
    try {
        port = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 9600 });
        port.write('FEED\n', (err) => {
            if (err) {
                console.error('Error writing to serial port:', err);
                throw new Error('Failed to send feed command to the cat feeder');
            }
            console.log('Feed command sent to the cat feeder');
        });
    } catch (error) {
        console.error('Error in feedCat service:', error);
        throw error;
    }

    return {
        status: 'success',
        message: 'The cat has been fed successfully!',
        time: new Date().toISOString()
    }
}