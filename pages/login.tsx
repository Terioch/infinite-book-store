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
  InputOnChangeData,
  CheckboxProps
} from "semantic-ui-react";
import loginStyles from "../styles/Login.module.css";

const { Group, Input, Field } = Form;

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  terms: boolean;
}

type Event = ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>
type Data = InputOnChangeData | CheckboxProps;

const contact: React.FC = () => {
  firebaseClient(); // Initialize firebase client

  const { user } = useAuth();

  // Initialize form values and error values
  const [values, setValues] = useState<Values>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    terms: false
  });
  const [errorValues, setErrorValues] = useState({ ...values });

  // Set new form values on input change
  const handleInputChange = (e: Event, data: Data) => {
    const { value, name } = data;

    setValues({
      ...values,
      [name]: value
    });
  }

  // Validate name, phone number and terms
  const handleSubmit = () => {
    const { firstName, email, phoneNumber, password, terms } = values;

    // Set values within temporary values object to false
    const temp = Object.keys(values).map(key => ({ [key]: false }));
    console.log(temp);

    handleFirebaseSubmit(email, password);
  }

  // Create new user with firebase authentication if email and password are valid
  const handleFirebaseSubmit = async (email: string, password: string) => {
    await firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "/";
      }).catch(err => {
        console.error(err.message);
      });
  }

  return (
    <Container className={loginStyles.container}>
      <Card raised fluid>
        <Card.Content>
          <Form>
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
                error={errorValues.firstName}
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
                error={errorValues.terms}
                onChange={(e, data) => handleInputChange(e, data)}            
              />
              <Input
                label="Phone Number*" 
                placeholder="Phone Number..." 
                name="phoneNumber"
                value={values.phoneNumber}
                //error={errorValues.phoneNumber}
                onChange={(e, data) => handleInputChange(e, data)}
              />
              <Input 
                label="Password*" 
                placeholder="Password..."
                type="password" 
                name="password"
                value={values.password}
                //error={errorValues.password}
                onChange={(e, data) => handleInputChange(e, data)}
              />
            <Field>
              <Checkbox 
                label="I agree to the Terms and Conditions*" 
                name="terms"
                checked={values.terms}
                //error={errorValues.terms}
                onChange={(e, data) => handleInputChange(e, data)}
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