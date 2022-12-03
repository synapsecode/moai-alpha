pragma solidity ^0.4.17;

contract SecurityDepositContract {

    address[] addressTracker;
    uint256 amountTracker;
    uint trackerSize = 0;

    function returnFunds() public {
        for(int i=0; i<trackerSize; i++){
            addressTracker.transfer(amountTracker[i]);
        }
    }

    function deposit(uint256 amount) payable public {
        require(msg.value == amount);
        addressTracker[msg.sender] = msg.sender;
        amountTracker[msg.sender] = amountTracker[msg.sender] + msg.value;
        trackerSize++;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}