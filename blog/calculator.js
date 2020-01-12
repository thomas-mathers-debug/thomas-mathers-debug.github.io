var currentVariable = []
var showVariable = ""
var tempVariable = []



//x = [1, "+" , 1]
//console.log (eval(x.join("")))
//use when equal button is run




function showScreenAnswer(letter) {  //takes the letter and puts it on the screen only if it is a number

    showVariable = showVariable + letter
    document.getElementById("answer").value = showVariable
    


}



function showAnswer(x){
    var lastVar
    if (typeof x === "number" || x == '.'){ // if number
        document.getElementById("answer").value = x
        showScreenAnswer(x)
        tempVariable.push(x)
    }


    

    else{ // if letter
        //could check if the last thing is also not a letter then pop it maybe do a while loop?
        showVariable =""
        Array.prototype.push.apply(currentVariable, tempVariable)

        lastVar = currentVariable.slice(-1)[0]
        if (typeof lastVar !== "number" && typeof lastVar !== "undefined" && x != '.'){
            currentVariable.pop()
        
    
    
        }



        console.log(lastVar)



        tempVariable = []
        tempVariable.push(x)


        // if (typeof lastVar !== "number" && typeof lastVar !== "undefined"){
        //     console.log("popping" + lastVar)
        //     currentVariable.pop()
        //     tempVariable.pop()
        //     console.log("after pop " + currentVariable)
    

        // }
    }
    
    //console.log(currentVariable.slice(-1)[0]) //finds the last thing in array
    console.log("this is our temp value " + tempVariable)
    console.log("this is our screen value " + showVariable)
    console.log("this is our total value " + currentVariable)
    
    
    return
    //console.log(storeVariable)
    //store this value in array
}

function equals(){
    console.log("this is our temp value " + tempVariable)
    console.log("this is our screen value " + showVariable)
    console.log("this is our total value " + currentVariable)
    Array.prototype.push.apply(currentVariable, tempVariable);


    try {
        answer = eval(currentVariable.join(""))
      }
      catch(err) {
        errPress()
      }

    if (typeof answer == "number"){
        document.getElementById("answer").value = answer
    }
    resetCalc()
    
    return
    
    

}


function errPress(){

    document.getElementById("answer").value = "NAN"
    resetCalc()
    return


}

function acPress(){

    document.getElementById("answer").value = null
    resetCalc()

    console.log("this is our temp value " + tempVariable)
    console.log("this is our screen value " + showVariable)
    console.log("this is our total value " + currentVariable)

    return


}


function cePress(){
    tempVariable =[]
    showVariable = ""
    document.getElementById("answer").value = null


    return
}

function resetCalc(){
    showVariable =""
    currentVariable = []
    tempVariable = []

    return

}




