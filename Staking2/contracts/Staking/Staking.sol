// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./StakeLimited.sol";
import "./Rewarding.sol";
import "./Slashing.sol";

contract Staking is
    Rewarding,
    Slashing,
    StakeLimited
{

    constructor(address stakeToken_)
        Base(stakeToken_)
    {
    }

    function stake(uint256 amount) public virtual override
        limitedStakeModifier(amount)
        rewardingStakeModifier(amount)
        slashingStakeModifier(amount)
    {
        if (amount == 0) {
            revert WrongAmount();
        }

        super.stake(amount);
    }

    function withdraw() public virtual override
        rewardingWithdrawModifier()
        slashingWithdrawModifier()
    {
        super.withdraw();
    }

}
