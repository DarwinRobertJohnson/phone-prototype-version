
specification={}
var phoneObject

function call(){
    console.log('call successfully done!');
}

function message(){
    console.log("message successfully sent!");
}

function phone(){
    this.call=call
    this.message=message
}

function singleSim(){
    this.simType="singleSim"
}
    
function android(){
    this.osType="android"
}

function IOS(){
    this.osType="IOS"
}

function dualSim(){
    this.simType="dualSim"
}

function basicPhone(simType){
    if(simType==="singleSim")
        this.simType=new singleSim();
    else if(simType==="dualSim")
        this.simType=new dualSim();
    this.phone=new phone();
}

function smartPhone(osType){
    if(osType==="android")
        this.osType=new android();
    else if(osType==="IOS")
        this.osType=new IOS();
    this.phone=new phone();
}


function setVisible(className,visible=true){
    let state=(visible)?"visible":"hidden";
    $(`.${className}`).css({
        "visibility":state
    })
}

/*
    Event handling
*/
$("#phone-type input").click((event)=>{
   specification["type"]=$("#phone-type input:checked").val();
   if(specification["type"]=="smart"){
    setVisible("smart")
    setVisible("basic",false)
    }else{
        setVisible("basic")
        setVisible("smart",false);
    }



});

$(".secondary input").click((event)=>{
    specification["spec"]=$(`.${specification["type"]} input:checked`).val();
    setPhoneObject();

    setVisible("operation")
});


$(".operation input").click((event)=>
{
    let operation=$(".operation input:checked").val();
    if(operation=="call")
        phoneObject.phone.call()
    if(operation=="message")
        phoneObject.phone.message()
}); 

function setPhoneObject(){
    
    if(specification["type"]=="smart")
         phoneObject=new smartPhone(specification["spec"])
    else if(specification["type"]=="basic")
         phoneObject=new basicPhone(specification["spec"])
    console.log(phoneObject)
}






