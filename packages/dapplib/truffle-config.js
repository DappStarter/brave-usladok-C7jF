require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski struggle rifle ranch clutch hunt flower army general'; 
let testAccounts = [
"0xf9c4b6f1c1b81459e57464d3c59b9f74329eb7084733a2c12a50bcc01e84ef0f",
"0x0e4a445609e66d80ec7c8bce2c15c82a6a77b4091382def803fbf3958f1dcfcc",
"0x9e38571274cca1b51270ea5dccb9102d7faa9344a58c9cef63576bff383c246c",
"0xfc0b43c320fed3ee35a35bb925b4f767fcacd226873e7aef50b71902c58a722b",
"0x4c9e0ca4c8e762affd052005cebf1efdcc8658cb861eda809b8822256de73566",
"0xe77fbb9332af8b7636d39e891062d1c46eb27b242c45672c1351023f844b13ed",
"0x8ee51b54685feaeccbd2d574dfe575e93fd0e05558a5e1e8c471dff98207adff",
"0x0fea6161f2f770126490e51b595df9b52db07e79d74a9987279d4dbc2012efe1",
"0x56609a9cf27ca9ff3a7e7d3f69f17db309a06b71b1b036ec6bdb3f4908292dc0",
"0xc910a7d2d3247c8037379b04867706eb5931d914eaca6782b527c3b5c5f62292"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


