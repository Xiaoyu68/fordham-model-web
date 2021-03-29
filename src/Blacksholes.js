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
            res: response.data.p
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
      <label>
        s:
        <input value={form.s} name="s" onChange={updateField} />
      </label>
      <br />
      <br />
      <label>
        t:
        <input
          value={form.t}
          name="t"
          onChange={updateField}
        />
      </label>
      <br/>
      <br />
      <label>
        sigma:
        <input value={form.sigma} name="sigma" onChange={updateField} />
      </label>
      <br />
      <br />
      <label>
        x:
        <input
          value={form.x}
          name="x"
          onChange={updateField}
        />
      </label>
      <br/>
      <br />
      <label>
        r:
        <input value={form.r} name="r" onChange={updateField} />
      </label>
      <br />
      <br />
      <button>Submit</button>
      <br />
      <div>{form.res}</div>
    </form>
    
  );
}
export default Blacksholes;