import React from 'react'
import Link from 'next/link';
import styles from './bets.module.css';

interface Bet {
    id: number;
    date: string;
    type: string;
    team1: string;
    team2: string;
    odd: number;
    guessed: boolean;
}

const BetsPage = async () => {

    const res = await fetch('http://localhost:8080/api/v1/bet');
    const bets: Bet[] = await res.json();
  return (
    <main>
    <Link href={"/"}>Go back</Link>
    <ul className={"flex flex-col justify-center gap-5"}>
      {
        <div className={styles.betsHeader}>
          <p>Date</p>
          <p>Home</p>
          <p>Away</p>
          <p>Bet</p>
          <p>Odd</p>
        </div>
      }
        {
            bets.map(bet =>
            <li key={bet.id} className={styles.betsList}>
              <p>{bet.date}</p>
              <p>{bet.team1}</p>
              <p>{bet.team2}</p>
              <p style={bet.guessed === true ? {color: "#69a469"} : bet.guessed === false ? {color: "#FF7373"} : {}}>{bet.type}</p>
              <p>{bet.odd}</p>
            </li>)
        }
    </ul>
    </main>
  )
}

export default BetsPage