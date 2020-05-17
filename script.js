var stor = $("#stor")

var hrM = $("#month");
var pay = $("#pay");


var data =[];
var empObj= {};
//name,salary,ct200,ct100,ct50,ct20,ct10,ct5,ct2,ct1

stor.click( function() {
	var name = $("#EmpName").val();
	var hrM = $("#month").val();
	var pay = $("#pay").val();

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

});

