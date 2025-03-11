// priority: 5000

onEvent("block.registry", event => {
    for (let i = 0; i <= 15; i++) {
        event.create(`invisiblelightsjs:invisible_light_${i}`)
            .notSolid()
            .unbreakable()
            .waterlogged()
            .noCollission()
            .defaultTranslucent()
            .material("air")
            .fullBlock(false)
            .transparent(true)
            .lightLevel(i / 15)
            .box(0, 0, 0, 0, 0, 0, true)
            .item(item => item.modelJson({
                "parent": "minecraft:item/generated",
                "textures": {
                    "layer0": `invisiblelightsjs:item/light_${i}`
                }
            }))
            .displayName(`Invisible Light (Level ${i})`)
    }
})