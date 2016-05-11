import React from 'react';
import ReactDom from 'react-dom';
import Bootstrap from 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import '../../css/styles.css!';

class Calentics extends React.Component{

	render(){
		return <p>Welcome to Calentics online.</p>
	}
}

ReactDom.render(<Calentics />, document.getElementById('app'))