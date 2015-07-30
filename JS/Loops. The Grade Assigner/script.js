
        function assignGrade(score){
            if(score>=90){
                return "A";
            }else if(score>=70){
                return "B"
            }else if(score>=60){
                return "C";
            }else if(score>=50){
                return "D";
            }else{
                return "F";
            }
        }

        for (var i=50; i<=100; i++){
                if(i>=90){
                console.log("for " + i + ", you got an " + assignGrade(i));
                }else{
                console.log("for " + i + ", you got a " + assignGrade(i));
                }
            }