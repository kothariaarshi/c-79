name_of_the_student_aaray = [];
function submit()
{
var name_1 = document.getElementById("name_of_the_student_1").value;
var name_2 = document.getElementById("name_of_the_student_2").value;
var name_3 = document.getElementById("name_of_the_student_3").value;
var name_4 = document.getElementById("name_of_the_student_4").value;
name_of_the_student_aaray.push(name_1);
name_of_the_student_aaray.push(name_2);
name_of_the_student_aaray.push(name_3);
name_of_the_student_aaray.push(name_4);
console.log(name_of_the_student_aaray);
document.getElementById("display_name").innerHTML= name_of_the_student_aaray;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button")style.display = "inline-block";
}
function sorting()
{
    name_of_the_student_aaray.sort();
    console.log(name_of_the_student_aaray);
    document.getElementById("display_name").innerHTML =  name_of_the_student_aaray ;
}