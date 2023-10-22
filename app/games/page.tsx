'use client'

import React, { useState } from 'react'
import styles from './games.module.css'
import { format } from 'date-fns-tz';
import { ButtonComponent, getTomorrowsDate } from './games';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function getFormatedDate(date: Date){
    const formated = format(new Date(date), 'dd/MM/yyyy - HH:mm', { timeZone: 'Etc/UTC' });
    return formated;
}

const Games = () => {

    const searchParams = useSearchParams();
    const league = searchParams.get('league')

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`

    const [games, setGames] = useState("no games");

  return (
    <main>
        <Link href={"/leagues"}>Go back</Link>
        <div className="navbar w-fit justify-center gap-4 my-10">
            <ButtonComponent date={formattedDate} setGames={setGames} name="Today" league={league} />
            <ButtonComponent date={getTomorrowsDate(1)} setGames={setGames} name="Tomorrow" league={league} />
            <ButtonComponent date={getTomorrowsDate(2)} setGames={setGames} name="In 2 days" league={league} />
        </div>
        <div className={"flex flex-wrap justify-center gap-14"}>
        {
            games === "no games"
            ?
            "Pick a day"
            :
            games.response.length > 0 ?
            games.response.map((game) => 
            <div key={game.fixture.id}>
                <div className={styles.games}>
                    <p className={styles.date}>{getFormatedDate(game.fixture.date)}</p>
                    <div className={"flex flex-col items-center gap-3 w-40"}>
                        <img src={game.teams.home.logo} width={100} />
                        <p className={`${styles.fontSmall} uppercase tracking-widest`}>{game.teams.home.name}</p>
                    </div>
                    <p className='text-2xl self-center'>vs</p>
                    <div className={"flex flex-col items-center gap-3 w-40"}>
                        <img src={game.teams.away.logo} width={100} />
                        <p className={`${styles.fontSmall} uppercase tracking-widest`}>{game.teams.away.name}</p>
                    </div>
                </div>
            </div>
            )
            :"Não existem jogos"
        }
        </div>
    </main>
  )
}

export default Games