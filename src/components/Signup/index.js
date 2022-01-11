import axios from 'axios';
import React, { useState } from 'react';

// Facade
import { facade } from '../../apiFacade';
import { signup } from '../../settings';

// Styles
import {
  Wrapper,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledError,
} from './Signup.styles';

//Router
import { useNavigate } from 'react-router-dom';

function Signup({ setLoginCredentials, setLoggedIn }) {
  const [response, setResponse] = useState('');
  const [signupCredentials, setSignupCredentials] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignupCredentials({
      ...signupCredentials,
      [e.target.id]: e.target.value,
    });
    // console.log(signupCredentials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(`${signup}`, {
      method: 'POST',
      data: signupCredentials,
    }).then((response) => {
      setResponse(response.data);
      if (response.data.status === 'success') {
        facade
          .login(signupCredentials.username, signupCredentials.password)
          .then(() => {
            if (sessionStorage.getItem('username') && facade.loggedIn) {
              setLoginCredentials(signupCredentials);
              setLoggedIn(true);
              navigate('/');
            }
          });
      }
    });
  };

  return (
    <Wrapper>
      <StyledFormWrapper>
        <StyledForm>
          <StyledInput
            placeholder="User Name"
            id="username"
            onChange={handleChange}
          />
          <StyledInput
            placeholder="Password"
            type="password"
            id="password"
            onChange={handleChange}
          />
          {response.message && (
            <StyledError>
              <p>{response.message}</p>
            </StyledError>
          )}
          <StyledButton onClick={handleSubmit}>Sign up</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </Wrapper>
  );
}

export default Signup;
