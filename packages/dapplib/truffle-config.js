require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food edge renew night slow impulse light army genius'; 
let testAccounts = [
"0x77589ba6f83f8631d5e77b19767199337fbc379f7ff4e576a9fc9f516c102a39",
"0x36537bd103a411412da144ecbb4180fe0294a5e02d3b4b9a5b62800262ca4b5b",
"0x2e1364395e44758da98e5fc17010a081c75daaba8ef6f780da17c4b4ef82fd3e",
"0xfd284b72de0310154c8d3641d0e72e76206d8925e9027e3269c25fbb130ed3b7",
"0x2202831ca662f11a00cc5181ea3f753cf8bbd5987bb431c22154be99a05f65a9",
"0xa331612c078e9571163abbc463e298f4709399c6837fa2588660a1e7f46164ce",
"0x95013a8af1692375fbf4f44b9e37d7e30d9930b4ef185021f274d09e47fc48eb",
"0xacbbb630024d87f5241aaec552585d1cc52096fa10e1e4652968b0d873604a4a",
"0xe75517937749fbeeba880778ebcdb9d0393210b7ffead09cf84938e17e4a6d75",
"0x2017a45cea1910888d7f1585892b6f8baf3ea9c1777fccb2a3c90c1821d0f9f3"
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


