let Ulisses: Sprite = null
controller.moveSprite(Ulisses, 100, 5)
Ulisses = sprites.create(assets.image`Ulisses`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level0`)
scene.cameraFollowSprite(Ulisses)
controller.moveSprite(Ulisses)
