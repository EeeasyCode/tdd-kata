export class BowlingGame {
  private scoreBoard: number[] = [];

  roll(pins: number) {
    this.scoreBoard.push(pins);
  }

  score() {
    let totalScore = 0;
    let i = 0;

    for (let frame = 0; frame < 10; frame++) {
      // 10프레임 보너스 투구
      if (frame == 9 && this.scoreBoard[18] == 10) {
        totalScore += this.scoreBoard[19] + this.scoreBoard[20];
      }
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
