import Head from "next/head";
import React from "react";

import NavBar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Career from "../components/career";
import Footer from "../components/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Portofolio Leonardo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <NavBar />
          <Hero />
          <About />
          <Career />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
