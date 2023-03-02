import { useState } from "react";
import App from "./app";
import Card from "./card";
import Navbar from "./Navbar";
import Tab from "./tab";
export default function Home() {
  useState(() => {
    if (globalThis?.window) {
      document.querySelectorAll("#filters > button").forEach((tab, i) => {
        setTimeout(() => {
          //add bg-slate-500 and dark:bg-slate-800 to each tab and remove it
          tab.classList.add("bg-slate-300", "dark:bg-slate-800");
          setTimeout(() => {
            tab.classList.remove("bg-slate-300", "dark:bg-slate-800");
          }, (i + 1) * 100);
        }, (i + 1) * 150);
      });
    }
  }, [globalThis?.window]);
  return (
    <>
      <Navbar />
      <div className="block md:flex md:flex-row md:w-full md:items-center mb-4">
        <h1 className="text-4xl font-black m-4 w-full md:w-1/2">
          A Store You Can{" "}
          <span className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            Trust &{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 mx-2 text-pink-600"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </span>{" "}
          Upon.
        </h1>
        <div className="mx-4 md:mx-0 md:w-1/3 rounded-lg md:rounded-full px-4 py-2 md:px-6 md:py-3 text-lg font-medium text-slate-900/70 dark:text-slate-400/70 bg-white/70 dark:bg-slate-900/70 border-2 border-white dark:border-slate-900 outline-none flex items-center focus-within:border-indigo-500 dark:focus-within:border-indigo-600 transition-all focus-within:rounded-xl duration-300 focus-within:text-indigo-400 dark:focus-within:text-indigo-200 focus-within:shadow-md focus-within:shadow-indigo-600/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none focus:outline-none font-bold"
          />
        </div>
      </div>
      <div
        id="filters"
        className="mx-4 flex content-start gap-2 snap-x overflow-x-scroll"
      >
        <Tab title="For You" color="indigo-400" darkColor="indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
        </Tab>
        <Tab title="New" color="emerald-400" darkColor="emerald-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        </Tab>
        <Tab title="Popular" color="violet-400" darkColor="violet-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
        </Tab>
        <Tab title="Trending" color="pink-400" darkColor="pink-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
            />
          </svg>
        </Tab>
        <Tab title="Productivity" color="yellow-400" darkColor="yellow-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>
        </Tab>
      </div>
      <div className="m-4 md:w-full">
        <div className="flex overflow-x-scroll gap-4 snap-x">
          <div className="flex-none w-full snap-center rounded-md bg-white dark:bg-gray-900/70 md:w-96">
            <h2 className="flex text-3xl font-bold m-4 text-indigo-600 dark:text-indigo-100">
              Communication
            </h2>
            <App name="Discord" icon="/discord.jpg" short="discord.com" />
            <App
              name="Telegram"
              icon="/telegram.png"
              short="web.telegram.org"
            />
            <App name="Instagram" icon="/instagram.png" short="instagram.com" />
          </div>
          <div className="flex-none w-full snap-center rounded-md bg-white dark:bg-gray-900/70 md:w-96">
            <h2 className="flex text-3xl font-bold m-4 text-emerald-600 dark:text-emerald-100">
              Productivity
            </h2>
            <App name="MS Office" icon="/msoffice.png" short="www.office.com" />
            <App name="Zoom" icon="/zoom.png" short="zoom.us" />
            <App name="VS Code" icon="/vscode.png" short="github.dev" />
          </div>
        </div>
      </div>
      <h2 className="flex text-3xl font-bold m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 mr-2 p-1 border rounded-lg border-gray-300 dark:border-gray-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
        Personalized News
      </h2>

      <div className="flex overflow-x-scroll mx-4 gap-4 snap-x">
        <Card
          title="Watch Kimetsu No Yaiba: Mugen Ressha-Hen"
          short="Featuring the Mugen Train Arc on Gogoanime. Watch Kimetsu No Yaiba: Mugen Ressha-Hen in HD Online with English Sub and Dub."
          image="/anime-news.avif"
        />
        <Card
          title="Fancade 1.12.2 Update"
          short="Fancade 1.12.2 is now available on Rovel Store! This update includes a new game mode, new features, and more!"
          image="/fancade.jpg"
        />
      </div>
    </>
  );
}
