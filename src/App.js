import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Nav from "./Nav";
import Main from "./Main";

import "./App.css";

class App extends Component {

  async componentWillMount(){
    await this.loadBlockchaindata()
  }

  async loadBlockchaindata(){
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})

    const abi = SimpleStorageContract.abi;
    
    const networkId = await web3.eth.net.getId()  

    const contract = SimpleStorageContract.networks[networkId]
    if(contract)
    {
       const token = new web3.eth.Contract(abi,contract.address)
       this.setState({token})
       console.log(contract.address)

       const textcount = await token.methods.textcount().call()
       this.setState({textcount})

       for(var i=1;i<=textcount;i++)
       {
        const post = await token.methods.texts(i).call()
        this.setState({
          posts : [...this.state.posts,post]
        })
       }
       this.setState({loading:false})     
    }
    else
    {
      window.alert('You are not connected to the network')
    }
  }

  share(x){
    this.setState({loading:true})
    this.state.token.methods.share(x).send({from:this.state.account})
    .once('receipt',(receipt)=>{
      this.setState({loading:false}) //now call the function inside the form 
    })
  }

  //this function is run when component is created
  constructor(props) {
    //what super does is
    super(props)
    this.state = {
        account:'',
        token:null,
        textcount:0,
        posts:[],
        loading: true,
     }
    this.share =  this.share.bind(this)
  }
  

      

render() {
    return (
      <div>
      <Nav account = {this.state.account}/>
    {
      this.state.loading?<div>Loading....</div>
       :<Main 
        share={this.share}
        posts = {this.state.posts}/>
      }
      </div>
    );
  }

}

export default App;



