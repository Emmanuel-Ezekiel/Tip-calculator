import React, { useState } from'react';
import { Main } from './App.styled'
import { FaUser } from 'react-icons/fa';

function App() {

  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  const handleChange = (event) => {
    setBill(event.target.value);
  };

  const handleChangePeople = (event) => {
    setPeople(event.target.value);
  };

  return (
    <>
      <Main>
        <h1>SPLI <br/> TTER </h1>
         <div>

          {/* Input Form Container */}
          <div className='formContainer'>
              <form>
                  <label htmlFor='bill'>Bill</label>
                  <FaUser color='#a1b9b8' className='user'/>
                  <span> &#36;</span>
                  <input
                    type='text'
                    name='bill'
                    id='Bill'
                    value={bill}
                    onChange={handleChange}
                    required
                  />

                  <div className='selectTip'>
                    <p>Select Tip %</p>
                    <div className='buttonContainer'>
                      <button className='button'>5%</button>
                      <button className='button'>10%</button>
                      <button className='button'>15%</button>
                      <button className='button'>25%</button>
                      <button className='button'>50%</button>
                      <input
                        type='text'
                        name='bill'
                        id='Bill'
                        placeholder='Custom'
                      />
                    </div>
                  </div>

                  <label htmlFor='numberOfPeople'>Number of People</label>
                  <input
                    type='number'
                    name='numberOfPeople'
                    id='numberOfPeople'
                    value={people}
                    onChange={handleChangePeople}
                    required
                  />
                
            </form>
          </div>

          {/* Total Container */}
          <div className='TotalContainer'>
            <div className='Tip'>
                <p> Tip Amount <br/> <span>/ person </span></p>
                <span> &#36; 0.00 </span>
            </div>
            <div className='Tip'>
              <p> Total <br/> <span>/ person </span></p>
              <span> &#36; 0.00 </span>
            </div>
            <button>
              RESET
            </button>
          </div>
         </div>
      </Main>
    </>
  );
}

export default App;
