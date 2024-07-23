document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    checkData();
 });
 var number=document.getElementById("number")
 var employee = document.getElementById("employee");
 var date = document.getElementById("date");
 var time = document.getElementById("time");
 function checkData(){
    var numberValue=number.value;
    var employeeValue = employee.value;
    var dateValue = date.value;
    var timeValue = time.value
    if(numberValue==""){
        setError(number,"Number can't be blank");
    }
    else{
        setSuccess(number);
    }
    if (employeeValue == ""){
       setError(employee,"Employee can't be blank");
    } else {
       setSuccess(employee)
    }
    if(dateValue==""){
      setError(date,"Date can't be blank");
    }
    else{
      setSuccess(date)
    }
    if(timeValue==""){
      setError(time,"Time can't be blank");
    }
    else{
      setSuccess(time)
    }
 }
 function setError(u, msg) {
  var parentBox = u.parentElement;
parentBox.className = "input-field error";
var span = parentBox.querySelector("span");
var fa = parentBox.querySelector(".fa");
span.innerText = msg;
fa.className = "fa fa-exclamation-circle";
 }
function setSuccess(u) {
var parentBox = u.parentElement;
parentBox.className = "input-field success";
var fa = parentBox.querySelector(".fa");
fa.className = "fa fa-check-circle";
 }
    function addStudent()
    {
        var no=document.sample.no.value;
        var name=document.sample.name.value;
        var date=document.sample.date.value;
        var time=document.sample.time.value;
        var tr = document.createElement('tr');
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        var td5 = tr.appendChild(document.createElement('td'));
        td1.innerHTML=no;
        td2.innerHTML=name;
        td3.innerHTML=date;
        td4.innerHTML=time;
        td5.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);"  id="b">'
        document.getElementById("tbl").appendChild(tr);
    }
    /*function UpStud(stud){
         var no=document.sample.no.value;
        var name=document.sample.name.value;
        var date=document.sample.date.value;
        var time=document.sample.date.value;
        var s = stud.parentNode.parentNode;
        var tr = document.createElement('tr');
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        var td5 = tr.appendChild(document.createElement('td'));
        td1.innerHTML='<input type="number" name="rollno1">';
        td2.innerHTML='<input type="text" name="name1">';
        td3.innerHTML='<input type="date" name="date1">';
        td4.innerHTML='<input type="time" name="time1">';
        td5.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" >'
        document.getElementById("tbl").replaceChild(tr, s);
    }
    function addUpStud(stud){
      var no=document.sample.rollno1.value;
      var name=document.sample.name1.value;
      var date=document.sample.date1.value;
      var time=document.sample.time1.value;
      var s = stud.parentNode.parentNode;
      var tr = document.createElement('tr');
      var td1 = tr.appendChild(document.createElement('td'));
      var td2 = tr.appendChild(document.createElement('td'));
      var td3 = tr.appendChild(document.createElement('td'));
      var td4 = tr.appendChild(document.createElement('td'));
      var td5 = tr.appendChild(document.createElement('td'));   
        td1.innerHTML=no;
        td2.innerHTML=name;
        td3.innerHTML=date;
        td4.innerHTML=time;
        td5.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" >'  
        document.getElementById("tbl").replaceChild(tr, s);
    }*/
    function delStudent(Stud){
        var s=Stud.parentNode.parentNode;
        s.parentNode.removeChild(s);
}