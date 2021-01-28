// Auto Clickr
const autoClicker = setInterval(Game.ClickCookie, .00000000000000000000001)

// No Price Increase
Game.priceIncrease = 1;

// Auto Click Golden Cookies, But Not Wrath Cookies
setInterval(function () {
    Game.shimmers.forEach(function (shimmer) {
        if (shimmer.type == "golden" && shimmer.wrath == 0) {
            shimmer.pop()
        }
    })
}, 500);

// Instant Kill Wrinklers
const noWrinkler = setInterval(Game.CollectWrinklers, 500);

