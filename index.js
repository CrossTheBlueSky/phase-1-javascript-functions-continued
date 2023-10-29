// code your solution here
function saturdayFun(act = "roller-skate"){

    return `This Saturday, I want to ${act}!`

    
}

function mondayWork(act = "go to the office"){
    return `This Monday, I will ${act}.`

}

function wrapAdjective(high = ''){
    const out1 = "You are "
    return function (adj = "special"){
        const out2 = `${high}${adj}${high}!`
        return  out1 + out2
    }

}