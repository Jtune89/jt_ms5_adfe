import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
      username: "",
      inputEmail:"",
      password: "",
      password1: "",
    });
    const { username, inputEmail, password, password1 } = signUpData;

    const [errors, setErrors] = useState({});

    const history = useNavigate();
  
    const handleChange = (event) => {
      setSignUpData({
        ...signUpData,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push('/signin')
        } catch(err) {
            setErrors(err.response?.data)
        }
    }
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

    <form onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
        <input type="text" class="form-control" id="username" aria-describedby="username" name="username" 
        value={username} onChange={handleChange} required/>
         <label className={styles.Input} for="username" class="form-label">Username</label>
        </div>
        <div class="form-floating mb-3">
        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" name="inputEmail"
        onChange={handleChange} value={inputEmail} required/>
         <label className={styles.Input} for="inputEmail" class="form-label">Email Address</label>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="form-floating mb-3">
        <input type="password" class="form-control" id="password" name="password" onChange={handleChange}
        value={password} required/>
        <label className={styles.Input} for="password" class="form-label">Password</label>
        </div>
        <div class="form-floating mb-3">
        <input type="password" class="form-control" id="password1" name="password1" onChange={handleChange}
        value={password1} required/>
        <label className={styles.Input} for="password" class="form-label">Confirm Password</label>
        </div>
        <div class="mb-3 form-check">
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-success" type="submit">Register</button>
        </div>
        {errors.non_field_errors?.map((message, idx) => (
            <Alert variant="warning" key={idx} className="mt-3">
              {message}
            </Alert>
          ))}
    </form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;