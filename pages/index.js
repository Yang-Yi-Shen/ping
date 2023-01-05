import Head from "next/head"
export default function Home() {
  return (
    <>
      <Head>
        <title>Ping!</title>
        <meta name="description" content="Wonder wether your friend's online, or wether they've received your message? Send them loud and visible notifications with Ping!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="m-2 p-4">
        <h1 className="font-bold text-red-400 text-center text-3xl">Welcome To Ping!</h1>
        <p className="text-center my-6 font-bold text-red-900">Dev Changes On This Branch</p>
      </main>
    </>
  )
}
