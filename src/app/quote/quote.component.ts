import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//required for using with proper form validations
import { NgModel} from '@angular/forms';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // data:any;
  @Input() quotes:[{}]
  //
  @Output() fromQuote = new EventEmitter();
  //




  //testing
  @Output() sendToApp = new EventEmitter()
  //testing




  quote:{} = {_id:'', text:'', author:'', upVotes:0};
  constructor() { }

  ngOnInit() {
  }
  submitForm($event){
    // this.quote._id = 
  	console.log('Form submitted.', this.quote, this.quote)
    this.quotes.push(this.quote)
    this.quote = {_id:'', text:'', author:'', upVotes:0}
  	$event.preventDefault();

  }

  //Remember that $event must be shown to pass in the html of parent component.
  btnPressA(quote){
        // console.log('In btnPressA in quote component', quote);

    quote.upVotes ++;

    // this.orderChange = true;
    // console.log('this.orderChange is', this.orderChange )


  }
  btnPressB(x){
    // console.log('In btnPressBin quote component', x);
    x.upVotes -=1;
  }
  btnPressC(x){
    // console.log('In btnPressC in quote component', x);
    this.quotes.splice(x, 1);
  }



//testing
  testClickQuote(data){
    console.log('in testClickQuote', data);
    // this.fromQuote.emit(data)
  }

}
