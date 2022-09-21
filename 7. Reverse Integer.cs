public class Solution
{
    public int Reverse(int x)
    {
        var lessThan0 = x < 0;
        var y = lessThan0 ?
              x.ToString().Substring(1).ToCharArray()
            : x.ToString().ToCharArray();
        Array.Reverse(y);
        var z = $"{(lessThan0 ? "-" : "")}{new String(y)}";
        var result = 0;
        Int32.TryParse(z, out result);
        return result;
    }
}