function fibonscci(n){

    let prev = 0;
    let curr = 1;

    for(let i = 0; i < n ; i++){
        let next = prev + curr;
        prev = curr;
        curr = next;

        console.log(next);
    }
}

fibonscci(10)

    