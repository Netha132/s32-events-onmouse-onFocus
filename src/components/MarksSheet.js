import React, { useRef } from 'react'

function MarksSheet() {

    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let telMarksInputRef=useRef();
    let hinMarksInputRef=useRef();
    let engMarksInputRef=useRef();
    let mathsMarksInputRef=useRef();
    let sciMarksInputRef=useRef();
    let socMarksInputRef=useRef();
    let telSpanRef=useRef();
    let hinSpanRef=useRef();
    let engSpanRef=useRef();
    let matSpanRef=useRef();
    let sciSpanRef=useRef();
    let socSpanRef=useRef();

    let resultSpanRef=useRef();

  return (
    <div className='formDiv'>
        
        
        <div>
      <form>
    <h2>Students Marks List</h2>

        <fieldset className='fieldBorder'>
            <legend>Details</legend>
        <div>
            <label>FirstName</label>
            <input ref={firstNameInputRef} placeholder='Enter First Name'></input>
            <span></span>
        </div>
        <div>
            <label>LastName</label>
            <input ref={lastNameInputRef} placeholder='Enter Last Name'></input>
            <span></span>
        </div>
        </fieldset>

        <fieldset className='fieldBorder'>
            <legend>Subjects</legend>
        <div>
            <label>Telugu</label>
            <input  ref={telMarksInputRef} type='number' 
            onFocus={()=>{
                console.log(`tel on focus`);
                telMarksInputRef.current.style.backgroundColor="#a80c0c";
            }}
            onChange={()=>{
                console.log(`tel on change`);
                let marks=Number(telMarksInputRef.current.value);
                console.log(marks>=35?"pass":'fail');

                telSpanRef.current.innerHTML=marks>=35?"😃Pass":"😥Fail";
                telSpanRef.current.style.color=marks>=35?"#0ce705":"red";

                
            }}
            onBlur={()=>{
                console.log(`tel on blur`);
                telMarksInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={telSpanRef}></span>
        </div>


        <div>
            <label>Hindi</label>
            <input ref={hinMarksInputRef} type='number'
             onFocus={()=>{
                console.log("hindi on Focus");
                hinMarksInputRef.current.style.backgroundColor="#a80c0c";
             }}

             onChange={()=>{
                console.log("hindi is change");
                let hinmarks=Number(hinMarksInputRef.current.value);
                console.log(hinmarks>=35?"Pass":"Fail");
                hinSpanRef.current.innerHTML=hinmarks>=35?"😃Pass":"😥Fail";
                hinSpanRef.current.style.color=hinmarks>=35?"#0ce705":"red";
                
                
             }}

             onBlur={()=>{
                console.log("hindi is blur")
                hinMarksInputRef.current.style.backgroundColor="";
             }}
            ></input>
            <span ref={hinSpanRef}></span>
        </div>


        <div>
            <label>English</label>
            <input ref={engMarksInputRef} type='number' 
            onFocus={()=>{
                console.log("English is change");
                engMarksInputRef.current.style.backgroundColor="#a80c0c";
                
            }}
            onChange={()=>{
                console.log("English is change");
                let engMarks=Number(engMarksInputRef.current.value);
                console.log(engMarks>=35?"Pass":"Fail");
                engSpanRef.current.innerHTML=engMarks>=35?"😃Pass":"😥Fail";
                engSpanRef.current.style.color=engMarks>=35?"#0ce705":"red";
              
                
            }}
            onBlur={()=>{
                console.log("English is blur");
                engMarksInputRef.current.style.backgroundColor="";
            }}
            
            ></input>
            <span ref={engSpanRef}></span>
        </div>
        <div>
            <label>Maths</label>
            <input ref={mathsMarksInputRef} type='number'
            onFocus={()=>{
                console.log("maths on focus");
                mathsMarksInputRef.current.style.backgroundColor="#a80c0c";
                
            }}
            onChange={()=>{
                console.log("maths on change");
                let matMarks=Number(mathsMarksInputRef.current.value);
                console.log(matMarks>=35?"pass":"fail");
                matSpanRef.current.innerHTML=matMarks>=35?"😃Pass":"😥Fail";
                matSpanRef.current.style.color=matMarks>=35?"#0ce705":"red";
            }}
            onBlur={()=>{
                console.log("maths is onblur");
                mathsMarksInputRef.current.style.backgroundColor="";
                
            }}
            ></input>
            <span ref={matSpanRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input ref={sciMarksInputRef} type='number'
            onFocus={()=>{
                console.log("science on focus");
                sciMarksInputRef.current.style.backgroundColor="#a80c0c";
                
            }}
            onChange={()=>{
                console.log("science on change");
                let sciMarks=Number(sciMarksInputRef.current.value);
                console.log(sciMarks>=35?"Pass":"Fail");
                sciSpanRef.current.innerHTML=sciMarks>=35?"😃Pass":"😥Fail";
                sciSpanRef.current.style.color=sciMarks>=35?"#0ce705":"red";
                
            }}
            onBlur={()=>{
                console.log("science onBlur");
                sciMarksInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={sciSpanRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input ref={socMarksInputRef} type='number' 
            onFocus={()=>{
                console.log("Social onFocus");
                socMarksInputRef.current.style.backgroundColor="#a80c0c";
                
            }}
            onChange={()=>{
                console.log("Social onchange");
                let socMarks=Number(socMarksInputRef.current.value);
                console.log(socMarks>=35?"Pass":"Fail");
                socSpanRef.current.innerHTML=socMarks>=35?"😃Pass":"😥Fail";
                socSpanRef.current.style.color=socMarks>=35?"#0ce705":"red";
            }}
            onBlur={()=>{
                console.log("social onBlur");
                socMarksInputRef.current.style.backgroundColor="";
                
            }}
            ></input>
            <span ref={socSpanRef}></span>
        </div>
        </fieldset>

        <div className='container'>
        <button type='button' className='button' onClick={()=>{
            let firstName=firstNameInputRef.current.value;
            let LastName=lastNameInputRef.current.value;
            let telMarks=Number(telMarksInputRef.current.value);
            let hindiMarks=Number(hinMarksInputRef.current.value);
            let engMarks=Number(engMarksInputRef.current.value);
            let matMarks=Number(mathsMarksInputRef.current.value);
            let sciMarks=Number(sciMarksInputRef.current.value);
            let socMarks=Number(socMarksInputRef.current.value);

            let totalMarks=telMarks+hindiMarks+engMarks+matMarks+sciMarks+socMarks;

            let totalPerc=(totalMarks/600)*100;

            alert(`${firstName} ${LastName} Scored ${totalMarks} Your total percentage is ${totalPerc.toFixed(2)}%`);

            resultSpanRef.current.innerHTML=`${firstName} ${LastName} Scored ${totalMarks} Your total percentage is ${totalPerc.toFixed(2)}%`
        }
         }>Get Result</button>
        </div>



        <p ref={resultSpanRef} className='resultPara'></p>
      </form>
      </div>
    </div>
  )
}

export default MarksSheet
