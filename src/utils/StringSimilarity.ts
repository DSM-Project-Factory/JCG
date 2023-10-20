export class StringSimilarity {
  private static getLevenshteinDistance(x: string, y: string): number {
    const m = x.length
    const n = y.length

    const arr: number[][] = new Array<Array<number>>(m + 1).fill(new Array<number>(n + 1).fill(0))

    for (let i = 1; i <= m; i++) arr[i][0] = i
    for (let i = 1; i <= n; i++) arr[0][i] = i

    let cost;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        cost = x[i - 1] == y[j - 1] ? 0 : 1
        arr[i][j] = Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1] + cost)
      }
    }

    return arr[m][n]
  }


  public static findSimilarity(x?: string, y?: string): number {
    if (x == null && y == null) return 1
    if (x == null || y == null) return 0
    x = x.toLowerCase()
    y = y.toLowerCase()

    const maxLength = Math.max(x.length, y.length)
    return maxLength > 0 ? (maxLength - this.getLevenshteinDistance(x, y)) / maxLength : 1
  }
}