import { useState } from "react";
import { irr } from "./BusinessLogic/BLogic";
import { formInput, submitButton } from "./Components/FormInput";
import { getForm } from "./Components/FormTemplate";
import "./form.css";

const Form = () => {
  const [pr1, setPr1] = useState("");
  const [pr2, setPr2] = useState("");
  const [freq1, setFreq1] = useState("");
  const [freq2, setFreq2] = useState("");
  const [result, setResult] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    console.log(show());
    setResult(irr(pr1, pr2, freq1, freq2));
  };

  const reset = (e) => {
    e.preventDefault();
    setFreq1("");
    setFreq2("");
    setPr1("");
    setPr2("");
    setResult(0);
  };

  const show = () => {
    return result !== 0;
  };

  const displayPercent = (number) => {
    return parseFloat(number).toPrecision(3) + "%";
  };

  let children = [];
  children.push(formInput(pr1, setPr1, "Premium 1", "input-container ic1"));
  children.push(formInput(freq1, setFreq1, "Frequency 1"));
  children.push(formInput(pr2, setPr2, "Premium 2"));
  children.push(formInput(freq2, setFreq2, "Frequency 2"));
  children.push(submitButton(submit, "Submit"));
  children.push(submitButton(reset, "Reset"));
  children.push(
    show() && (
      <div className="input-container ic2">
        <div className="result">CAGR : {displayPercent(result)}</div>
      </div>
    )
  );

  let form = getForm("Mode Chooser", "Enter the details", children);

  return form;
};

export { Form };
