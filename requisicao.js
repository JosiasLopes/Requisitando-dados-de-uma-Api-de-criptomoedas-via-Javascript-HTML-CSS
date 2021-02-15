
var url="https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=";
var apikey = {key:"sua chave aqui"};
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+apikey.key).then((response)=>{
	if(!response.ok) throw new Error("Erro ao efetuar a requisição, status "+response.status);
		return response.json();
}).then((api)=>{
	
	var texto = "";
	for(let i=0;i<10;i++){
		
		texto = texto+'
			<div class="media">
				<img src="coin.jpg" class="align-self-center"
			</div>
		';
	}
	console.log(api)}
	).catch((erro)=>console.error(erro.message));
