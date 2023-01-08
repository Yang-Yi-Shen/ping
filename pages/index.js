import Head from "next/head"
import Hero from "../components/Hero"
export default function Home() {
  return (
    <>
      <Head>
        <title>Ping!</title>
        <meta name="description" content="Wonder wether your friend's online, or wether they've received your message? Send them loud and visible notifications with Ping!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="m-2 p-4">
        <Hero
          title={"Are Your Friends Recieving Your Messages?"}
          description={"Well Now You You Can Know! With Ping You Can Always See When The Message Was Sent And Read. You Can Also Make Sure They Read It By Force Pinging Them!"}
          imgSrc={"https://img.freepik.com/premium-photo/3d-turn-comment-notification-graphic-illustration-icon-red-purp-blue_517064-301.jpg?w=2000"}
          variant={"img"}
          primaryBtn={"Get Started"}
          primaryBtnLink={"/signup"}
          secondaryBtn={"Learn More"}
          secondaryBtnLink={"/about"}
        />
      </main>
    </>
  )
}
