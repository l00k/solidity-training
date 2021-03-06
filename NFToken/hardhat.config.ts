import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-truffle5';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-web3';
import '@typechain/hardhat';
import dotenv from 'dotenv';
import 'hardhat-gas-reporter';
import 'hardhat-watcher';
import { HardhatUserConfig } from 'hardhat/config';
import 'solidity-coverage';

dotenv.config();
const alchemyApiKey = process.env.ALCHEMY_API_KEY;

const config : HardhatUserConfig = {
    solidity: {
        version: '0.8.4',
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000,
            },
            outputSelection: {
                '*': {
                    '*': [ 'storageLayout' ]
                }
            }
        },
    },
    networks: {
        hardhat: {
            // forking: {
            //     url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`,
            //     blockNumber: 14314740,
            // }
        }
    },
    watcher: {
        test: {
            tasks: [
                'test'
            ],
            files: [
                './contracts/**/*',
                './test/**/*',
            ],
        }
    }
};

export default config;
