

var val="";
var queue=["phone"];

const phone={
    call:function(){
        console.log("Hence called");
    },
    message:function(){
        console.log("Hence messaged");
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

/*
    Literal Declaration Over
*/

function setHidden(val){

    (val==="smart")?val="basic":val="smart";

    $(`.${val}-options`).css({
        visibility: "hidden"
    });
}

function setVisible(val){
    $(`.${val}-options`).css({
        visibility: "visible"
    });
    setHidden(val);

}

function addToQueue(val){
    queue.unshift(val);    
}

function constructObject(){
    console.log(queue);
    for(let i=0;i<queue.length-1;i++){
        Object.setPrototypeOf(dict[queue[i]],dict[queue[i+1]]);
    }
    return dict[queue[0]];
}

/*
    Helper Functions Declaration Over
*/


$("#phone-type input").click((event)=>{
    queue.length=0;
    queue.push("phone");
    val=$("input:checked").val();
    setVisible(val);
    addToQueue(val);            //adds basic or smart to queue

    $(".operation").css({
        visibility: "hidden"
    });

    $(`.${val}-options`).click((event)=>{

        addToQueue($(`.${val}-options input:checked`).val());       //adds android or IOS to queue
        $(".operation").css({
            visibility: "visible"
        });

        $(".operation").click((event)=>{
            let object=constructObject();                           //constructs the necessary object
            let opt=$(".operation input:checked").val();
            (opt=="call")? object.call():object.message();
        });

    });

});


