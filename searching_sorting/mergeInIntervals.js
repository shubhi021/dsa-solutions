var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])

    let result= [];
    result.push(intervals[0])
    
    for(let i=1;i<intervals.length;i++)
    {
        let last = result[result.length - 1];
         
        let current = intervals[i];

        if(current[0]<= last[i])
        {
            last[i] = Math.max(last[i],current[i])
        }
        else{
            result.push(current)
        }
    }
    return result;
};
