import  { log } from './log';
// import $ from 'jquery';

let a = "Salut les gens";

log(a);

console.log('salut');

document.getElementById('button').addEventListener('click', () => {
  import('jquery').then($ => {
    
    $('body').css('backgroundColor', '#FF0000');
    debugger;

  })
})



