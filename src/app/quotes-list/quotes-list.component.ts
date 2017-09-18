//Stable but doesn't handle multiple button presses smoothly (continues method already called leading to weird blinking.)


import { Component, OnInit, Input, Output, EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
	orderChange?: boolean = false;
	message:string = '';
	messageReady?:boolean=false;
	noQuoteMessage = '';
	noQuote?:boolean=false;
	InternalCount?:boolean=false;

	end:boolean=false;
	alertRunning?:boolean=false;
	breakCount:number;

	newQuote: any;
	myObject:any;

	@Input() quotes:[{}]
	@Output() aTaskEventEmitterB = new EventEmitter();
	@Output() downvoteToQuotes = new EventEmitter();
	@Output() deleteToQuotes = new EventEmitter();

  constructor() { 
  	  	let breakCount = 0;

  }


  ngOnInit() {
  }

//Upvote
  btnPress($event,x){
  	this.orderChange =  true;
  	this.alertChange('Quote has been UPVOTED. Order of quotes may have changed.', this)
  	this.aTaskEventEmitterB.emit(x);
  }


//Downvote
  btnPressDown($event, x){
  	this.alertChange('Quote has been DOWNVOTED. Order of quotes may have changed.', this)
  	this.downvoteToQuotes.emit(x);
  }



//Delete
  btnPressDelete($event,x){
  	// this.noQuoteMessage ='testing';
  	console.log('in btnPressDelete');
  	// var that =  this;
  	if(this.quotes.length == 1){
		this.noQuoteMessage= 'Please add a quote.'
		this.alertChange(this.noQuoteMessage, this);




  	}else{
  		this.alertChange('Message Deleted', this);
  	}


  	this.deleteToQuotes.emit(x);
  }

  //helper functions
  alertChange(message, thatThis){
  		thatThis.count =0;

	  	console.log('thatThis is', this.breakCount);
	  	var interval2;
	  	this.alertRunning = true;
	   	thatThis.count = 0;
	  	this.message = message
	  	console.log('messageReady:', this.messageReady)
	  	// this.messageReady = true;
	  	var thisThis = this;
	  	var that =  thatThis;
	  	this.messageReady = true;
			// if(interval2){
			// 	console.log('already running!!');
			// }
		if(this.breakCount > 0) {console.log('afsdasfdsaf')}
		interval2=  setInterval(function(count){
				// this.breakCount++;
				thatThis.count++;

					that.messageReady = !that.messageReady;
					
					if(that.count == 7){
						that.count = 0;
						that.messageReady = false;
						console.log('Clearing');
						// this.breakCount--;
						clearInterval(interval2);
						// interval2 = null;
						this.alertRunning = false;
						// this.internalCount = 0
					}
			}, 500)
			











  }

  //testing

  //end testing


}
