// JS
import React from 'react';
import ReactDom from 'react-dom';
import Bootstrap from 'bootstrap';
import {bind} from './modules/data';
import Month from  './components/month';

// CSS
import 'bootstrap/css/bootstrap.css!';
import '../../css/styles.css!';

class Calender extends React.Component{

    constructor() {

        // WTF is this?
		super();
		
        // Set initial state.
		this.state = {data: {weeks:[], month:{}}, index: 0};

		// Bind instance of nav function to persist state.
		this.navigate = this.navigate.bind(this);
    }

    componentDidMount() {
		
		// Onload bind current month
		var data = bind(0);

        // Bind to state.
		this.setState({data: data});    
	}

	navigate(i){

		  // Configure direction.
	      var input = this.state.index + i;

	      // Change calender month.
	      var data = bind(input);

	      // Update index state.
	      this.setState({data: data, index: input});
	}

	render(){
		return (<Month data={this.state.data} navigate={this.navigate} />)
	}
}

ReactDom.render(<Calender />, document.getElementById('app'))