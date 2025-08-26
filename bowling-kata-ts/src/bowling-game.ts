export class BowlingGame {
  private scoreBoard: number[] = [];

  roll(pins: number) {
    this.scoreBoard.push(pins);
  }

  score() {
    let totalScore = 0;

    for (let i = 0; i < 20; i++) {
      if (this.scoreBoard[i] == 10) {
        totalScore += 10 + this.scoreBoard[i] + this.scoreBoard[i + 1];
      }
    }

    for (let i = 1; i < this.scoreBoard.length; i += 2) {
      if (this.scoreBoard[i - 1] == 10) continue;

      if (this.scoreBoard[i] + this.scoreBoard[i - 1] == 10) {
        totalScore += 10 + this.scoreBoard[i + 1];
        continue;
      }

      totalScore += this.scoreBoard[i] + this.scoreBoard[i - 1];
    }

    return totalScore;
  }
}
