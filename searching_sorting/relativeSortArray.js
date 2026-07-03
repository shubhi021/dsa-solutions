var relativeSortArray = function(arr1, arr2) {
    let freq ={};

    for(let num of arr1)
    {
        freq[num] = (freq[num]||0)+1;
    }

    let result = [];

    for(let num of arr2)
    {
        while(freq[num]>0)
        {
            result.push(num);
            freq[num]--;
        }
    }

    let remaining = [];
    for(let key in freq)
    {
        while(freq[key]>0)
        {
            remaining.push(Number(key));
            freq[key]--;
        }
    }
    return result.concat(remaining);
};
