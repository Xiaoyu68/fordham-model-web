import React, { Component } from 'react';
import axios from 'axios';
import { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";

function Blacksholes() {
  const [form, setState] = useState({
    s: "",
    r: "",
    x: "",
    t: "",
    sigma: "",
    res: "",
  });

  const printValues = e => {
    e.preventDefault();
    axios.post('https://fordhammodel.herokuapp.com/model/bs',{
        r: form.r,
        s: form.s,
        x: form.x,
        sigma: form.sigma,
        t: form.t
    })
    .then((response) => {
        console.log(response)
        setState({
            ...form,
            res: response.data.p.toFixed(2)
        })
    })
  };

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={printValues}>
      <h2>Black-Sholes Model</h2>
      <label style={{marginLeft:10}}>
        Underlying Asset Price:
        <input value={form.s} name="s" onChange={updateField} style={{marginLeft:10}} />
      </label>
      <br />
      <br />
      <label style={{marginLeft:10}}>
        Time to Maturity:
        <input
          value={form.t}
          name="t"
          onChange={updateField}
          style={{marginLeft:54}}
        />
      </label>
      <br/>
      <br />
      <label style={{marginLeft:10}}>
      Volatility:
        <input value={form.sigma} name="sigma" onChange={updateField} style={{marginLeft:109}}/>
      </label>
      <br />
      <br />
      <label style={{marginLeft:10}}>
        Strike Price:
        <input
          value={form.x}
          name="x"
          onChange={updateField}
          style={{marginLeft:86}}
        />
      </label>
      <br/>
      <br />
      <label style={{marginLeft:10}}>
        Risk-free Interest Rate:
        <input value={form.r} name="r" onChange={updateField} style={{marginLeft:12}}/>
      </label>
      <br />
      <br />
      <button style={{marginLeft:12}}>Submit</button>
      <br />
      <br/>
      <div style={{marginLeft:10}}>Option Price: {form.res}</div>
    </form>
    
  );
}
export default Blacksholes;