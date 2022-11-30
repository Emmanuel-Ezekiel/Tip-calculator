import React, { useRef, useState, useEffect } from "react";

const Logic = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [errors, setErrors] = useState({ numOfPeople: "" });
  const [tipPerson, setTipPerson] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [error, setError] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false); // ADDED

  const ref = useRef();

  const handleBlur = () => {
    if (!error) {
      if (people === 0) {
        ref.current.focus();
        setError(true);
        setShowErrorText(true);
        setErrors(validate());
      }
    }
    if (error) {
      setShowErrorText(false);
    }
  };

  const handleFocus = () => {
    if (error) {
      setShowErrorText(true);
      setErrors(validate());
    }
  };

  // const customChange = () => {

  // }
  // const handleChange2 = (event) => {
  //   const newValueIsValid = !event.target.validity.patternMismatch;
  //   if (error) {
  //     if (newValueIsValid) {
  //       setError(false);
  //       setShowErrorText(false);
  //     }
  //   }
  //   setUserInput(event.target.value);
  // };

  // Error Validation Logic
  const validate = (values) => {
    let errors = {};
    if (values === 0) {
      errors.numOfPeople = "Can't be Zero";
    } else if (values > 0) {
      errors.numOfPeople = "";
    }
    return errors;
  };

  // Input bill changes
  const handleChange = (event) => {
    setBill(event.target.value);
  };

  // Input people changes
  const handleChangePeople = (event) => {
    setPeople(event.target.value);
  };

  const Reset = (event) => {
    event.preventDefault();
    setBill(0);
    setPeople(0);
    setErrors({ numOfPeople: "" });
    setTipPerson(0);
    setTotalAmount(0);
  };

  const handleCustomTip = (event) => {
    setCustomTip((prev) => (prev, event.target.value));
    if (customTip == "") {
      setTipPerson(0);
      setTotalAmount(0);
    }
    if (customTip) {
      const tip = bill / people;
      const Person = parseFloat(((tip * customTip) / 100).toFixed(2));
      const tipPerson = parseFloat((tip + Person).toFixed(2));
      setTipPerson(Person);
      setTotalAmount(tipPerson);
      if (people === 0) {
        setErrors(validate(people));
      }
    }
  };

  const handleChangeTip = (event) => {
    event.preventDefault();
    if (people === 0) {
      setErrors(validate(people));
    }
    const tip = bill / people;
    const Person = parseFloat(((tip * 5) / 100).toFixed(2));
    const tipPerson = parseFloat((tip + Person).toFixed(2));
    setTipPerson(Person);
    setTotalAmount(tipPerson);
  };

  const handleChangeTip1 = (event) => {
    event.preventDefault();
    if (people === 0) {
      setErrors(validate(people));
    }
    const tip = bill / people;
    const Person = parseFloat(((tip * 10) / 100).toFixed(2));
    const tipPerson = parseFloat((tip + Person).toFixed(2));
    setTipPerson(Person);
    setTotalAmount(tipPerson);
  };

  const handleChangeTip2 = (event) => {
    event.preventDefault();
    if (people === 0) {
      setErrors(validate(people));
    }
    const tip = bill / people;
    const Person = parseFloat(((tip * 15) / 100).toFixed(2));
    const tipPerson = parseFloat((tip + Person).toFixed(2));
    setTipPerson(Person);
    setTotalAmount(tipPerson);
  };

  const handleChangeTip3 = (event) => {
    event.preventDefault();
    if (people === 0) {
      setErrors(validate(people));
    }
    const tip = bill / people;
    const Person = parseFloat(((tip * 25) / 100).toFixed(2));
    const tipPerson = parseFloat((tip + Person).toFixed(2));
    setTipPerson(Person);
    setTotalAmount(tipPerson);
  };

  const handleChangeTip4 = (event) => {
    event.preventDefault();
    if (people === 0) {
      setErrors(validate(people));
    }
    const tip = bill / people;
    const Person = parseFloat(((tip * 50) / 100).toFixed(2));
    const tipPerson = parseFloat((tip + Person).toFixed(2));
    setTipPerson(Person);
    setTotalAmount(tipPerson);
  };

  return {
    bill,
    people,
    errors,
    tipPerson,
    totalAmount,
    customTip,
    showErrorText,
    validate,
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
  };
};

export default Logic;
