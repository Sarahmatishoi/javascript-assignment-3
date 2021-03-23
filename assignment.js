function getGrade(marks){
    
    if (marks>=80){
        
        return "A";
 }else if(marks>=70){
         return "B";
        
    } else if(marks>=60){
        
        return "C";
        }else if(marks>=50){
        
        return "D";
        
    }else if(marks>=0){
         return "E";
    }else {
        return"F";
    }
  
    }
    console.log(getGrade(80));
    console.log(getGrade(70));
    console.log(getGrade(60));
    console.log(getGrade(50));
    console.log(getGrade(0));
    


