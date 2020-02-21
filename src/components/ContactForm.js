import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pronoun: '',
    message: ''
  });
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });


  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const onSubmit = e => {

    axios
      .post(
        "https://reqres.in/api/users'",
        data
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log("err", err);
      });
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label >First Name*
          <input
            name="firstName"
            placeholder="First Name"
            value={data.firstName}
            onChange={changeHandler}
            ref={register({ required: true, maxLength: 20 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
          </label>
        </div>

        <div>
          <label>Last Name*
          <input
            name="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={changeHandler}
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
          </label>
        </div>

        <div>
          <label >
            Email*
          <input name="email" placeholder="Email" value={data.email} onChange={changeHandler} ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
           </label>
        </div>

        <label>Your prefer pronoun*
        <select name="pronoun"  value={data.pronoun} onChange={changeHandler} ref={register({ required: true })} >
        <option value="select" defaultValue disabled>select option</option>
        <option value="he/him">he/him</option>
        <option value="she/her">she/her</option>
        <option value="they/them">they/them</option>

      </select>
      </label>


        <div>
          <label>Message
          <textarea name="message" placeholder="Message" value={data.message} onChange={changeHandler} ref={register({ required: false })} />
          </label>
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
