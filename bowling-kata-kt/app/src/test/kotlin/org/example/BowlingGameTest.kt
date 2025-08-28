package org.example

import kotlin.test.Test
import kotlin.test.assertEquals

class BowlingGameTest {
    
    @Test
    fun `새로운 게임은 0점을 가져야 한다`() {
        val game = BowlingGame()
        assertEquals(0, game.score())
    }
    
    @Test
    fun `모든 투구가 거터인 경우 0점을 가져야 한다`() {
        val game = BowlingGame()
        
        // 20번의 투구, 모두 0점
        repeat(20) {
            game.roll(0)
        }
        
        assertEquals(0, game.score())
    }

    @Test
    fun `모든 투구가 1점인 경우 20점을 가져야 한다`() {
        val game = BowlingGame()
        repeat(20) {
            game.roll(1)
        }
        assertEquals(20, game.score())
    }
}
