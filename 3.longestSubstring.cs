public class Solution
{
    public int LengthOfLongestSubstring(string s)
    {
        if (string.IsNullOrEmpty(s))
            return 0;
        var subset = new List<char>();
        var result = 0;
        for (var i = 0; i < s.Length; i++)
        {
            if (subset.Contains(s[i]))
            {
                result = Math.Max(result, subset.Count);
                // need to remove all items at this duplicated point
                var index = subset.IndexOf(s[i]);
                subset.RemoveRange(0, index + 1);
            }
            else
            {
                result++;
            }
            subset.Add(s[i]);
        }
        return result;
    }
}