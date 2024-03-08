import React, { useState } from 'react'
import { validators } from './input_custome_validation'
export const FormHandling = () => {

const[formdata_,setFormData]=useState({name:'',password:''})
const[validity,setValidity]=useState('')

const hadleSubmit=(e)=>{
e.preventDefault();

let x=validators(formdata_)
console.log(x)
if(x==101){
setValidity('Invalid Input')

}
else{
  setValidity('')

}
}


  return (
<>

<form action="" id="form-signup" onSubmit={hadleSubmit}>

<input type="text"  onChange={(e)=>{setFormData({...formdata_,name:e.target.value})}} /> <br />

<input type="password" onChange={(e)=>{setFormData({...formdata_,password:e.target.value})}} /> <br />
<span>{validity}</span>
<button  type='submit'>signup</button>
</form>









</>
  )
}
