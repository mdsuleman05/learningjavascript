const massMark= 72;
const heightMark= 1.69;
const massJohn=92 ;
const heightJohn=1.95 ;
const BMImark=massMark/(heightMark*heightMark);
const BMIjohn=massJohn/(heightJohn*heightJohn);
console.log(BMImark,BMIjohn)
if(BMImark>BMIjohn){
     console.log('mark BMI is greater than john bmi (${BMImark}).')
    }
    else{
     console.log('mark BMI is lesser than john bmi (${BMIjohn}). ')
    }