let students=[];

function addStudent()
{
    let name=document.getElementById("name").value;
    let marks=parseInt(document.getElementById("marks").value);

    let student={
        name:name,
        marks:marks
    };

    students.push(student);
    // console.log(students);
    displayStudents();
}

function displayStudents()
{
   let table=document.getElementById("studentTable");
//    clear old rows
   table.innerHTML="";

   let total=0;
   for(let i=0;i<students.length;i++)
   {
      total=total+students[i].marks;

      let status;
      if(students[i].marks>=35){
        status="pass";
      }
      else{
        status="fail";
      }
      table.innerHTML += `
      <tr>
      <td>${students[i].name}</td>
      <td>${students[i].marks}</td>
      <td>${status}</td>
      </tr>
      `;
    }

    //   display total
    document.getElementById("total").textContent=total;
    let average=0;
    if(students.length>0)
    {
        average=total/students.length;
    }
    document.getElementById("avg").textContent=average;


   
}