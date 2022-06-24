import React from "react";

import Button from "./Button";
import die from "../images/die.png";

import icon1 from "../images/icon-1.svg";
import icon2 from "../images/icon-2.svg";
import icon3 from "../images/icon-3.svg";
import icon4 from "../images/icon-4.svg";

const HomePage = () => {
  return (
    <div className="w-screen flex col items-center text-center">
      <section className="hero">
        <article className="col items-center sm:w-11/2 lg:w-11/12 mdlg:w-4/6">
          <h1>Generate unique SVG design assets</h1>
          <p className="text-textlighter">
            Haikei is a web app to generate unique SVG shapes, backgrounds, and
            patterns – ready to use with your design tools and workflow.
          </p>
          <Button
            text="Start designing for free"
            classes="w-80 flex-row-reverse"
            content={<img className="w-56" src={die} />}
          />
          <p className="font-normal">Free, no signups, no credit cards.</p>
        </article>
        <div className="col items-center rounded-full">
          <video
            className="rounded-xl w-full"
            src="/src/images/intro-video.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </section>
      <section className="col items-start mt-20">
        <article className="col items-start">
          <h2 className="text-left">
            Discover + create unlimited <br /> visuals for your designs
          </h2>
          <div className="py-20 col">
            <div className="resprow">
              <Card
                imgSrc={icon1}
                heading="Growing number of generators"
                text="Get started with one of our flexible SVG generators that will help you create unique data-driven shapes without hassle. Choose between stacked or layered waves, steps, peaks, blobs, symbols, grids, gradients, and much more."
              />
              <Card
                imgSrc={icon2}
                heading="Easy to integrate into your workflow"
                text="Whether you are creating a poster or a website, integrating Haikei into your workflow is easy! Export your background as PNG, SVG and continue working on it in any vector editing tool, CMS or code base."
              />
            </div>
            <div className="resprow">
              <Card
                imgSrc={icon3}
                heading="Customizable visuals"
                text="Our generators will help you create unique visuals that look good every time. Play with the settings to find the right parameters and use the dice button to generate a new visual every time."
              />
              <Card
                imgSrc={icon4}
                heading="Designs ready for production"
                text="Choose from a number of common canvas sizes to help you generate cool backgrounds, ready to share. You can also tweak the size and compare different generators across formats. Haikei will adapt to your needs."
              />
            </div>
          </div>
        </article>
      </section>
      <section>
        <h2>Use cases</h2>
      </section>
    </div>
  );
};

const Card = (props: any) => {
  return (
    <div className="lg:w-1/2 py-4">
      <img src={props.imgSrc} className="bg-dark4 p-4 rounded-2xl mb-8" />
      <div className="text-left col items-start">
        <h4>{props.heading}</h4>
        <p className="text-textdarker font-semibold md:pr-20">{props.text}</p>
      </div>
    </div>
  );
};

export default HomePage;
