import { getSession } from "next-auth/react";
import Head from "next/head";
import Center from "../Components/Center";
import Sidebar from "../Components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden overflow-scroll">
      <Head>
        <title>Spotify 2.0</title>
      </Head>
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div>{/* player */}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
