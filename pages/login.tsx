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

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

type Event = ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>
type Data = InputOnChangeData | CheckboxProps;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  terms: false
};

const contact: React.FC = () => {
  firebaseClient(); // Initialize firebase client
  const { user } = useAuth();

  // Initialize state variables
  const [values, setValues] = useState<Values>(initialValues);
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [errorList, setErrorList] = useState<Array<string>>([]);

  // Set new form values on input change
  const handleInputChange = (e: Event, data: Data) => {
    const { value, checked, name } = data;

    setValues({
      ...values,
      [name]: value || checked
    });
  }

  // Validate name, phone number and terms
  const handleSubmit = async () => {
    const { email, password } = values;
    let temp = [];

    // Authenticate fields by pushing any errors onto our temporary array
    handleEmptyFields(temp);
    await handleFirebaseSubmit(email, password, temp);
    setErrorList(temp); // Set new error list

    // Conditionally set forms validation state
    temp.length > 0 ? setIsFormInvalid(true) : setIsFormInvalid(false);
  }

  // Create new user with firebase authentication if email and password are valid
  const handleFirebaseSubmit = async (
    email: string, 
    password: string, 
    temp: Array<string>
  ) => {
    if (temp.length === 0) {
      await firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          // Redirect logged in user to homescreen
          return window.location.href = "/"; 
        }).catch(err => {
          console.error(err.message);
          return temp.push(err.message);
        });
    }
  }

  const handleEmptyFields = (temp: Array<string>) => {
    // Add an error message for empty required values
    let requiredValues = ["firstName", "email", "password", "terms"];
    let message: string;

    for (let key of requiredValues) {
      if (!values[key]) {
        message = "Required Fields marked with a * must not be empty";
        return temp.push(message);
      }
    }
    return;
  }

  return (
    <Container className={loginStyles.container}>
      <Card raised fluid>
        <Card.Content>
          <Form error={isFormInvalid}>
            <Header 
              as="h1" 
              textAlign="center" 
              style={{ textDecoration: "underline" }}
            >
              Sign In
            </Header>
            <Group widths="equal">
              <Input 
                label="First Name*"
                placeholder="First Name..." 
                name="firstName"
                value={values.firstName}
                onChange={(e, data) => handleInputChange(e, data)}
              />
              <Input
                label="Last Name" 
                placeholder="Last Name..." 
                name="lastName"
                value={values.lastName}
                onChange={(e, data) => handleInputChange(e, data)}
              />
            </Group>
              <Input 
                label="Email*" 
                placeholder="Email..." 
                name="email"
                value={values.email}
                onChange={(e, data) => handleInputChange(e, data)}            
              />
              <Input 
                label="Password*" 
                placeholder="Password..."
                type="password" 
                name="password"
                value={values.password}
                onChange={(e, data) => handleInputChange(e, data)}
              />
            <Field>
              <Checkbox 
                label="I agree to the Terms and Conditions*" 
                name="terms"
                checked={values.terms}
                onChange={(e, data) => handleInputChange(e, data)}
              />
            </Field>
            <Message 
              error
              header={`We encountered ${errorList.length > 1 ? 'some errors' : 'an error'} with your sign-in attempt`}
              list={errorList}
            />
            <Container textAlign="center">
              <Button 
                type="submit" 
                size="large" 
                color="blue"
                onClick={handleSubmit}
              >
                Demo Auth
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