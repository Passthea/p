// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`32001000000000000000000000000000000005050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300050500000000000004040e0d000000000000000000000000000000000000000000000000000000000d00000000000000010101010000000000020202020200000000000d0000000000000000000000000000000008090000000000000e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010003050500000000000000000000000000000000000000000000000000000d0000000000000000000000000000000000000000010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000d0e00040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202000000000000000d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040404040e0000000000000000060606000000000000000000000000000000000000000000000000000000000000000000000202020202040404000000000006070606060c00000000000000000000000000000000000000000000000000000000000000000000040a0a0a04000000000606070707060600000000000000000000000000000000000000000000000000000000000000000000040a0a0a04000000000607070707070700000000000000000000000000000000000000000000000000000000000000000000040a0a0a0400000006060707070707070b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`, img`
..................................................
..............22..................................
..................................................
.........2222.....22222...........................
..................................................
2222..............................................
.....222..........................................
..................................................
.......................222222.....................
..................................................
............................................222...
...............................22222........22222.
...........................................2222222
...........................................2222222
..........................................22222222
..........................................22222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.saplingPine,sprites.castle.rock1,sprites.swamp.swampTile3,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.builtin.crowd6,sprites.builtin.crowd3,sprites.builtin.brick,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
