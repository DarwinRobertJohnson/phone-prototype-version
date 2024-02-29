
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

function basicPhone(){
    this.functionality="basic"
}

basicPhone.prototype=Object.create(phone.prototype)

function smartPhone(){
    this.functionality="smart"
}
smartPhone.prototype=Object.create(phone.prototype)


function androidPhone(name,number=123456789){
    phone.call(this,name,number)
    smartPhone.call(this);
    this.os="Android"
}

androidPhone.prototype=Object.create(smartPhone.prototype)

function IOSPhone(name,number=123456789){
    phone.call(this,name,number)
    smartPhone.call(this);
    this.os="IOS"
}
IOSPhone.prototype=Object.create(smartPhone.prototype)

function singleSimPhone(name,phoneNumber=123456789){
    phone.call(this,name,number)
    basicPhone.call(this);
}


singleSimPhone.prototype=Object.create(basicPhone.prototype)

function dualSimPhone(name,numberOne=123456789,numberTwo=987654321){
    phone.call(this,name,numberOne)
    basicPhone.call(this);
    this.numberTwo=numberTwo
}
dualSimPhone.prototype=Object.create(basicPhone.prototype)


redmi=new androidPhone("DarwinDDragon",7603280319);

console.log(redmi);
redmi.Call(123456789)