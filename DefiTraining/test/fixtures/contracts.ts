import { smock } from '@defi-wonderland/smock';
import { BaseContract } from 'ethers';
import { ethers } from 'hardhat';


export const Factory : { [contractName : string] : (...args : any[]) => Promise<BaseContract> } = {
    Coin: async(name : string, symbol : string, initalSupply : number, decimals : number) => {
        const [ owner ] = await ethers.getSigners();
        
        const contractFactory = await ethers.getContractFactory('Coin', owner);
        const contract : BaseContract = <any>await contractFactory.deploy(name, symbol, initalSupply, decimals);
        await contract.deployed();
        
        return contract;
    },
    Staking: async(...args : any[]) => {
        const [ owner ] = await ethers.getSigners();
        
        const contractFactory = await smock.mock('Staking', owner);
        const contract : BaseContract = <any>await contractFactory.deploy(...args);
        await contract.deployed();
        
        return contract;
    }
};
