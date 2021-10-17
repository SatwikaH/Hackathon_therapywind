// SPDX-License-Identifier: MIT
// pragma solidity >=0.4.21 <0.7.0 
pragma solidity 0.5.16;

contract SimpleStorage {
  string public text;
  uint public textcount=0;

  struct Share{
    uint id;
    string content;
    address payable author;
   
  }
    mapping(uint => Share) public texts;

    event ShareThoughts(
      uint id,
      string content,
      address payable author  
    );

  constructor() public {
    text="Lets get it.... Fighting";
  }

  function share(string memory x) public {  
  // memory creates new copy
  //Require valid contents check for true or false
    require(bytes(x).length > 0);
    textcount++;
    texts[textcount]=Share(textcount,x,msg.sender);
    //trigger events
    emit ShareThoughts(textcount,x,msg.sender);

  }

}
