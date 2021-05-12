scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile2, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -50
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(10)
    tiles.setTileAt(tiles.getTileLocation(25, 6), assets.tile`transparency16`)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Forest Background`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Hero`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 6))
scene.cameraFollowSprite(mySprite)
let snake = sprites.create(assets.image`snake`, SpriteKind.Enemy)
tiles.placeOnTile(snake, tiles.getTileLocation(2, 6))
snake.vx = 20
snake.setBounceOnWall(true)
info.setLife(3)
game.splash("Press 'A\" to Jump", "left and right to move")
