function staircase(n) {
    // Write your code here
    let line = ``;
    for (let i = 1; i <= n; i++) {
        line +=  ' '.repeat(n-i) + '#'.repeat(i) + '\n'
    }
    console.log(line);
}

staircase(60)
