//"20번 공을 굴렸는데 다 빗나갔어(0개 쓰러뜨림). 점수는? 0점이어야지!"

import { BowlingGame } from "../src/bowling-game";

describe("Bowling Game", () => {
  it("step 1 - 볼링공을 20번 굴렸는데 전부 빗나간 경우, 점수는 0점이어야 한다.", () => {
    const game = new BowlingGame();

    for (let index = 0; index < 20; index++) {
      game.roll(0);
    }

    const score = game.score();

    expect(score).toBe(0);
  });

  it("step 2 - 볼링공을 20번 굴려서 1개씩만 넘긴 경우, 점수는 20점이어야 한다.", () => {
    const game = new BowlingGame();

    for (let index = 0; index < 20; index++) {
      game.roll(1);
    }

    const score = game.score();

    expect(score).toBe(20);
  });

  it("step 3 - 스페어가 나온 경우, 해당 프레임은 10점 + 다음 첫 투구 점수를 보너스로 받는다.", () => {
    const game = new BowlingGame();

    game.roll(1);
    game.roll(5);
    game.roll(3);
    game.roll(7);
    game.roll(5);
    game.roll(5);

    for (let i = 0; i < 14; i++) {
      game.roll(1);
    }

    const score = game.score();

    expect(score).toBe(46);
  });
});
