import React from 'react';
import Week from './week';

export default class Month extends React.Component {

    render () {

        var weeks = this.props.data.weeks.map(function(item, i) {
            return (
              <Week key={i} data={item} />
            );
        });

        var navigate = function(i){
          return this.props.navigate(i);
        };

        return (
          <div className="calendar-wrapper">

               <div className="calendar-header">
                  
                  <div className="row calendar-header-toolbar">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 align-left">
                        <div className="sub-heading">
                            <span>{this.props.data.title}</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 align-center">
                        <div className="brand heading">
                            Calentics
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 align-right">
                        <div className="btn-group">
                            <button type="button" className="btn btn-default" onClick={navigate.bind(this, -1)}>
                                <i className="glyphicon glyphicon-chevron-left"></i>
                            </button>
                            <button type="button" className="btn btn-default" onClick={navigate.bind(this, 1)}>
                                <i className="glyphicon glyphicon-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
              </div>
              <div className="calendar-content">
                <table className="calendar-table">
                    <thead>
                      <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weeks}
                    </tbody>
                </table>
              </div> 
          </div>
          
      );
    }
};