import React from 'react';
import { Container, Dropdown, Grid, Icon, Image, Label, Menu } from 'semantic-ui-react';

export default class Section1 extends React.Component {
  render() {
    return (
      <div className='section1'>
        <Menu borderless className='ui borderless menu'>
          <Container fluid>
            <Menu.Item className='b-font' href='#'>Menu</Menu.Item>
            <Menu.Item className='b-font' href='#'>Offers</Menu.Item>
            <Menu.Item className='b-font' href='#'>Restaurants</Menu.Item>
            <Menu.Item className='b-font' href='#'>Careers</Menu.Item>
            <Dropdown item text="More" icon="dropdown" className='b-font'>
              <Dropdown.Menu>
                <Dropdown.Item>About BK</Dropdown.Item>
                <Dropdown.Item>Nutrition</Dropdown.Item>
                <Dropdown.Item>Careers</Dropdown.Item>
                <Dropdown.Item>Offer Terms</Dropdown.Item>
                <Dropdown.Item>Delivery Terms</Dropdown.Item>
                <Dropdown.Item>Ch&apos;King Instant Win</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Image src='https://play-lh.googleusercontent.com/4nS614DkX7HHs3s8lSe2Yl9uz7ENvYjXCcGz7PY5xydtOD0OxlwUUVv7OfmPn7TgblU' size='tiny' centered/>

            <Menu.Item position='right' href='#'>
              <Label circular color='red' size='large' id='sign-up-label'>
                Sign Up
              </Label>
            </Menu.Item>
            <Menu.Item href='#'>
              <Label circular size='large' id='shop-bag-label'>
                $0.00 <Icon name='shopping bag'/>
              </Label>
            </Menu.Item>
          </Container>
        </Menu>

        <Container>
          <Grid centered rows='2'>
            <Grid.Row columns='2'>
              <Grid.Column className='six column wide img'>
                <Image src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/232ad531b72e77d8d5c9fa3ea0eb17cd8fe1d147-1048x524.png?w=1125&q=40&fit=max&auto=format' alt='BK pic1'/>
              </Grid.Column>

              <Grid.Column className='six column wide img'>
                <Image src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/9743987c61ad072c45951ad5a68d0f831184d0bc-2000x1000.jpg?w=3840&q=40&fit=max&auto=format' alt='BK pic2'/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns='2'>
              <Grid.Column className='six column wide img'>
                <Image src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/6d584a94f3f3ddbb12adf3740d346c1d602e5467-2000x1000.png?w=1280&q=40&fit=max&auto=format' alt='BK pic3'/>
              </Grid.Column>

              <Grid.Column className='six column wide img'>
                <Image src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/0f1c1df8b878d9e7d9f49794888a1912952e611e-2000x1000.png?w=3840&q=40&fit=max&auto=format' alt='BK pic4'/>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Container>

      </div>
    );
  }
}
