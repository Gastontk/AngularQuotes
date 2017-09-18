import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Quote:[{_id:'', text:'', author:'', upVotes:''}];
  quotes:[{}] = [
  {_id:0,text:'first quote',author: 'Gaston', upVotes:-9},
  {_id:1,text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae odio neque. Morbi sit amet urna eu tellus tincidunt malesuada. Proin sem orci, gravida eget pretium sed, faucibus ac eros. Suspendisse quis lacus sed elit elementum tincidunt et non justo. Donec fringilla dolor eu eros bibendum fringilla. Vestibulum volutpat vestibulum erat, quis maximus magna auctor a. Aliquam et tortor et tellus vulputate faucibus in ut lacus. Cras quis egestas erat.',author: 'Latin Dude', upVotes:-10},
  {_id:2,text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae odio neque. Morbi sit amet urna eu tellus tincidunt malesuada. Proin sem orci, gravida eget pretium sed, faucibus ac eros. Suspendisse quis lacus sed elit elementum tincidunt et non justo. Donec fringilla dolor eu eros bibendum fringilla. Vestibulum volutpat vestibulum erat, quis maximus magna auctor a. Aliquam et tortor et tellus vulputate faucibus in ut lacus. Cras quis egestas erat.',author: 'Latin Dude', upVotes:9},
  {_id:3,text:'first quote',author: 'Yvette', upVotes:10}]


   btnPressParent(x){
   	 console.log('In app.comp button press', x);
   	 x.upvotes ++;
   }

   //testing
   // testClickApp(){
   // 	console.log('In testClick App. You did it.')
   // }
   btnPressDown(x){
   	console.log('IN btnPressDown- parent(app) component.')
   }
}
