// 倒计时
function newYear(){
	// 获取目标时间距离1970,1,1毫秒数值
	var targetTime=new Date(2021,2,12).getTime();
	//获取当前时间距离1970,1,1的毫秒数
	var nowTime=new Date().getTime();
	//转为从现在到过年的秒数
	var t=(targetTime-nowTime)/1000;
	if(t>0){
		var date=parseInt(t/60/60/24);
		var hour=parseInt(t/60/60%24);
		var minute=parseInt(t/60%60);
		var second=parseInt(t%60);
		str="距离2020年春节还有"+date+"天"+hour+"时"+minute+"分"+second+"秒"
		console.log($('h4'))
		$('h4').html(str)
		}else{
			alert("时间已经过期");
		}
};
newYear();
setInterval(newYear,1000);