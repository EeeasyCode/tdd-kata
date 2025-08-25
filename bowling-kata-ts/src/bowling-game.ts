export class BowlingGame {
  private scoreBoard: number[] = [];

  roll(pins: number) {
    this.scoreBoard.push(pins);
  }

  score() {
    let totalScore = 0;

    for (let i = 1; i < 21; i += 2) {
      if (this.scoreBoard[i] + this.scoreBoard[i - 1] == 10) {
        totalScore += 10 + this.scoreBoard[i + 1];
        continue;
      }

      totalScore += this.scoreBoard[i] + this.scoreBoard[i - 1];
    }

    return totalScore;
  }
}
