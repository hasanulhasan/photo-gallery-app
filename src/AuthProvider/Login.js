import { GoogleAuthProvider } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Login = () => {
  const { user, providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const googleButton = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
      })
      .catch(err => {
        console.error(err);
      })
  }



  return (
    <div className='flex justify-center my-12'>
      <div className='w-1/3'>
        <Button className='w-full mb-4' onClick={googleButton} gradientMonochrome="cyan">
          Login with Google
        </Button>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="Your email"
              />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password1"
                value="Your password"
              />
            </div>
            <TextInput
              id="password1"
              type="password"
              required={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">
              Remember me
            </Label>
          </div>
          <Button type='submit' gradientMonochrome="cyan" onClick={googleButton}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;