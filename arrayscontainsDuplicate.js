var containsDuplicate = function(nums) {
    const map = new Map ();
    for( i=0;i<nums.length;i++)
    {
       let duplicate = nums[i];
        if(map.has(duplicate))
        {
            return true;
        }
        
        map.set(duplicate, true);
    }
    return false;
}; 
