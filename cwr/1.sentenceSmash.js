/*
Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

let words = ['hello', 'world', 'this', 'is', 'great'];

function smash(words) {
    let a = '';
    words.map((w, i) => {
        if (i === 0) {
            a += `${w}`
        } else {
            a += ` ${w}`
        }
    })

    return a;
};

console.log(smash(words))