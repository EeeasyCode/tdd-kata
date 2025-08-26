export class BowlingGame {
  private scoreBoard: number[] = [];

  roll(pins: number) {
    this.scoreBoard.push(pins);
  }

  score() {
    let totalScore = 0;
    let i = 0;

    for (let frame = 0; frame < 10; frame++) {
      // 스트라이크
      if (this.scoreBoard[i] == 10) {
        totalScore += 10 + this.scoreBoard[i + 1] + this.scoreBoard[i + 2];
        i += 1;
        continue;
      }
      // 스페어 투구
      if (this.scoreBoard[i] + this.scoreBoard[i + 1] == 10) {
        totalScore += 10 + this.scoreBoard[i + 2];
        i += 2;
        continue;
      }

      // 일반 투구
      totalScore += this.scoreBoard[i] + this.scoreBoard[i + 1];
      i += 2;
    }

    return totalScore;
  }
}
