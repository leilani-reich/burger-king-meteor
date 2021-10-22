import React from 'react';
import { Icon, Label, List } from 'semantic-ui-react';

export default class Section2 extends React.Component {
  render() {
    return (
      <div className='section2'>
        <List className='ui list'>
          <List.Item id='save-header'>Save $$$</List.Item>
          <List.Item>With offers on</List.Item>
          <List.Item>demand</List.Item>
          <Label color='black'>
            Download on the App Store <Icon name='apple'/>
          </Label>

          <Label color='black'>
            GET IT ON Google play <Icon name='google play'/>
          </Label>

          <List.Item id='paragraph'>
            <p>Apple and the Apple logo are trademarks of Apple Inc., registered in the
              U.S. and other countries. App Store is a service mark of Apple Inc. Google
              Play is a trademark of Google Inc. Terms apply.</p>
          </List.Item>
        </List>

      </div>
    );
  }
}
