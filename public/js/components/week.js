import React from 'react';
import Day from './day';

export default class Week extends React.Component {

    render () {

        var days = this.props.data.days.map(function(item, i) {
            return (
              <Day key={i} data={item} />
            );
        });

        return (
          <tr className="days-of-week">
             {days}
          </tr>
      );
    }
}