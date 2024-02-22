
specification={}
var phoneObject

function call(){
    console.log('call successfully done!');
}

function message(){
    console.log("message successfully sent!");
}


function basicPhone(simType){
    this.simType=simType;
}

function smartPhone(osType){
    this.osType=osType;
}

basicPhone.prototype.call=call;
basicPhone.prototype.message=message;

smartPhone.prototype.call=call;
smartPhone.prototype.message=message;

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
        phoneObject.call()
    if(operation=="message")
        phoneObject.message()
}); 

function setPhoneObject(){
    
    if(specification["type"]=="smart")
         phoneObject=new smartPhone(specification["spec"])
    else if(specification["type"]=="basic")
         phoneObject=new basicPhone(specification["spec"])
}






