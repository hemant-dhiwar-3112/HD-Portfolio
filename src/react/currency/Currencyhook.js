import { useEffect, useState } from "react";

function Currencyhook(currency) {
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/5a6543feca513ba79c4abe83/latest/${currency}`
    )
      .then((respon) => respon.json())
      .then((respon) => setdata(respon.conversion_rates));
  }, [currency]);

  return data
}
export default Currencyhook;
