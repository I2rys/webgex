//Dependencies
const Axios = require("axios")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <link> <output> <regex>")
    process.exit()
}

if(!Self_Args[1]){
    console.log("Invalid output.")
    process.exit()
}

if(!Self_Args[2]){
    console.log("Invalid regex.")
    process.exit()
}

void async function Main(){
    var response = await Axios({
        method: "GET",
        url: Self_Args[0]
    })

    response = response.data

    console.log(`Saving the results to ${Self_Args[1]}`)
    Fs.writeFileSync(Self_Args[1], response.match(new RegExp(Self_Args[2], "g")).join("\n"), "utf8")
    console.log(`Results has been saved to ${Self_Args[1]}`)
}()