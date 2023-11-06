const url = "https://api.coincap.io/v2/assets";
var sectionCripto = document.querySelector('.criptoInfor');

const connectionApi = async () => {
    try{
        fetch(url).then(res => res.json()).then(infor => {
            console.log(infor)
                        sectionCripto.innerHTML = 
            `
            <section class="card">
                <section class="iconMoeda">
                    <img src="./assets/img/moedas/bitcoin.png" alt="">
                </section>
                <section class="information">
                    <h1>Name: Bitcoin</h1>
                    <h1>Qtd: 1</h1>
                    <h1>USD: ${infor.data[0].vwap24Hr}</h1>
                </section>
            </section>
            <section class="card">
                <section class="iconMoeda">
                    <img src="./assets/img/moedas/etherium.png" alt="">
                </section>
                <section class="information">
                    <h1>Name: Etherium</h1>
                    <h1>Qtd: 1</h1>
                    <h1>USD: ${infor.data[1].vwap24Hr}</h1>
                </section>
            </section>
            <section class="card">
                <section class="iconMoeda">
                    <img src="./assets/img/moedas/tether.png" alt="">
                </section>
                <section class="information">
                    <h1>Name: Tether</h1>
                    <h1>Qtd: 1</h1>
                    <h1>USD: ${infor.data[2].vwap24Hr}</h1>
                </section>
            </section>
            <section class="card">
                <section class="iconMoeda">
                    <img src="./assets/img/moedas/bnb.png" alt="">
                </section>
                <section class="information">
                    <h1>Name: BNB</h1>
                    <h1>Qtd: 1</h1>
                    <h1>USD: ${infor.data[3].vwap24Hr}</h1>
                </section>
            </section>
            <section class="card">
                <section class="iconMoeda">
                    <img src="./assets/img/moedas/dogecoin.png" alt="">
                </section>
                <section class="information">
                    <h1>Name: Dogecoin</h1>
                    <h1>Qtd: 1</h1>
                    <h1>USD: ${infor.data[8].vwap24Hr}</h1>
                </section>
            </section>`
        })
    }catch(error){
        //
    }
}


setTimeout(connectionApi, 1000);