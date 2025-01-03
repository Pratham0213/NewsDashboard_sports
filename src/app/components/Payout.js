import { useState, useEffect } from 'react';

const Payout = () => {
  const [articleCount, setArticleCount] = useState(0);
  const [payoutRate, setPayoutRate] = useState(5); // Default payout per article
  const [totalPayout, setTotalPayout] = useState(0);

  useEffect(() => {
    const savedPayout = localStorage.getItem('payoutRate');
    if (savedPayout) {
      setPayoutRate(Number(savedPayout));
    }
  }, []);

  const calculatePayout = () => {
    setTotalPayout(articleCount * payoutRate);
  };

  const handlePayoutChange = (e) => {
    const newRate = e.target.value;
    setPayoutRate(newRate);
    localStorage.setItem('payoutRate', newRate);
    calculatePayout();
  };

  return (
    <div>
      <input
        type="number"
        value={articleCount}
        onChange={(e) => setArticleCount(Number(e.target.value))}
        placeholder="Number of Articles"
      />
      <input
        type="number"
        value={payoutRate}
        onChange={handlePayoutChange}
        placeholder="Payout per Article"
      />
      <button onClick={calculatePayout}>Calculate Total Payout</button>
      <p>Total Payout: ${totalPayout}</p>
    </div>
  );
};

export default Payout;
