import { ChangeEvent, FormEvent, useState } from 'react';
import firebase from "firebase/app"
import firebaseClient from "../auth/firebaseClient";
import "firebase/auth";
import { useAuth } from "../auth/auth";
import { 
  Form, 
  Header, 
  Card,
  Checkbox, 
  Button, 
  Container, 
  Message,
  InputOnChangeData,
  CheckboxProps
} from "semantic-ui-react";
import loginStyles from "../styles/Login.module.css";

const { Group, Input, Field } = Form;

type Event = ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>
type Data = InputOnChangeData | CheckboxProps;

const contact: React.FC = () => {
  firebaseClient(); // Initialize firebase client

  const { user } = useAuth();

  // Initialize form values and form error validator
  const [isFormValid, setIsFormValid] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    terms: false
  });

  // Set new form values on input change
  const handleInputChange = (e: Event, data: Data) => {
    const { value, name } = data;
    console.log(data);

    setValues({
      ...values,
      [name]: value
    });
  }

  // Create new user with firebase authentication
  const handleSubmit = async () => {
    const { email, password } = values;
    await firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setIsFormValid(false);
        window.location.href = "/"
      }).catch(err => {
        setIsFormValid(true);
        console.error(err.message);
      });
  }

  return (
    <Container className={loginStyles.container}>
      <Card raised fluid>
        <Card.Content>
          <Form error={isFormValid}>
            <Header 
              as="h1" 
              textAlign="center" 
              style={{ textDecoration: "underline" }}
            >
              Sign In
            </Header>
            <Group widths="equal">
              <Input 
                label="First Name"
                placeholder="First Name..." 
                name="firstName"
                value={values.firstName}
                onChange={(e, data) => handleInputChange(e, data)}
              />
              <Message
                error
                content='You can only sign up for an account once with a given e-mail address.'
              />
              <Input
                label="Last Name" 
                placeholder="Last Name..." 
                name="lastName"
                value={values.lastName}
                onChange={(e, data) => handleInputChange(e, data)}
              />
              <Message
                error
                content='You can only sign up for an account once with a given e-mail address.'
              />
            </Group>
              <Input 
                label="Email" 
                placeholder="Email..." 
                name="email"
                value={values.email}
                onChange={(e, data) => handleInputChange(e, data)}            
              />
              <Message
                error
                content='You can only sign up for an account once with a given e-mail address.'
              />
              <Input
                label="Phone Number" 
                placeholder="Phone Number..." 
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={(e, data) => handleInputChange(e, data)}
              />
              <Message
                error
                content='You can only sign up for an account once with a given e-mail address.'
              />
              <Input 
                label="Password" 
                placeholder="Password..." 
                name="password"
                value={values.password}
                onChange={(e, data) => handleInputChange(e, data)}
              />
              <Message
                error
                content='You can only sign up for an account once with a given e-mail address.'
              />
            <Field>
              <Checkbox 
                label="I agree to the Terms and Conditions" 
                name="terms"
                checked={values.terms}
                onChange={(e, data) => handleInputChange(e, data)}
              />
              <Message
                error
                content='You can only sign up for an account once with a given e-mail address.'
              />
            </Field>
            <Container textAlign="center">
              <Button 
                type="submit" 
                size="large" 
                color="blue"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Container>
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
}

export default contact;

// Alternative form layout
{/* <Field>
  <label>First Name</label>
  <input placeholder='First Name' />
</Field>
<Field>
  <label>Last Name</label>
  <input placeholder='Last Name' />
</Field>
<Field>
  <label>Email</label>
  <input placeholder='Email' />
</Field> */}