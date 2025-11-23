// function fibonacci(n):number{

//     let prev : number= 0;
//     let curr : number = 1 ;
//     let next : number | null = null

//     console.log(prev);
//     console.log(curr);

//     for(let i=0;i < n ; i++){
//         let next = prev + curr;

//         prev = curr;
//         curr = next

//         console.log(next);
//     }
// }



function fibonacci(n: number): number[] {
    const sequence: number[] = [];
    let prev: number = 0;
    let curr: number = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(prev);
        const next: number = prev + curr;
        prev = curr;
        curr = next;
    }

    return sequence;
}

console.log(fibonacci(10));
