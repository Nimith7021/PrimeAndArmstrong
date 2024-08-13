function IsPrime(){
    let p = document.getElementById('ResultPrime');
    let prime = true;
    let num = parseInt(p1.n1.value);
    if(num==0 || num==1)
        {
            prime = false;
        }
    else
    {
        for(let i = 2 ; i<Math.sqrt(num) ;i++)
        {
            if(num%i==0)
            {
                
                prime = false;
            }
        }
    }

    if(prime==true){
        p.innerHTML = num + " is a prime number";
    }else{
        p.innerHTML = num + " is not a prime number";
    }

}

function IsArmstrong(){
    let p = document.getElementById("ResultArmstrong");
    let armstrong = true;
    let sum = 0;
    let num = parseInt(p1.n2.value);
    let t = num;
    let count = String(num).length;
    while(t!=0){
        let temp = t % 10;
        sum+=Math.pow(temp,count);
        t = Math.trunc(t/10);
    }
    if(num==sum){
        p.innerHTML = num + " is an Armstrong number"
    }else{
        p.innerHTML = num + " is not an Armstrong number"
    }
}