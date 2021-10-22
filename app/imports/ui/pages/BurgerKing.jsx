import React from 'react';
import Section1 from '../components/Section1';
import Phone from '../components/Phone';
import Section2 from '../components/Section2';
import BKFooter from '../components/BKFooter';

export default class BurgerKing extends React.Component {

  render() {
    return (
      <div>
        <Section1/>
        <Phone/>
        <Section2/>
        <BKFooter/>
      </div>
    );
  }
}
