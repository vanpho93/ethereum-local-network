const { web3 } = require('./ethereum-instance');

async function start() {
    const { ROOT_PUBLIC_KEY } = process.env;
    const rootAccountBalance = await web3.eth.getBalance(ROOT_PUBLIC_KEY);
    console.log({ rootAccountBalance });
    process.exit(0);
}

start();
