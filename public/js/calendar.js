import React from 'react';
import ReactDom from 'react-dom';
import Bootstrap from 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import '../../css/styles.css!';

class Calender extends React.Component{

	render(){
		return (
            <div>
				<p>Welcome to your first plan</p>
				<a href="../../" className="btn btn-default">Back</a>
            </div>

			)
	}
}

ReactDom.render(<Calender />, document.getElementById('app'))