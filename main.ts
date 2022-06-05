namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const goomba = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        ruby.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goomba, function (sprite, otherSprite) {
    enemy1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    otherSprite.destroy()
    enemy1.follow(ruby)
    animation.runImageAnimation(
    enemy1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . f e f . . . . . . . 
        . . . . . e 1 f 1 e . . . . . . 
        . . . . e e 4 e 4 e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . e e f 1 f f f f f e e . . . 
        . e e f e e e e e e e f e e . . 
        . e e e e e e e e e e e e e . . 
        . . . . . e . . . e . . . . . . 
        . . . . e e . . . e e . . . . . 
        . . . e e e . . . e e e . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . f e f . . . . . . . 
        . . . . . e 1 f 1 e . . . . . . 
        . . . . e e 4 e 4 e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . e e f 1 f f f f f e e . . . 
        . e e f e e e e e e e f e e . . 
        . e e e e e e e e e e e e e . . 
        . . . . . e . . . e . . . . . . 
        . . . . e e . . . e e . . . . . 
        . . . e e e . . . e e e . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    if (ruby.y < otherSprite.y) {
        info.changeLifeBy(-1)
        otherSprite.destroy()
    } else {
        otherSprite.destroy()
        info.changeScoreBy(1)
        music.powerUp.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let enemy1: Sprite = null
let goomba: Sprite = null
let Coin1: Sprite = null
let ruby: Sprite = null
scene.setBackgroundColor(9)
ruby = sprites.create(assets.image`ruby`, SpriteKind.Player)
controller.moveSprite(ruby, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
ruby.ay = 350
scene.cameraFollowSprite(ruby)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    Coin1 = sprites.create(img`
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    Coin1,
    [img`
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 4 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        `,img`
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        `,img`
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(Coin1, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    goomba = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . f e e e f . . . . . 
        . . . . . e 1 f f f 1 e . . . . 
        . . . . e e 4 e e e 4 e e . . . 
        . . . e e e e e e e e e e e . . 
        . . e e f 1 f f f f f f f e e . 
        . . e f e e e e e e e e e f e . 
        . . . . . e . . . . e . . . . . 
        . . . . e e . . . . e e . . . . 
        . . . e e e . . . . e e e . . . 
        `, SpriteKind.goomba)
    tiles.placeOnTile(goomba, value)
}
info.setScore(0)
info.setLife(3)
game.onUpdate(function () {
    ruby.setImage(assets.image`ruby`)
    if (ruby.x % 2 == 0) {
        ruby.setImage(assets.image`ruby`)
    } else if (ruby.vx > 0) {
        ruby.image.flipX()
    }
})
