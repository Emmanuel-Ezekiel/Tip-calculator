import React, { useState } from "react";
import { Main } from "./App.styled";
import { FaUser } from "react-icons/fa";
import Logic from "./utils/Logic";

function App() {
  const {
    bill,
    people,
    errors,
    tipPerson,
    totalAmount,
    customTip,
    handleChangeTip1,
    handleChangeTip2,
    handleChangeTip3,
    handleChangeTip4,
    handleChangePeople,
    handleChangeTip,
    Reset,
    handleChange,
    handleCustomTip,
    handleFocus,
    handleBlur,
  } = Logic();

  const covertNumber = parseFloat(tipPerson);
  return (
    <>
      <Main>
        <h1>
          SPLI <br /> TTER{" "}
        </h1>
        <div>
          {/* Input Form Container */}
          <div className="formContainer">
            <form>
              <label htmlFor="bill">Bill</label>
              <FaUser color="#a1b9b8" className="user" />
              <span> &#36;</span>
              <input
                type="number"
                name="bill"
                id="Bill"
                value={bill}
                onChange={handleChange}
                required
              />

              <div className="selectTip">
                <p>Select Tip %</p>
                <div className="buttonContainer">
                  <button className="button" onClick={handleChangeTip}>
                    5%
                  </button>
                  <button className="button" onClick={handleChangeTip1}>
                    10%
                  </button>
                  <button className="button" onClick={handleChangeTip2}>
                    15%
                  </button>
                  <button className="button" onClick={handleChangeTip3}>
                    25%
                  </button>
                  <button className="button" onClick={handleChangeTip4}>
                    50%
                  </button>
                  <input
                    type="number"
                    name="customTip"
                    value={customTip}
                    onChange={handleCustomTip}
                    // pattern="[-]?[0-9]*[.,]?[0-9]+"
                    required
                    placeholder="Custom"
                  />
                </div>
              </div>

              <div className="numOfPeople_head">
                <label htmlFor="numberOfPeople">Number of People</label>
                {errors.numOfPeople && (
                  <p className="is-danger">{errors.numOfPeople}</p>
                )}
              </div>
              <input
                type="number"
                name="numberOfPeople"
                id="numberOfPeople"
                value={people}
                onChange={handleChangePeople}
                onBlur={handleBlur}
                onFocus={handleFocus}
                required
                className={`${errors.numOfPeople ? "danger" : "Input_people"}`}
              />
            </form>
          </div>

          {/* Total Container */}
          <div className="TotalContainer">
            <div className="Tip">
              <p>
                {" "}
                Tip Amount <br /> <span>/ person </span>
              </p>
              <span> &#36; {covertNumber} </span>
            </div>
            <div className="Tip2">
              <p>
                {" "}
                Total <br /> <span>/ person </span>
              </p>
              <span> &#36; {totalAmount} </span>
            </div>

            <button onClick={Reset}>RESET</button>
          </div>
        </div>
      </Main>
    </>
  );
}

export default App;
