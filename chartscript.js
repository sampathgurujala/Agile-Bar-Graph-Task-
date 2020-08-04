 window.onload=function(){check();}
	var d111=[9246,7622,7161,2222,7984];
	var d112=[6919,6722,3943,5807,4413];
	var d113=[5630,4116,6879,7520,5463];
	var d121=[8025,2062,4747,7159,3019];
	var d122=[1679,8127,7792,6256,4454];
	var d123=[5298,1094,7641,1533,5030];
	var d131=[5782,7413,5133,6115,3680];
	var d132=[9021,7977,6288,2399,1152];
	var d133=[2656,2457,1573,6392,8367];
	var d211=[5078,2447,7889,5039,2137];
	var d212=[7312,2462,1434,7710,7195];
	var d213=[7445,2875,3346,4231,6991];
	var d221=[2518,5602,5681,8773,8222];
	var d222=[6127,9381,7620,8150,6566];
	var d223=[7809,5082,6190,7238,6940];
	var d231=[3399,2387,3613,7804,2598];
	var d232=[6367,8441,9049,4360,7424];
	var d233=[6020,1443,5232,1924,8646];
	var d311=[6733,4566,8049,5156,3768];
	var d312=[8248,6038,7809,1911,3509];
	var d313=[9002,1705,2414,8039,4840];
	var d321=[8715,1927,5154,1734,1613];
	var d322=[6056,7194,7505,8706,2075];
	var d323=[9415,4789,1957,8240,4287];
	var d331=[2553,8918,8106,1346,9335];
	var d332=[6772,8837,6253,5815,1337];
	var d333=[1853,7205,8986,5880,2715];


	function  check()
	{
	var a=document.getElementById('category');
	var category=a.options[a.selectedIndex].value;

	var b=document.getElementById('product');
	var product=b.options[b.selectedIndex].value;

	var c=document.getElementById('brand');
	var brand=c.options[c.selectedIndex].value;

	if(category>=1 && category<=3 && product>=4 && product<=6 && brand>=7 && brand<=9)
	{
	grapher();
	}
	}

	function getDatapoints()
	{
	var category=document.getElementById('category');
	var a=category.options[category.selectedIndex].value;

	var product=document.getElementById('product');
	var b=product.options[product.selectedIndex].value;

	var brand=document.getElementById('brand');
	var c=brand.options[brand.selectedIndex].value;

	var y=[];
	if(a==1)
	{
	if(b==4 && c==7)
	{y=d111;}
	else if(b==4 && c==8)
	{y=d112;}
	else if(b==4 && c==9)
	{y=d113;}
	else if(b==5 && c==7)
	{y=d121;}
	else if(b==5 && c==8)
	{y=d122;}
	else if(b==5 && c==9)
	{y=d123;}
	else if(b==6 && c==7)
	{y=131;}
	else if(b==6 && c==8)
	{y=d132;}
	else if(b==6 && c==9)
	{y=d133;
	}

	}
	else if(a==2)
	{
   
	if(b==4 && c==7)
	{y=d211;}
	else if(b==4 && c==8)
	{y=d212;}
	else if(b==4 && c==9)
	{y=d213;}
	else if(b==5 && c==7)
	{y=d221;}
	else if(b==5 && c==8)
	{y=d222;}
	else if(b==5 && c==9)
	{y=d223;}
	else if(b==6 && c==7)
	{y=d231;}
	else if(b==6 && c==8)
	{y=d232;}
	else if(b==6 && c==9)
	{y=d233;
	}
	}
	else if(a==3)
	{

	if(b==4 && c==7)
	{y=d311;}
	else if(b==4 && c==8)
	{y=d312;}
	else if(b==4 && c==9)
	{y=d313;}
	else if(b==5 && c==7)
	{y=d321;}
	else if(b==5 && c==8)
	{y=d322;}
	else if(b==5 && c==9)
	{y=d323;}
	else if(b==6 && c==7)
	{y=331;}
	else if(b==6 && c==8)
	{y=d332;}
	else if(b==6 && c==9)
	{y=d333;
	}
	}
	return y; 
	}


	 function grapher()
	{
		var y=getDatapoints();

		var myChart = document.getElementById('myChart').getContext('2d');

	
		Chart.defaults.global.defaultFontFamily = 'Lato';
		Chart.defaults.global.defaultFontSize = 18;
		Chart.defaults.global.defaultFontColor = '#777';

		var massPopChart = new Chart(myChart, {
		  type:'bar', 
		  data:{
			labels:['January', 'Febrauary', 'March', 'April', 'May'],
			datasets:[{
			  label:'No Of Products Sold',
			  data:y,
			  backgroundColor:[
				'rgba(255, 99, 132, 0.6)',
				'rgba(54, 162, 235, 0.6)',
				'rgba(255, 206, 86, 0.6)',
				'rgba(75, 192, 192, 0.6)',
				'rgba(153, 102, 255, 0.6)',
				'rgba(255, 159, 64, 0.6)',
				'rgba(255, 99, 132, 0.6)'
			  ],
			  borderWidth:1,
			  borderColor:'#777',
			  hoverBorderWidth:3,
			  hoverBorderColor:'#000'
			}]
		  },
		  options:{
			title:{
			  display:true,
			  text:'Sales of the Products By Month',
			  fontSize:25
			},
			legend:{
			  display:true,
			  position:'right',
			  labels:{
				fontColor:'#000'
			  }
			},
			layout:{
			  padding:{
				left:50,
				right:0,
				bottom:0,
				top:0
			  }
			}
			
		  }
		});
	}