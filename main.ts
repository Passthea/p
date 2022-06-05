namespace SpriteKind {
    export const flower = SpriteKind.create()
    export const gardener = SpriteKind.create()
}
let mySprite = sprites.create(assets.image`tamaagochi`, SpriteKind.Player)
mySprite.setPosition(60, 104)
controller.moveSprite(mySprite, 100, 100)
info.setLife(3)
console.log("hello")
