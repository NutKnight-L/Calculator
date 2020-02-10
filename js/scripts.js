window.onload=function ()
{
	var oDiv2=document.getElementById('div2');
	var oBtnCls=document.getElementById('clsbtn');
	var oBtnTurn=document.getElementById('turn');
	var oBtn1=document.getElementById('btn1');
	var oBtn2=document.getElementById('btn2');
	var oBtn3=document.getElementById('btn3');
	var oBtn4=document.getElementById('btn4');
	var oBtn5=document.getElementById('btn5');
	var oBtn6=document.getElementById('btn6');
	var oBtn7=document.getElementById('btn7');
	var oBtn8=document.getElementById('btn8');
	var oBtn9=document.getElementById('btn9');
	var oBtn0=document.getElementById('btn0');
	var oBtnJia=document.getElementById('jiabtn');
	var oBtnJian=document.getElementById('jianbtn');
	var oBtnCheng=document.getElementById('chengbtn');
	var oBtnChu=document.getElementById('chubtn');
	var oBtnDeng=document.getElementById('dengbtn');
	var it1=0;
	var num1=0;
	var num2=0;
	var tools="";
	//var i1=Number(it1);
	//var oBtn3=document.getElementById('btn3');
	//var oBtn3=document.getElementById('btn3');
	oBtnCls.onclick=function ()
	{
		oDiv2.innerHTML="";
		num1=0;
		num2=0;
		//检测num1,num2的值和类型，以防运算错误
		//alert(num1+typeof num1+num2+typeof num2);
	};
	oBtn1.onclick=function ()
	{
		oDiv2.innerHTML=oDiv2.innerHTML+1;
		//it1=parseInt(it1+'1');
	};
	oBtn2.onclick=function ()
	{
		oDiv2.innerHTML=oDiv2.innerHTML+2;
	};
	oBtn3.onclick=function ()
	{
		oDiv2.innerHTML=oDiv2.innerHTML+3;
	};
	oBtn4.onclick=function ()
	{
		oDiv2.innerHTML=oDiv2.innerHTML+4;
	};
	oBtn5.onclick=function ()
	{
		oDiv2.innerHTML=oDiv2.innerHTML+5;
	};
	oBtn6.onclick=function ()
	{
		oDiv2.innerHTML=oDiv2.innerHTML+6;
	};
	oBtn7.onclick=function ()
	{
		oDiv2.innerHTML=oDiv2.innerHTML+7;
	};
	oBtn8.onclick=function ()
	{
		oDiv2.innerHTML=oDiv2.innerHTML+8;
	};
	oBtn9.onclick=function ()
	{
		oDiv2.innerHTML=oDiv2.innerHTML+9;
	};
	oBtn0.onclick=function ()
	{
		oDiv2.innerHTML=oDiv2.innerHTML+0;
	};
	//加号点击事件
	oBtnJia.onclick=function ()
	{
		num1=parseInt(oDiv2.innerHTML);
		oDiv2.innerHTML='';
		tools="+";
	};
	//减号点击事件
	oBtnJian.onclick=function ()
	{
		num1=parseInt(oDiv2.innerHTML);
		oDiv2.innerHTML="";
		tools="-";
	};
	//乘号点击事件
	oBtnCheng.onclick=function ()
	{
		num1=parseInt(oDiv2.innerHTML);
		oDiv2.innerHTML="";
		tools="*";
	};
	//除号点击事件
	oBtnChu.onclick=function ()
	{
		num1=parseInt(oDiv2.innerHTML);
		oDiv2.innerHTML="";
		tools="/";
	};
	//等号点击事件
	oBtnDeng.onclick=function ()
	{
		num2=parseInt(oDiv2.innerHTML);
		switch (tools)
		{
			case "+":
				oDiv2.innerHTML=num1+num2;
				break;
			case "-":
				oDiv2.innerHTML=num1-num2;
				break;
			case "*":
				oDiv2.innerHTML=num1*num2;
				break;
			case "/":
				oDiv2.innerHTML=num1/num2;
				break;
		}
	};
};
