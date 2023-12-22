import Image from 'next/image'
import Link from 'next/link'

export default function Leagues() {
  return (
    <main>
      <Link href={"/"}>Go back</Link>
      <Link href={{ pathname: '/games', query: { league: 'pt' } }} className="btn btn-outline btn-secondary rounded-full w-2/5 h-14 text-lg tracking-widest">Liga Portugal</Link>
      <Link href={{ pathname: '/games', query: { league: 'en' } }} className="btn btn-outline btn-secondary rounded-full w-2/5 h-14 text-lg tracking-widest">English Premier League</Link>
      <Link href={{ pathname: '/games', query: { league: 'it' } }} className="btn btn-outline btn-secondary rounded-full w-2/5 h-14 text-lg tracking-widest">Serie A</Link>
      <Link href={{ pathname: '/games', query: { league: 'es' } }} className="btn btn-outline btn-secondary rounded-full w-2/5 h-14 text-lg tracking-widest">La Liga</Link>
      <Link href={{ pathname: '/games', query: { league: 'de' } }} className="btn btn-outline btn-secondary rounded-full w-2/5 h-14 text-lg tracking-widest">Bundesliga</Link>
      <Link href={{ pathname: '/games', query: { league: 'ucl' } }} className="btn btn-outline btn-secondary rounded-full w-2/5 h-14 text-lg tracking-widest">Champions League</Link>
      <Link href={{ pathname: '/games', query: { league: 'uel' } }} className="btn btn-outline btn-secondary rounded-full w-2/5 h-14 text-lg tracking-widest">Europa League</Link>
    </main>
  )
}