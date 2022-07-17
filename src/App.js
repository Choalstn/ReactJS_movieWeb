import styles from "./App.module.css"
import { useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [userMoney, setUserMoney] = useState("");
  const [selectCoin, setSelectCoin] = useState(false);
  const [symbols, setSymbols] = useState(null);
  const [selectCoinName, setSelectCoinName] = useState("");
  const [selectCoinPrice, setSelectCoinPrice] = useState(null);

  const onSelectCoin = (event) => {
    setSelectCoin(true);
    const symbol = coins[event.target.selectedIndex-1].symbol;
    const price = coins[event.target.selectedIndex-1].quotes.USD.price;
    const name = coins[event.target.selectedIndex-1].name

    setSymbols(symbol);
    setSelectCoinName(name);
    setSelectCoinPrice(price);


  }

  const onChange = (event) => {
    setUserMoney(event.target.value);
    console.log(event.target.value);
  };

  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response)=> response.json()) //then은 서버에서 데이터를 가져오는 작업이 완료된 이후에 then의 인자에 들어가있는 함수가 실행
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return ( 
    <div className={styles.App}>
      <h1>The Coins ! {loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
      <form>
        <br/>
        <select className={styles.select} onChange={onSelectCoin}>
          <option> ------------------ Select the Coin ! ------------------</option>
          {coins.map((coin) =>
          <option key={coin.id}> {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD </option>
          )}
        </select>

        {selectCoin ? 
        <div className={styles.afterSelect}>
          <h2> USD to {symbols} Converter</h2>

          <form>
          <input onChange={onChange} type="number" value={userMoney}  placeholder="Write your money ($)..."/> 
          <label> USD </label>

          &nbsp;

          <label> = </label>

          &nbsp;

          <input disabled onChange={onChange} value={userMoney != null ?  (userMoney/selectCoinPrice).toFixed(5) : null} placeholder={selectCoinName}/> 
          <label> {symbols} </label>
          </form>

        </div>: null}
      </form>}

    
    </div>
  );
}

export default App;
