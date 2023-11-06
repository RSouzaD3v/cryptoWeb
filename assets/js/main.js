const url = "https://api.coincap.io/v2/assets";
var sectionCripto = document.querySelector('.criptoInfor');

const connectionApi = async () => {
    try{
        fetch(url).then(res => res.json()).then(infor => {
            const qtd = document.querySelector('.myMoney #money');
            let btc = parseFloat(infor.data[0].vwap24Hr).toFixed(2);
            let eth = parseFloat(infor.data[1].vwap24Hr).toFixed(2)     ;
            let bnb = parseFloat(infor.data[2].vwap24Hr).toFixed(2);
            let tether = parseFloat(infor.data[3].vwap24Hr).toFixed(2);
            let dog = parseFloat(infor.data[8].vwap24Hr).toFixed(2);

            qtd.addEventListener('change', (e) => {
                let val = e.target.value;
                let con = parseFloat(val)

                if (Number.isNaN(con) == true){
                    con = 1;
                }
                
            
    

            sectionCripto.innerHTML = 
            `
            <section class="card">
                <section class="iconMoeda">
                    <img src="./assets/img/moedas/bitcoin.png" alt="">
                </section>
                <section class="information">
                    <h1>Name: Bitcoin</h1>
                    <h1>Qtd: ${con}</h1>
                    <h1>USD: ${con * btc}</h1>
                </section>
            </section>
            <section class="card">
                <section class="iconMoeda">
                    <img src="./assets/img/moedas/etherium.png" alt="">
                </section>
                <section class="information">
                    <h1>Name: Etherium</h1>
                    <h1>Qtd: ${con}</h1>
                    <h1>USD: ${con * eth}</h1>
                </section>
            </section>
            <section class="card">
                <section class="iconMoeda">
                    <img src="./assets/img/moedas/tether.png" alt="">
                </section>
                <section class="information">
                    <h1>Name: Tether</h1>
                    <h1>Qtd: ${con}</h1>
                    <h1>USD: ${con * tether}</h1>
                </section>
            </section>
            <section class="card">
                <section class="iconMoeda">
                    <img src="./assets/img/moedas/bnb.png" alt="">
                </section>
                <section class="information">
                    <h1>Name: BNB</h1>
                    <h1>Qtd: ${con}</h1>
                    <h1>USD: ${con * bnb}</h1>
                </section>
            </section>
            <section class="card">
                <section class="iconMoeda">
                    <img src="./assets/img/moedas/dogecoin.png" alt="">
                </section>
                <section class="information">
                    <h1>Name: Dogecoin</h1>
                    <h1>Qtd: ${con}</h1>
                    <h1>USD: ${con * dog}</h1>
                </section>
            </section>`
        })
    })

    }catch(error){
        //
    }
}


setTimeout(connectionApi, 1000);