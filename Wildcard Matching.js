/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
//Metehan Homriş
var isMatch = function isMatch(s, p) {
  let dp = new Array(s.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(p.length + 1).fill(false);
  }
  dp[0][0] = true;

  // Fill the first row for patterns that starts with '*'
  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  // Fill the rest of the table
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  return dp[s.length][p.length];
}
