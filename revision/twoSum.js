var twoSum = function(nums, target) {
    let map = new Map ();
    for(let i=0;i<nums.length;i++)
    {
        temp = target - nums[i];
        if(map.has(temp))
        {
            return[map.get(temp),i]
        }
        map.set(nums[i],i)
    }
    return [];
};
