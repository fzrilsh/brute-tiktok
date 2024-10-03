const views = require("./tools/views")
const favorites = require("./tools/favorites")

const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')
const rl = readline.createInterface({ input, output })

let getOption = (url) => rl.question('[1] Add Views\n[2] Add Favorites\n[3] Both\n\nWhich mode you like? ', (option) => {
    console.clear()
    switch (option) {
        case '1':
            views(url)
            rl.close();
            break;
        case '2':
            favorites(url)
            rl.close()
            break;
        case '3':
            views(url)
            favorites(url)
            rl.close()
            break;
        default:
            console.log('Unknown option.\n')
            getOption(url)
            break;
    }

})

let getUrl = () => rl.question('Please input valid tiktok video url: ', (url) => {
    console.clear()
    if (!/^(https?:\/\/)?(vt\.tiktok\.com\/[\w]+)(\/)?$/.test(url)) {
        console.log('Invalid Tiktok Url Video.\n')
        return getUrl()
    }
    
    getOption(url)
})

console.clear()
getUrl()