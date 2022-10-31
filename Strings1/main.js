function removeBlanks(str) {
    var rtnStr = []
    for(var i = 0; i<str.length;i++){
        if(str[i] != " ") {
            rtnStr[rtnStr.length] = str[i]
        }
    }
    console.log(rtnStr.join(""))
    return rtnStr.join("")
}

removeBlanks(" Pl ayTha tF u nkyM usi c ") //=> "PlayThatFunkyMusic"
removeBlanks("I can not BELIEVE it's not BUTTER") //=> "IcannotBELIEVEit'snotBUTTER"

function getDigits(str) {
    var rtnStr = []
    for(var i = 0; i<str.length;i++){
        if(!isNaN(str[i])) {
            rtnStr += str[i]
        }
    }
    console.log(Number.parseInt(rtnStr))
    return Number.parseInt(rtnStr)
}

var a = getDigits("abc8c0d1ngd0j0!8") //=> 801008
getDigits("0s1a3y5w7h9a2t4?6!8?0") //=> 1357924680

function acronym(str = "") {
    var wordList = str.split(" ")
    var rtnStr = ""
    wordList.forEach(word => {
        if(word != '') rtnStr += word[0]
    });
    console.log(rtnStr.toUpperCase())
    return rtnStr.toUpperCase()
}

acronym(" there's no free lunch - gotta pay yer way. ") //=> "TNFL-GPYW". 
acronym("Live from New York, it's Saturday Night!")//=> "LFNYISN".

function countNonSpaces(str) {
    var cnt = 0
    for(var i = 0; i < str.length; i++) {
        if(str[i] != ' ') cnt++
    }

    console.log(cnt)
    return cnt
}

countNonSpaces("Honey pie, you are driving me crazy") //=> 29
countNonSpaces("Hello world !") //=> 11

function removeShorterStrings(arr,len) {
    var nArr = []
    var str = ""
    arr.forEach((item) => {
        if(item.length >= len) nArr.push(item)
    })
    console.log(nArr)
    return nArr
}

removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) 
//=> ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) 
//=> ['There', 'bug', 'the', 'system']