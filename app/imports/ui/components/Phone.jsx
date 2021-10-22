import React from 'react';
import { Image } from 'semantic-ui-react';

export default class Phone extends React.Component {
  render() {
    return (
      <div className='section-1-2-between'>
        <Image className='phone' src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/57382e9feb53d08237fa988a570efdff1602d6ff-912x1267.png?w=1440&q=40&fit=max&auto=format'/>
      </div>
    );
  }
}
