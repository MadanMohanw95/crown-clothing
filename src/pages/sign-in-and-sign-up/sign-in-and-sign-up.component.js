import React from 'react';

import './sign-in-and-sign-up.component';
import '../../components/sign-in/sign-in.component';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

export default SignInSignUpPage;
