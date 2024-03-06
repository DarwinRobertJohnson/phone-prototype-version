
function phone(name,number=7820317289){
    this.name=name;
    this.number=number;   
}

phone.prototype.Call=(target)=>{
    console.log(`called ${target}`)
}

phone.prototype.message=(target)=>{
    console.log(`message ${target}`)
}

function basicPhone(name,number){
    phone.call(this,name,number)
    this.functionality="basic"
}

basicPhone.prototype=Object.create(phone.prototype)

function smartPhone(name,number){
    phone.call(this,name,number)
    this.functionality="smart"
}
smartPhone.prototype=Object.create(phone.prototype)


function androidPhone(name,number=123456789){
    smartPhone.call(this,name,number);
    this.os="Android"
}

androidPhone.prototype=Object.create(smartPhone.prototype)

function IOSPhone(name,number=123456789){
    smartPhone.call(this,name,number);
    this.os="IOS"
}
IOSPhone.prototype=Object.create(smartPhone.prototype)

function singleSimPhone(name,phoneNumber=123456789){
    basicPhone.call(this,name,phoneNumber);
}


singleSimPhone.prototype=Object.create(basicPhone.prototype)

function dualSimPhone(name,numberOne=123456789,numberTwo=987654321){
    basicPhone.call(this,name,numberOne);
    this.numberTwo=numberTwo
}
dualSimPhone.prototype=Object.create(basicPhone.prototype)


redmi=new dualSimPhone("DarwinDDragon",7603280319);

console.log(redmi);
redmi.Call(123456789)