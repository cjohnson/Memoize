import { type NextPage } from "next";
import Head from "next/head";

import MultipleChoiceOption from "./multiplechoiceoption";

type CardProps = {
  prompt: string
}

export const Card = ({ prompt: prompt }: CardProps) => <aside>
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white">
    <div className="px-6 py-4">
      <p className="text-gray-700 text-base">
        { prompt }
      </p>
    </div>
  </div>
</aside>

const correct = 'B';
const handleClick = (option: MultipleChoiceOption): void => {
  console.log(option.props.title + ' has been clicked...');

  if(option.props.option_index == correct) {
    console.log('CORRECT!');
  }
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>memoize.io</title>
        <meta name="description" content="memorization made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200 flex justify-center items-center space-between h-screen">
        <Card prompt="What is the electron geometry of a central atom with 5 electron pairs, 2 bonding pairs, and 3 lone pairs?"/>
        <div className="columns">
          <MultipleChoiceOption click_callback={handleClick} option_index="A" title="Tetrahedral"/>
          <MultipleChoiceOption click_callback={handleClick} option_index="B" title="Trigonal bipyramidal"/>
          <MultipleChoiceOption click_callback={handleClick} option_index="C" title="Trigonal pyramidal"/>
          <MultipleChoiceOption click_callback={handleClick} option_index="D" title="Trigonal planar"/>
        </div>
      </main>
    </>
  );
};

export default Home;
