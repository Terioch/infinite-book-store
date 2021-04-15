import Link from "next/link";
import { Segment, Menu, Header, Button, Icon, MenuItemProps } from "semantic-ui-react";
import { checkoutItems } from "../utils/checkoutItems";
import navStyles from "../styles/Nav.module.css";

// Destructure semantic ui components
const { Item } = Menu;
const { Content } = Button;

const Nav: React.FC<MenuItemProps> = () => {
  const { menu, title, rightMenu } = navStyles;

  return (
    <Segment basic inverted padded>
      <Menu 
        className={menu} 
        fluid 
        borderless 
        color="black" 
        inverted
      >
        <Item>
          <Header className={title} as="h1" color="blue">
            Infinite Book Store
            <Icon name="bolt" color="grey" />
          </Header>
        </Item>
        <Item className={rightMenu}>
          <Item>
            <Link href="/">
              <Button 
                animated='vertical'
                inverted   
                color="grey"
              >
                <Content hidden>Shop</Content>
                <Content visible>
                  <Icon name='shop' />
                </Content>
              </Button>
            </Link>
          </Item>
          <Item fitted="horizontally">
            <Link href="/login">
              <Button inverted color="grey">Sign In</Button>
            </Link>
          </Item>
          <Item>
            <Button 
              inverted 
              labelPosition="right" 
              icon 
              color="green"
              onClick={() => checkoutItems()}
            >
              <Icon name="arrow right" />
              Checkout
            </Button>
          </Item>
        </Item>
      </Menu>
    </Segment>
  );
}

export default Nav;