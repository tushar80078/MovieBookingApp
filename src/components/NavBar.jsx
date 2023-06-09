import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getUserDetails} from "./slices/loginSlicer"
import {signUpPosts,signInPosts} from "./thunk/api_Thunk"
import { Link } from 'react-router-dom';


const NavBar = () => {

  const dispatch=useDispatch();
  const detials = useSelector((state) => state.loginSlicer.userDatails);

  const [signUp,setSignUp]=useState({
    userName:"",emailId:"",mobileNo:"",password:""
  })

  const [signIn,setSignIn]=useState({
    emailId:"",password:""
  })

  const handleChange=(event)=>{
    setSignUp({...signUp,[event.target.name]:event.target.value});
  }

  const handleClick=()=>{
      dispatch(getUserDetails(signUp));

      

      const data=dispatch(signUpPosts(signUp));

      if(data)
      {
        alert("User Created Successfully!!");
        setSignUp({
          userName:"",emailId:"",mobileNo:"",password:""
        });
      }else{
        alert("Server Error!!");
      }
  }

  const handleChange2=(event)=>{
    setSignIn({...signIn,[event.target.name]:event.target.value});
  }

  const handleClick2=()=>{
    
    const data=dispatch(signInPosts(signIn));



    if(data)
    {
      alert("User Created Successfully!!");
      setSignIn({
        emailId:"",password:""
      });
    }else{
      alert("Server Error!!");
    }
}

  return (
    <div>
     
      <nav className='navbar'>
       <Link to={"/"} style={{textDecoration:"none",color:"white"}}> <div className='navbar-title mx-4' >Book <span className='my'>MY</span>  Movie</div></Link>
       
        <div> <button className='navbar-button' data-bs-toggle="modal" data-bs-target="#signi">Sign in</button>
        <button className='navbar-button mx-2' style={{backgroundColor:"orange"}} data-bs-toggle="modal" data-bs-target="#sigu">Register</button>
        <img className='mx-2' style={{height:"39  px",width:"40px",borderRadius:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g" alt="" />
     </div>
     
        </nav>

         { 
            //sign up
         }

         <div className="modal fade" id="sigu" data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style={{backgroundColor:"#C4252A",color:"white"}} >
                <h1 className="modal-title fs-5"  id="staticBackdropLabel">Get Started</h1>
                <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">User Name *</label>
                  <input name='userName' value={signUp.userName} onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile No *</label>
                  <input name='mobileNo' value={signUp.mobileNo}  onChange={handleChange} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address *</label>
                  <input type="email" name='emailId' value={signUp.emailId}  onChange={handleChange} className="form-control"/>
                  <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password *</label>
                  <input type="password" value={signUp.password} onChange={handleChange}  name="password" className="form-control" />
                </div>
                
              </form>
              </div>
              <div className="modal-footer" style={{display:"flex", justifyContent:"space-around"}}>
                <button type="button" onClick={handleClick} style={{backgroundColor:"#F94564",color:"white"}} className="btn btn-info">Register</button>
                </div>
            </div>
          </div>
        </div>
        <div>
        

        {
            //sign in
         }

        <div className="modal fade"  id="signi" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" >
              <div className="modal-content" >
                <div className="modal-header" style={{backgroundColor:"#C4252A",color:"white"}}>
                  <h1 className="modal-title fs-5"  id="staticBackdropLabel">Get Started</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form >
  
                  <div className="mb-3" >
                    <label className="form-label">Email address *</label>
                    <input type="email" onChange={handleChange2} name="emailId" value={signIn.emailId} className="form-control"/>
                    <div className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password *</label>
                    <input type="password" onChange={handleChange2} name="password" value={signIn.password}  className="form-control" />
                  </div>
                  
                </form>
                </div>
                <div className="modal-footer" style={{display:"flex", justifyContent:"space-around"}}>
                <button type="button" onClick={handleClick2}  style={{backgroundColor:"#F94564",color:"white"}} className="btn btn-info">Submit</button>
                </div>
              </div>
            </div>
           

          </div>
         

        </div>
        

    </div>
  );
}

export default NavBar;
