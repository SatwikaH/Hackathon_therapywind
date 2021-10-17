 import React, { Component } from "react";

import "./login_student.css";

class Main extends Component {


 
render() {
    return (
 
      <div className="centerr">
      <div class="box">

      

             
<div class="cd">
                <p>&nbsp;</p>
                
                  <form onSubmit={(event)=>{
        	           event.preventDefault()
        	           const x = this.postcontent.value
        	           this.props.share(x)
                      }}>

                      
                    <div className="form-group mr-sm-2">
                      <input
                        id="postcontent"
                        type="text"
                        ref={(input) =>{
                    	  this.postcontent = input
                        }}
                        className="form-control"
                        placeholder="What's on your mind?"
                        required />
                    </div>
                    <br/>
                    <button className="button2">Share</button>
                     <br/>
                 
                  </form>
</div>
                  <p>&nbsp;</p>
                  {this.props.posts.map((post,key) =>{
                      return(
                        
                          <div className="job">

                          <div className="content">
                          <div className="card mb-4" key={key} >
                            <p>
                               {post.author}  
                            </p>
                              
                              
                                <h3>{post.content}  </h3>
                                </div>
                                </div>
                                </div>


                          
                        )
                  })}




             
        </div>

        </div>


    );
  }
}

export default Main;

