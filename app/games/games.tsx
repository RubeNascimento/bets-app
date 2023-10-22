export const ButtonComponent = ({date, setGames, name, league}) => {
    async function checkData() {

        let leagueId = 0;

        if (league === "pt")
            leagueId = 94;
        else if (league === "en")
            leagueId = 39;
        else if (league === "it")
            leagueId = 135;
        else if (league === "es")
            leagueId = 140;
        else if (league === "de")
            leagueId = 78;
        else if (league === "ucl")
            leagueId = 2;
        else if (league === "uel")
            leagueId = 3;

        const res = await fetch(`https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=2023&from=${date}&to=${date}`, {
            headers: {
                'x-apisports-key': process.env.apiKey,
            },
        });
        const results = await res.json();
        return results;
    }


    return <button className={`btn btn-ghost normal-case text-xl`} onClick={async () => {
                const data = await checkData();
                setGames(data);
            }}>{name}</button>
}

export function getTomorrowsDate(more: number){
    const today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + more);

    const year = tomorrow.getFullYear();
    const month = tomorrow.getMonth() + 1;
    const day = tomorrow.getDate();

    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
}