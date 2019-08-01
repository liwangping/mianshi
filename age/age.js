// babyBirthday = "2015-04-03" // currentDate = "2019-07-07" 
function calBabyAge(babyBirthday, currentDate) {     // 补充代码，实现功能
    let year,mouth;
    let year1 = parseInt(babyBirthday.split('-')[0]);
    let year2 = parseInt(currentDate.split('-')[0]);
    let mouth1 = parseInt(babyBirthday.split('-')[1]);
    let mouth2 = parseInt(currentDate.split('-')[1]);
    if (mouth2 >= mouth1){
        year = year2 - year1,
        mouth = mouth2 - mouth1
    }else (
        year = year2 - year1  - 1,
        mouth = mouth2 - mouth1 + 12
    )
    return {
        "age": year,
        "mouth": mouth
    }
} 

console.log(calBabyAge("2015-04-03", "2019-02-04"));
 
 