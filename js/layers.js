addLayer("g", {
    name: "gronk phonk", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "gp", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: ["g", "m"],
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "gronk phonk", // Name of prestige currency
    baseResource: "rizz", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "g: reset for gronk phonk", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "labubu",
            description: "1.2x rizz",
            cost: new Decimal(2),
        },
        12: {
            title: "sabubu",
            description: "1.3x rizz",
            cost: new Decimal(3),
        },
    },
})
addLayer("m", {
    name: "mewing grind", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mg", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: -1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#5fd4e4",
    requires: new Decimal(30), // Can be a function that takes requirement increases into account
    resource: "mewing grind", // Name of prestige currency
    baseResource: "rizz", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "m: reset for mewing grind", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        return hasUpgrade("g", 12) 
    },
    upgrades: {
        11: {
            title: "mew",
            description: "1.6x rizz",
            cost: new Decimal(20),
        },
        12: {
            title: "mewing grind",
            description: "1.7x rizz",
            cost: new Decimal(40),
        },
    },
    doReset(resettingLayer) {
        let keep = [];
         if (resettingLayer == "m") {
                 layerDataReset("gp", ["upgrades", "milestones"]) 
        }
    },
})
