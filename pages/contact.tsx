import React from 'react';
import Link from "next/link";
import { 
  Form, 
  Header, 
  Segment, 
  Checkbox, 
  Button, 
  Container 
} from "semantic-ui-react";
import contactStyles from "../styles/Contact.module.css";

const { Group, Input } = Form;

const contact: React.FC = () => {
  return (
    <Container className={contactStyles.container}>
      <Segment raised secondary>
        <Form>
          <Header 
            as="h1" 
            textAlign="center" 
            style={{ textDecoration: "underline" }}
          >
            Sign In
          </Header>
          <Group widths="equal">
            <Input label="First Name" placeholder="First Name" />
            <Input label="Last Name" placeholder="Last Name" />
          </Group>
          <Input label="Email" placeholder="Email" />
          <Input label="Password" placeholder="Password" />
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Container textAlign="center">
            <Button type="submit" size="large" color="blue">Submit</Button>
          </Container>
        </Form>
      </Segment>
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