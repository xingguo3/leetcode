class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l = len(nums)
        # 1. strightforward solution, go through array twice
        # time complexity: O(n^2)
        #for m in range(l):
            #for n in range(m+1, l):
                #if nums[m] + nums[n] == target:
               #     return [m, n]
               # n = n + 1
         #   m = m + 1
        
        # 2. using hash table, search time complexity: O(1)
        # overall time complexify: O(n)
        obj = {}
        for i in range(len(nums)):
            rest = target - nums[i]
            if rest in obj:
                return [obj[rest], i]
            else:
                obj[nums[i]] = i
            
        