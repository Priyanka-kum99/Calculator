let str=""
let tf=document.getElementById("tf")
function fun(s){
    if(s=='='){
        tf.value=eval(str)
        str=""
    }
    else if(s=='c'){
        str=""
        tf.value=""
    }
    else if(s=='b'){
        str=str.slice(0,str.length-1)
        tf.value=str
    }
    else{
        str=str+s
        tf.value=str
    }

}