import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/leagues" className="btn btn-outline btn-secondary rounded-full w-2/5 h-14 text-lg tracking-widest">Upcoming Games</Link>
      <Link href="/bets" className="btn btn-outline btn-secondary rounded-full w-2/5 h-14 text-lg tracking-widest">Bets History</Link>
      {/* <BetCard/> */}
    </main>
  )
}
