class Dupa2{
    constructor(){

    }
    static printDupeczke(){
        console.log(Dupa2.dupaProperty);
    }
}

Dupa2.dupaProperty="Dupeczka krągła";

module.exports.Dupa1 = Dupa2;
