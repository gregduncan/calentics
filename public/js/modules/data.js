import moment from 'moment';

var bind = function(index){

	// Get month specified by relation to current month (index).
	var month = moment().add(index, 'M'),

	// Get start date of specified month.
	startDate = month.clone().startOf('month'),

	// Get finish date of specified month.
	finishDate = month.clone().endOf('month'),

	// Get day number in week of start and finish dates.
	startDay = startDate.clone().day(),
	finishDay = finishDate.clone().day(),

	// Calculate the first day of the week that the first date is in.
	calenderStart = startDate.clone().subtract((startDay - 1), 'd'),

	// Calculate the last day of the week that the last date is in.
	calenderFinish = finishDate.clone().add((7 - finishDay) , 'd'),

	// Props.
	w = 1,
	weeks = [],
	days = [],
	mStart = calenderStart.clone().unix(),
	mFinish = calenderFinish.clone().unix(),
	increment = 86400;

	// Loop until we've hit max unix date.          
	for(var i = 0; i < Number.MAX_VALUE; i++){

		 // Create day object incremented.
		var day = calenderStart.clone().add(i, 'd');

		// Bind details.
		day.isMonthStart = day.date() === 1;
		day.titleFull = day.format("Do MMM YYYY"); 
		day.titleSnip = day.format("D");

		// Add to array.
		days.push(day);

		// If number of days is = 7.
		if(w === 7){ 

		  // Create week.
		  var week = {
		      days: days
		  };
		  
		  // Add week to array.
		  weeks.push(week);
		  
		  // Reset day array.
		  days = [];

		  // Reset week count.
		  w = 0;
		}

		// Increment week.
		w++;

		// Increment date.
		var x = mStart + (increment * i);

		// If we've exceed max date break out of loop.
		if(x >= mFinish){
		  break;
		}
	}

	// Create prop obj.
	return {
		weeks: weeks,
		title: month.format("MMMM YYYY"),
	};
};

export { bind };