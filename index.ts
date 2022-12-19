import { interval, fromEvent , auditTime , debounceTime, tap } from 'rxjs';

const searchInputElement = document.getElementById('search-input');
//Emit event on every 'keyup'
const searchKeyUpObservable = fromEvent(searchInputElement, 'keyup')

searchKeyUpObservable.pipe(
    //Emit latest events every 0.5sec, when the user starts typing
    auditTime(500),

    //search for typeahead suggestions
    tap(event => console.log(" Searching for : "+ event.target.value))
).subscribe();                    

