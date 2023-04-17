const HdWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HdWalletProvider(
  'nest reform equip island inside other elbow absorb mandate select attitude trial',
  'https://sepolia.infura.io/v3/c1a6a709e60046d69f63484e1bf38f79'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attemping to deploy from account ', accounts[1]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[1] });

  console.log('Contract deployed to ', result.options.address);
  provider.engine.stop();
};

deploy();
