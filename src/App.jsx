
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [Year,setYear] = useState(0)
  const[interest,setInterest] = useState(0) 

  /* conditional rendering  for invalidd ip case*/
  const [isPrinciple ,setIsPrinciple] = useState(true)
  const [isRate , setIsRate] = useState(true)
  const [isYear , setIsyear] = useState(true)


  const validate = (e)=>{
   // console.log(e.target.value); //console data of ip box
    //console.log(e.target.name);// console names of the box as prinicple,intrest,year after value of each ip box

    let name = e.target.name
    let value = e.target.value
    console.log(!!value.match(/^[0-9]*$/));
    if(!!value.match(/^[0-9]*$/)){
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsyear(true)
      }
    } else {
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name == 'rate'){
        setRate(value)
        setIsRate(false)

      }
      else{
        setYear(value)
        setIsyear(false)
      }

    }


  }
//reset button
  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsyear(true)
  }
    
  const calculate =()=>{
   setInterest((principle*rate*Year)/100)
  }
  
  
 /*  console.log('principle',principle );
  console.log('rate',rate);
  console.log('year',Year);
 */


  return (
    <div className='d-flex justify-content-center align-items-center ' style={{width:'100%',height:'100vh'}}>
    <div className='bg-light p-5 rounded' style={{width:'500px'}}>
    <h1>Simple Interest App</h1>
    <p>calculate your simple interest easily</p>

    <div className=' mt-5 flex-column rounded shadow bg-warning d-flex justify-content-center align-items-center p-4 '>
      <h2 className='fs-1 fw-bolder'>₹ {interest}</h2>

      <p>Total simple interest</p>

    </div>

    <form className='mt-5'>
      <div className="mb-3">
      <TextField id="outlined-basic" value={principle || ""} label="₹ principle Amount" name='principle' onChange={(e)=>validate(e)}  variant="outlined" className='w-100' /> 
      {!isPrinciple &&
       <p className='text-danger'>Invalid Input</p>
      }
      </div>

      <div className="mb-3">
      <TextField id="outlined-basic" value={rate || ""} label="Rate of interest" name='rate' variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
      {!isRate &&
       <p className='text-danger'>Invalid Input</p>
      }
      </div>

      <div className="mb-3">
      <TextField id="outlined-basic" value={Year || ""}  label="Year (Yr)" name='year' variant="outlined" className='w-100' onChange={(e)=>validate(e)} /> 
      {!isYear &&
       <p className='text-danger'>Invalid Input</p>
      }
      
      </div>
      {/* ||"" 0 not come in the  op box */}
      <div className='d-flex justify-content-between w-100 mt-4'>
      <Button variant="contained" color="success" style={{width:'190px' , height:'60px'}} disabled={isPrinciple && isYear && isRate ? false:true}  onClick={calculate}>Calculate</Button>
      <Button variant="outlined" style={{width:'190px', height:'60px'}} onClick={handleReset}>Reset</Button>
      </div>

    </form>
    </div>
 
  
 
    </div>
  )
}

export default App
