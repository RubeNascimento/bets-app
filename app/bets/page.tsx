import React from 'react'

interface Bet {
    id: number;
    type: string;
    odd: number;
}

const BetsPage = async () => {

    const res = await fetch('http://localhost:8080/api/v1/bet');
    const bets: Bet[] = await res.json();
  return (
    <>
    <h1>Bets</h1>
    <ul>
        {
            bets.map(bet => <li key={bet.id}>{bet.type}</li>)
        }
    </ul>
    </>
  )
}

export default BetsPage