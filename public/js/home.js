import React from 'react';
import ReactDom from 'react-dom';
import Bootstrap from 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import '../../css/styles.css!';

class Calentics extends React.Component{

	render(){
		return (
            <div>
				<p>Welcome to Calentics online.</p>
				<a href="./c/asdfsf" className="btn btn-default">Load</a>
            </div>

			)
	}
}

ReactDom.render(<Calentics />, document.getElementById('app'))