import React from 'react';

export default class Day extends React.Component {

  render() {

    var title;
   
    if(this.props.data.isMonthStart){
      title = (<span className="label label-default">{this.props.data.titleFull}</span>);
    } else {
      title = (<span>{this.props.data.titleSnip}</span>);
    }

    return (
      <td className="day">
        <div className="day-container">
            <div className="day-header">
              <div className="day-header-section day-header-title">
                  <span className="day-header-date">{title}</span>
              </div>
            </div>
            <div className="event-container">
            </div>
        </div>
      </td>
      );
   }
};