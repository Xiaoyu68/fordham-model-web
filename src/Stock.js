import React, { Component } from 'react';
import axios from 'axios';
import { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";

function Stock() {
    const [form, setState] = useState({
      start: "",
      end: ""
    });
  
    const printValues = e => {
      e.preventDefault();
      axios.get('https://fordhammodel.herokuapp.com/stock/export',{
        params: { startDate: form.start,
        endDate: form.end }
      })
      .then((response) => {
          console.log(response)
          window.location.href = 'https://fordhammodel.herokuapp.com/stock/export?' + "startDate=" + form.start + "&endDate=" + form.end 
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
        <h2>Stock Price</h2>
        <label style={{marginLeft:10}}>
          start date:
          <input value={form.start} name="start" onChange={updateField} style={{marginLeft:10}} />
        </label>
        <br />
        <br />
        <label style={{marginLeft:10}}>
          end date:
          <input
            value={form.end}
            name="end"
            onChange={updateField}
            style={{marginLeft:34}}
          />
        </label>
        <br />
        <br/>
      <button style={{marginLeft:12}}>Submit</button>
      <br />
      </form>
      
    );
  }
  export default Stock;