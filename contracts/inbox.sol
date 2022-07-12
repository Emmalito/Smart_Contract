pragma solidity ^0.4.17;

contract Inbox{
    string public message;

    //Constructor
    function Inbox(string initialMsg) { 
        message = initialMsg;
    }

    function setMsg(string newMsg) public{
        message = newMsg;
    }
}