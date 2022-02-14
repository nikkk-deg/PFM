
output:
for (let i = 2; i < 10; i++) {
    for (let j = 2; j < (i+1)/2; j++) {
        if (i % j == 0) continue output;
    }
    console.log(i);
}

