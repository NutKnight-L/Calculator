window.onload=function ()
{
	var oDiv3=document.getElementById('div3'); //数字显示区div3
	var oDiv4=document.getElementById('div4'); //运算符显示区div4
	var oDiv5=document.getElementById('div5'); //记忆数据区div5
	var oBtnCls=document.getElementById('clsbtn');
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
	var oBtn00=document.getElementById('btn00');
	var oBtnPoint=document.getElementById('pointbtn');
	var oBtnJia=document.getElementById('jiabtn');
	var oBtnJian=document.getElementById('jianbtn');
	var oBtnCheng=document.getElementById('chengbtn');
	var oBtnChu=document.getElementById('chubtn');
	var oBtnDeng=document.getElementById('dengbtn');
	var num1=0;
	var num2=0;
	var num3=0;
	var tools="";
	// 清空数据
	oBtnCls.onclick=function ()
	{
		oDiv3.innerHTML="";
		oDiv4.innerHTML="";
		oDiv5.innerHTML="memory:";
		num1=0;
		num2=0;
		num3=0;
	};
	oBtn1.onclick=function ()
	{
		oDiv3.innerHTML=oDiv3.innerHTML+1;
	};
	oBtn2.onclick=function ()
	{
		oDiv3.innerHTML=oDiv3.innerHTML+2;
	};
	oBtn3.onclick=function ()
	{
		oDiv3.innerHTML=oDiv3.innerHTML+3;
	};
	oBtn4.onclick=function ()
	{
		oDiv3.innerHTML=oDiv3.innerHTML+4;
	};
	oBtn5.onclick=function ()
	{
		oDiv3.innerHTML=oDiv3.innerHTML+5;
	};
	oBtn6.onclick=function ()
	{
		oDiv3.innerHTML=oDiv3.innerHTML+6;
	};
	oBtn7.onclick=function ()
	{
		oDiv3.innerHTML=oDiv3.innerHTML+7;
	};
	oBtn8.onclick=function ()
	{
		oDiv3.innerHTML=oDiv3.innerHTML+8;
	};
	oBtn9.onclick=function ()
	{
		oDiv3.innerHTML=oDiv3.innerHTML+9;
	};
	// 加法
	oBtnJia.onclick=function ()
	{
		num1=parseInt(oDiv3.innerHTML); // 把第一次输入的数据类型转换成number
		//alert(num1+typeof num1); // 检测num1数据类型
		oDiv3.innerHTML=""; //清空第一次输入的数据
		tools="+";
		oDiv4.innerHTML=tools;
		oDiv5.innerHTML="memory:"+num1;
	};
	// 减法
	oBtnJian.onclick=function ()
	{
		num1=parseInt(oDiv3.innerHTML);
		oDiv3.innerHTML="";
		tools="-";
		oDiv4.innerHTML=tools;
		oDiv5.innerHTML="memory:"+num1;
	};
	// 乘法
	oBtnCheng.onclick=function ()
	{
		num1=oDiv3.innerHTML;
		oDiv3.innerHTML="";
		tools="*";
		oDiv4.innerHTML=tools;
		oDiv5.innerHTML="memory:"+num1;
	};
	// 除法
	oBtnChu.onclick=function ()
	{
		num1=oDiv3.innerHTML;
		oDiv3.innerHTML="";
		tools="/";
		oDiv4.innerHTML=tools;
		oDiv5.innerHTML="memory:"+num1;
	};
	// 等于
	oBtnDeng.onclick=function ()
	{
		num2=parseInt(oDiv3.innerHTML);
		switch (tools)
		{
			case "+":
				num3=num1+num2;
				oDiv3.innerHTML=num3;
				break;
			case "-":
				num3=num1-num2;
				oDiv3.innerHTML=num3;
				break;
			case "*":
				num3=num1*num2;
				oDiv3.innerHTML=num3;
				break;
			case "/":
				num3=num1/num2;
				oDiv3.innerHTML=num3;
				break;
		}
		oDiv4.innerHTML="";
		oDiv5.innerHTML="memory:"+num3;
	};
};
