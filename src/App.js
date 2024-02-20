
import './App.css';
import React, { useState } from 'react';

function App() {
  const [formInputs, setFormInputs] = useState({
    weight: '',
    height: '',
    gender: '',
    age: '',
    Diabetic:'',
    smokingStatus: '',
    bloodPressure: '',
    cholesterol: '',
    dp1:'',
    dp2:'',
    dp3:'',
    dp4:'',
    dp5:'',
    dp6:'',
    dp7:'',
    dp8:'',
    sleep_hours:''

  });

  const [predictions, setPredictions] = useState([]);

  const handleInputChange = (fieldName, value) => {
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [fieldName]: value,
    }));
  };

  const handlePredict = async () => {
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formInputs),
    });
  //   fetch('http://localhost:5000/submit',{
  //   method:'POST',
  //   headers:{
  //       'Content-Type':'application/json',
  //   },
  //   body:JSON.stringify({formInputs}),

  // })
    const data = await response.text();
    
    setPredictions(data);
  };

  return (
    <div className='con'>
      <div class="header">
        <h1>SLEEP HEALTH CHECK</h1>
      </div>
    <div className='contents'>
      
      <div class="from">
      <label for="age">
        Age:
        </label>
        <br></br>
        <input type="number" id="age" value={formInputs.age} onChange={(e) => handleInputChange('age', e.target.value)} />
        </div>
      <br></br>
      
      <div class="form">
      <label>
        Gender:</label>
        <br></br>
        <select value={formInputs.gender} onChange={(e) => handleInputChange('gender', e.target.value)}>
        
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
        </div>
      <br></br>
     
      <div class="from">
      <label>
        Height:</label>
        <br></br>
        <input type="number" value={formInputs.height} onChange={(e)=>handleInputChange('height', e.target.value)}/>
     </div>
      
      <br></br>
      
      <div class="from">
      <label>
        Weight:</label>
        <br></br>
        <input type="number" value={formInputs.weight} onChange={(e)=>handleInputChange('weight', e.target.value)}/>
        </div>
      
      <br></br>
    
      <div class="from">
      <label>
        BloodPressure:</label>
        <br></br>
        <select value={formInputs.bloodPressure} onChange={(e)=>handleInputChange('bloodPressure',e.target.value)}>
        <option value="0">Don't Know</option>
          <option value="1">YES</option>
          <option value="2">NO</option>
         </select>
         </div>
      <br></br>
   
      <div class="from">
      <label>
        Cholesterol:</label>
        <br></br>
        <select value={formInputs.cholesterol} onChange={(e)=>handleInputChange('cholesterol',e.target.value)}>
        <option value="0">Don't Know</option>
        <option value="1">YES</option>

        <option value="2">NO</option>
        </select>
        </div>
      <br></br>
     
      <div class="form">
        <label>
          Diabetic:
        </label>
        <br></br>
        <select value={formInputs.Diabetic} onChange={(e)=>handleInputChange('Diabetic',e.target.value)}>
        <option value="0">Don't Know</option>
        <option value="1">YES</option>
        <option value="2">NO</option>
        </select>
      </div>
      <br></br>
  
      <div class="from">
      
      <label>Have little interest in doing things:</label>
         <br></br>
        <select value={formInputs.dp1} onChange={(e)=>handleInputChange('dp1',e.target.value)}>
        <option value="0">Don't Know</option>
          <option value="1">YES</option>
          <option value="2">NO</option>
        </select>
     </div>
      <br></br>
      <br></br>
      <div class="form">
      <label>Feeling down or depressed or hopeless?:</label>
         <br></br>
         <select value={formInputs.dp2} onChange={(e)=>handleInputChange('dp2',e.target.value)}>
         <option value="0">Don't Know</option>
          <option value="1">YES</option>
          <option value="2">NO</option>
        </select>
        </div>
        <br></br>
      <br></br>
      <label>Trouble sleeping or sleeping too much:</label>
         <br></br>
         <select value={formInputs.dp3} onChange={(e)=>handleInputChange('dp3',e.target.value)}>
         <option value="0">Don't Know</option>
          <option value="1">YES</option>
          <option value="2">NO</option>
        </select>
        <br></br>
      <br></br>
      <label>Feeling tired or having little energy</label>
         <br></br>
         <select value={formInputs.dp4} onChange={(e)=>handleInputChange('dp4',e.target.value)}>
         <option value="0">Don't Know</option>
          <option value="1">YES</option>
          <option value="2">NO</option>
        </select>
        <br></br>
      <br></br>
      <label>Poor appetite or overeating</label>
         <br></br>
         <select value={formInputs.dp5} onChange={(e)=>handleInputChange('dp5',e.target.value)}>
         <option value="0">Don't Know</option>
          <option value="1">YES</option>
          <option value="2">NO</option>
        </select>
        <br></br>
      <br></br>
      <label>Feeling bad about yourself</label>
         <br></br>
         <select value={formInputs.dp6} onChange={(e)=>handleInputChange('dp6',e.target.value)}>
         <option value="0">Don't Know</option>
          <option value="1">YES</option>
          <option value="2">NO</option>
        </select>
        <br></br>
      <br></br>
      <label>Trouble concentrating</label>
         <br></br>
         <select value={formInputs.dp7} onChange={(e)=>handleInputChange('dp7',e.target.value)}>
         <option value="0">Don't Know</option>
          <option value="1">YES</option>
          <option value="2">NO</option>
        </select>
        <br></br>
      <br></br>
      <label>Moving or speaking too slowly or too fast</label>
         <br></br>
         <select value={formInputs.dp8} onChange={(e)=>handleInputChange('dp8',e.target.value)}>
         <option value="0">Don't Know</option>
          <option value="1">YES</option>
          <option value="2">NO</option>
        </select>
        <br></br>
        <br></br>
        
        <label>Sleep hours</label>
         <br></br>
         <input type="number" value={formInputs.sleep_hours} onChange={(e)=>handleInputChange('sleep_hours',e.target.value)}/>
         
      
        <br></br>
        <br></br>
     </div>
      <br></br>
      <br></br>
      
      
      <div class="form">
      
      <button onClick={handlePredict}>Predict</button>
      <div>
        <h2>Predictions:</h2>
         {predictions !== null && <p>Prediction: {predictions}</p>} 
      </div>
      
    </div>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    </div>
 
  );
}

export default App;
