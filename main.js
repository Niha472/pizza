var student_name_arrya=[];
function change()
{
    var student_name_1=document.getElementById("name1").value;
    var student_name_2=document.getElementById("name2").value;
    var student_name_3=document.getElementById("name3").value;
    var student_name_4=document.getElementById("name4").value;
    var student_name_5=document.getElementById("name5").value;
    student_name_arrya.push(student_name_1)
    student_name_arrya.push(student_name_2)
    student_name_arrya.push(student_name_3)
    student_name_arrya.push(student_name_4)
    student_name_arrya.push(student_name_5)
    document.getElementById("display").innerHTML=student_name_arrya
}