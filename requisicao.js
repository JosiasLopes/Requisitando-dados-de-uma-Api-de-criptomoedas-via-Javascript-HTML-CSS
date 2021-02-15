var texto = '';
var url="https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=";
var apikey = {key:"sua chave aqui"};
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+apikey.key).then((response)=>{
	if(!response.ok) throw new Error("Erro ao efetuar a requisição, status "+response.status);
		return response.json();
}).then((api)=>{
	
	
	for(let i=0;i<10;i++){
		
		
		var date = new Date(api.data[i].first_historical_data);
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var dateFormatted = day +'/'+ (month++) +'/'+ year;
		
		
		document.getElementById("coins").innerHTML = texto;
		texto = texto+"<div class='media'><img src='coin_icon.png' class='align-self-center' witdh='100' height='50'"+
			"<br>"+"</div><div class='media-body'>"+"<h5 class='mt-2'>"+api.data[i].name+"</h5>"+
				"<p>"+api.data[i].name+"</p>"+
				"<p>"+" 1° data historica"+dateFormatted.toString()+"</p>"+
			"</div>";
	}
	document.getElementById("coins").innerHTML = texto;}
	).catch((erro)=>console.error(erro.message));
	

