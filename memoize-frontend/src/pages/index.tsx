import { type NextPage } from "next";
import Head from "next/head";
import { Component } from "react";

type CardProps = {
  prompt: string
}

export const Card = ({ prompt: paragraph }: CardProps) => <aside>
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white">
    <div className="px-6 py-4">
      <p className="text-gray-700 text-base">
        { paragraph }
      </p>
    </div>
  </div>
</aside>

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>memoize.io</title>
        <meta name="description" content="memorization made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200 flex justify-center items-center h-screen">
        <Card prompt="What is the electron geometry of a central atom with 5 electron pairs, 2 bonding pairs, and 3 lone pairs?"></Card>
      </main>
    </>
  );
};

export default Home;
