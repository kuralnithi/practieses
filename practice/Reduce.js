//find single values using reduce


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7];


const res = arr.reduce((prev, current) => {
  
    if (prev[current] === undefined)
    {
        prev[current] = 1
    }
    else {
        prev[current] +=1    }

    return prev;

}, {})

const ans=[]

const single = () => {
    console.log(res)
    for (data in res) {
        if (res[data] == 1)
        {
        ans.push(data)
            }
    }

}
single();

console.log(ans);
