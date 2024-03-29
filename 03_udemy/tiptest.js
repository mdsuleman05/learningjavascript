const bill=30

if(bill>=50||bill<=300){
 const tip=bill*0.15;
 const totalValue=bill+tip;
 console.log(`tip is ${tip} and the bill is ${bill} and total value is ${totalValue}`);
}

else if(bill>300){
    const tip=bill*0.2;
 const totalValue=bill+tip;
 console.log(`tip is ${tip} and the bill is ${bill} and total value is ${totalValue}`);
    
}

