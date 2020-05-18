
var stor = $("#stor")
var reset =$("#reset");
var view = $("#view");
var nameLi=$("#first-view");
var tbl = $("#tbl");



//name,salary,ct200,ct100,ct50,ct20,ct10,ct5,ct2,ct1

stor.click( function() {
	var empObj= {};

	var name = $("#EmpName").val();
	var hrM = $("#month").val();
	var pay = $("#pay").val();

if (name ==="" || hrM ==="" || pay ===""){
	alert("Please fill all fields");

}else{

	var salary = hrM*pay;
	var c100 = salary%200;
	var c50 = c100%100;
	var c20 = c50%50;
	var c10 = c20%20;
	var c5 = c10%10;
	var c2 = c5%5;
	var c1 = c2%2;

	var ct200 = Math.floor(salary/200);
	var ct100 = Math.floor(c100/100);
	var ct50 = Math.floor(c50/50);
	var ct20 = Math.floor(c20/20);
	var ct10 = Math.floor(c10/10);
	var ct5 = Math.floor(c5/5)
	var ct2 = Math.floor(c2/2);
	var ct1 = Math.floor(c1/1);

	empObj["name"]=name; 
	empObj["salary"]=salary;
	empObj["ct200"]=ct200;
	empObj["ct100"]=ct100;
	empObj["ct50"]=ct50;
	empObj["ct20"]=ct20;
	empObj["ct10"]=ct10;
	empObj["ct5"]=ct5;
	empObj["ct2"]=ct2;
	empObj["ct1"]=ct1;

    data.push(empObj);
   
    //var names = $("#names");
   // names.html("The employee: "+name + " is added") ;
	var names=$("<p></p>");
	nameLi.append(names);
	names.text("The employee: "+name + " was added");
	$("#EmpName").val("");
	$("#month").val("");
	$("#pay").val("");

console.log(data);

}
});


reset.click (function(){
	if(data.length===0){
		alert("No employees to remove")
	}else{
	var names=$("<p></p>");
	names.text("The employee: "+data[data.length-1].name + " was removed");
	nameLi.append(names);
	data.splice(data.length-1,1);
     	//console.log("im")
     }
     });



var counter =0;

view.click (function(){


	
	if (counter>0){
		tbl[0].innerText="";
		//console.log(counter)
	}

	nameLi.text("")
	var tr = $("<tr></tr>");
	tbl.append(tr);

	var th = $("<th>Employee</th> <th>Salary</th><th>200</th> <th>100</th> <th>50</th> <th>20</th> <th>10</th> <th>5</th> <th>2</th> <th>1</th>");
	tr.append(th);

	var nms, ss=0, t200s=0, t100s=0, t50s=0, t20s=0, t10s=0, t5s=0, t2s=0, t1s=0;

	for (var i = 0; i<data.length; i++) {
		var tr = $("<tr></tr>");

		var td = $("<td id=a"+i+"></td><td id=b"+i+"></td><td id=c"+i+"></td><td id=d"+i+"></td><td id=e"+i+"></td><td id=f"+i+"></td><td id=g"+i+"></td><td id=h"+i+"></td><td id=i"+i+"></td><td id=j"+i+"></td>");
		tr.append(td);
		tbl.append(tr);

		var nm, s, t200, t100, t50, t20, t10, t5, t2, t1;

		nm=data[i].name;
		s=data[i].salary;
		t200=data[i].ct200;
		t100=data[i].ct100;
		t50=data[i].ct50;
		t20=data[i].ct20;
		t10=data[i].ct10;
		t5=data[i].ct5;
		t2=data[i].ct2;
		t1=data[i].ct1;


		$("#a"+i)[0].textContent=nm;
		$("#b"+i)[0].textContent=s;
		$("#c"+i)[0].textContent=t200;
		$("#d"+i)[0].textContent=t100;
		$("#e"+i)[0].textContent=t50;
		$("#f"+i)[0].textContent=t20;
		$("#g"+i)[0].textContent=t10;
		$("#h"+i)[0].textContent=t5;
		$("#i"+i)[0].textContent=t2;
		$("#j"+i)[0].textContent=t1;

		ss+=s, t200s+=t200, t100s+=t100, t50s+=t50, t20s+=t20, t10s+=t10, t5s+=t5, t2s+=t2, t1s+=t1;
		

	}

	nms="total: "+data.length;
	var trs = $("<tr></tr>");
	var tds = $("<td >"+nms+"</td> <td>"+ss+"</td> <td>"+t200s+"</td> <td>"+t100s+"</td> <td>"+t50s+"</td> <td>"+t20s+"</td> <td>"+t10s+"</td> <td>"+t5s+"</td> <td>"+t2s+"</td> <td>"+t1s+"</td>");
	trs.append(tds);
	tbl.append(trs);
	//console.log(tbl)
	counter++;
});


