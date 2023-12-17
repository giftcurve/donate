import React, { useState, useEffect } from 'react';

const CryptoConverter = ({ defaultCryptoSymbol, defaultAmountUSD }) => {
  const [cryptoToUsdRate, setCryptoToUsdRate] = useState(null);
  const [cryptoSymbol, setCryptoSymbol] = useState(defaultCryptoSymbol || 'ethereum');
  const [donationAmountUSD, setDonationAmountUSD] = useState(defaultAmountUSD || 0);
  const [donationAmountCrypto, setDonationAmountCrypto] = useState(null);

  useEffect(() => { 
    const fetchCryptoToUsdRate = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSymbol}&vs_currencies=usd`
        );
        const data = await response.json();
        const rate = data[cryptoSymbol]?.usd;

        if (rate) {
          setCryptoToUsdRate(rate);

          // Calculate and set the initial cryptocurrency amount based on the default donationAmountUSD
          const initialCryptoAmount = (donationAmountUSD / rate).toFixed(6);
          setDonationAmountCrypto(initialCryptoAmount);
        }
      } catch (error) {
        console.error(`Error fetching ${cryptoSymbol} to USD rate:`, error);
      }
    };

    fetchCryptoToUsdRate();
  }, [cryptoSymbol, donationAmountUSD]);

  const handleAmountUSDChange = (amount) => {
    setDonationAmountUSD(amount);
    // Calculate cryptocurrency equivalent based on the conversion rate
    setDonationAmountCrypto((amount / cryptoToUsdRate).toFixed(6));
  };

  const handleAmountCryptoChange = (amount) => {
    setDonationAmountCrypto(amount);

    // Calculate USD equivalent based on the conversion rate
    const usdEquivalent = (amount * cryptoToUsdRate).toFixed(2);
    setDonationAmountUSD(usdEquivalent);
  };

  return (
    <div>
      <h1>Crypto to USD Converter</h1>
      <label htmlFor="cryptoSymbol">Select a cryptocurrency:</label>
      <input
        type="text"
        id="cryptoSymbol"
        value={cryptoSymbol}
        onChange={(e) => setCryptoSymbol(e.target.value)}
      />

      <label htmlFor="amountUSD">Enter amount in USD:</label>
      <input
        type="number"
        id="amountUSD"
        value={donationAmountUSD}
        onChange={(e) => handleAmountUSDChange(e.target.value)}
      />

      <label htmlFor="amountCrypto">Equivalent amount in {cryptoSymbol.toUpperCase()}:</label>
      <input
        type="number"
        id="amountCrypto"
        value={donationAmountCrypto || ''}
        onChange={(e) => handleAmountCryptoChange(e.target.value)}
      />
    </div>
  );
};

export default CryptoConverter;
