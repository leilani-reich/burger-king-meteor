import React from 'react';
import { Container, Grid, Header, Icon, Item, List, Menu } from 'semantic-ui-react';

export default class BKFooter extends React.Component {
  render() {
    return (
      <div className='footer'>
        <Grid container columns='4'>
          <Grid.Row>
            <Grid.Column className='ui column'>
              <List>
                <Header size='medium'>BKC Info</Header>
                <List.Item>About BK</List.Item>
                <List.Item>Trademarks Notice</List.Item>
                <List.Item>Food Quality</List.Item>
                <List.Item>News & Press</List.Item>
                <List.Item>Global Media Contacts</List.Item>
                <List.Item>Investor Relations</List.Item>
                <List.Item>Franchising</List.Item>
                <List.Item>International</List.Item>
                <List.Item>Menu</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column className='ui column'>
              <List>
                <Header size='medium'>MY BK</Header>
                <List.Item>BK App</List.Item>
                <List.Item>Gift Cards / Crown Cards</List.Item>
                <List.Item>Reload Card</List.Item>
                <List.Item>Check Card Balance</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column className='ui column'>
              <List>
                <Header size='medium'>CAREERS</Header>
                <List.Item>Careers Home</List.Item>
                <List.Item>Opportunities</List.Item>
                <List.Item>Apply</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column className='ui column'>
              <List>
                <Header size='medium'>BK CARES</Header>
                <List.Item>Nutrition Explorer</List.Item>
                <List.Item>Download Allergens</List.Item>
                <List.Item>Allergens View in Browser</List.Item>
                <List.Item>Privacy Policy</List.Item>
                <List.Item>Do Not Sell My Personal</List.Item>
                <List.Item>Information</List.Item>
                <List.Item>Responsibility</List.Item>
                <List.Item>BK McLAMORE Foundation</List.Item>
                <List.Item>Diversity</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <hr/>

        <Grid container columns='1'>
          <Grid.Column>
            <Menu borderless>
              <Container fluid className='footer-color'>
                <Menu.Item className='bottom-text' id='bk-bottom-header'><Header size='medium'>BURGER KING</Header></Menu.Item>
                <Menu.Item fitted position='right'><Icon name='instagram'/></Menu.Item>
                <Menu.Item fitted><Icon name='facebook'/></Menu.Item>
                <Menu.Item fitted><Icon name='youtube'/></Menu.Item>
                <Menu.Item fitted><Icon name='twitter'/></Menu.Item>
              </Container>
            </Menu>

            <Item className='bottom-text'>Policies | Terms of Service | Accessibility | Contact Us</Item>
            <Item>TM & Copyright 2021 Burger King Corporation. All Rights Reserved.</Item>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
