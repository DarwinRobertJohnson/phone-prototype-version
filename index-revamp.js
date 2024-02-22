
let value;
let specs=[];
let phoneType=[];
let queue=[specs,phoneType,"phone"];
let phoneTypes={0:"smart",1:"basic"};
let secondary={0:"singleSim",1:"dualSim",2:"android",3:"IOS"};


const phone={
    call:function(){
        return("Hence called");
    },
    message:function(){
        return("Hence messaged");
    }
}

const basic={
    name:"basic",
};

const singleSim={
    name:"singleSim",
};

const dualSim={
    name:"dualSim",
};

const smart={
    name:"smart",
};

const android={
    name:"android",
};

const IOS={
    name:"IOS",
};


const dict={"phone":phone,
            "basic":basic,
            "singleSim":singleSim,
            "dualSim":dualSim,
            "smart":smart,
            "android":android,
            "IOS":IOS
        }

function addToQueue(val,index){
    queue[index].push(val);
}

function clearQueue(index){
    queue[index].length=0;
}

function setVisible(element){
    $(`.${element}`).css({
        visibility: "visible"
    })
}

function setHidden(element){
    $(`.${element}`).css({
        visibility: "hidden"
    })
}

function showOptionsPhoneType(pageContent){
    let optNum=Number($(pageContent).val());
    console.log(queue);
    setVisible(phoneTypes[optNum]);

    (optNum>0)?setHidden(phoneTypes[optNum-1]):setHidden(phoneTypes[optNum+1]);    
}

function handlePhoneType(){
    clearQueue(1);
    value=$("#phone-type input:checked").val();
    addToQueue(phoneTypes[value],1);
    
    showOptionsPhoneType(this);
}

function handleSpecifications(){
    clearQueue(0);
    let value=$(this).val();
    addToQueue(value,0);
    console.log(queue);

    setVisible("operation");
}

function wirePrototype(queue){
    for(let i=0;i<queue.length-1;i++){
        Object.setPrototypeOf(dict[queue[i]],dict[queue[i+1]]);
    }
    return dict[queue[0]];
}

function createObject(){
    return wirePrototype(queue.flat());
}

function handleOperation(){
    let operatorObject=createObject();
    let operation=$(this).val();
    let notification=(operation==="call")?operatorObject.call()+" "+operatorObject.name:operatorObject.message()+" "+operatorObject.name;
    console.log(notification);

    $("#output").text(notification);
}


/*
    event handler attaching area
*/
$("#phone-type input").click(handlePhoneType)
$(".secondary input").click(handleSpecifications)
$(".operation input").click(handleOperation);