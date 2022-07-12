/* The test is on a LOCAL NETWORK  thanks
to a libraries GANACHE (= TestRPC) and Web3 */

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');  // Web3 is Asynchronise
const web3 = new Web3(ganache.provider());  //Connection to the local network
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;


beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();  //Web3 can have acces to several cryptocurrencies

    // Use one of those accounts to deploy
    // the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode, arguments: ['1st contract deployment!']})
        .send({from:accounts[0], gas: '1000000'});
});


describe("Inbox", () => {
    it('Deploys a contract', () => {
        assert.ok(inbox.options.address);  // assert.ok ==> The value exist
    });

    it('has a default message', async () =>{
        const message = await inbox.methods.message().call();  // We call a function
        assert.equal(message, "1st contract deployment!");
    });

    it('Can modify the message', async() =>{
        await inbox.methods.setMsg('New msg').send({from: accounts[0]});    // We sent a transaction
        // If the transaction fail, the code will raise an error

        const message = await inbox.methods.message().call();
        assert.equal(message, 'New msg');
    });
});
