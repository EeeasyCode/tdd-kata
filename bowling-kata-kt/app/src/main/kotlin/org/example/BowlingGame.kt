package org.example

class BowlingGame {
    private var score = 0;

    fun score(): Int {
        return score;
    }

    fun roll(pin: Int) {
        score += pin;
    }
}
