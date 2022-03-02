const axios = require('axios')

let time = new Date().getTime()
let count=0
let APIhost ="https://assota.dwhs.tn.edu.tw/scoreSch/ZValidCode.aspx"// "http://150.117.110.118:10150/"
let Data = {
    // "APIkey": "dqKqZv9bCz-pmdy0eAoUBBWfIsew3",
    // "Function": "serverData",
    // "Type": "Statistic",
    // "FormatVersion": 1,
    // "Value": "whes1015",
    // "Addition": {
    //     "type": "DROP_COUNT"
    // }
}
main()
function main() {
    axios
        .post(APIhost, Data)
        .then(res => {
            //console.log(res.data)
           // if (res.data["state"] === "Success") {
                //console.log(res.data)
                count++
                if(new Date().getTime()-time>1000){ //3 ms //393 times
                    time=new Date().getTime()
                    console.log(count)
                    count=0
                }
                main()
            //} else {
             //   main()
                // console.log(new Date().getTime()-Time)
               // console.log(`錯誤: ${res.data["response"]}`)
           // }
        }).catch(err => {
            main()
            console.log(err)
        })
}