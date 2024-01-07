import $ from 'jquery';
import _ from 'lodash';

// Your body code (button, counter, etc.)
// Example:
$('#app').append('<button>Click Me</button>');

let count = 0;
$('button').on('click', () => {
    count++;
    console.log('Button clicked:', count);
});
