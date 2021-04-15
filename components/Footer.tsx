import React from 'react';
import Link from "next/link";
import { Segment, Menu } from "semantic-ui-react";
import { checkoutItems } from '../utils/checkoutItems';
import footerStyles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  const { container, menu } = footerStyles;

  return (
    <Segment className={container} basic inverted>
      <Menu className={menu} inverted fluid compact> 
        <Link href="/">
          <Menu.Item as="a">Shop</Menu.Item>
        </Link>
        <Link href="/login">
          <Menu.Item as="a">Sign In</Menu.Item>
        </Link>
        <Menu.Item 
          as="a"
          onClick={() => checkoutItems()}
        >
          Checkout
        </Menu.Item>
      </Menu>
      <Menu inverted vertical text fluid>
        <Menu.Item>
          Infinite Book Store | Copyright &copy; 2021
        </Menu.Item>
      </Menu>
    </Segment>
  );
}

export default Footer;