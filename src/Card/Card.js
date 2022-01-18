// #TODO:

import React from "react";
import { CalendarIcon } from "@heroicons/react/solid";

function Card({ d, handleLikeImage, setModalInfo, setIsModalOpen }) {
  return (
    <section className="flex flex-col bg-slate-200 p-4 m-2 w-80 max-w-xl">
      <div className="flex w-full max-h-56 h-52">
        {d.media_type === "video" && (
          <iframe
            className="h-full w-[18rem] rounded-md"
            src={`${d.url}?controls=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        {d.media_type === "image" && (
          <img
            className="object-cover w-96 rounded-md"
            src={d.url}
            alt={d.title}
          />
        )}
      </div>
      <h3 className="card-title grow my-0.5 font-semibold">{d.title}</h3>
      <div className="flex items-center mb-3">
        <CalendarIcon className="h-5 w-5 text-slate-500" />
        <span className="card-date ml-1 text-sm">{d.date}</span>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => {
            setModalInfo({ title: d.title, description: d.explanation });
            setIsModalOpen(true);
          }}
          className="card-learn text-sm underline underline-offset-2"
        >
          LEARN MORE
        </button>
        <button
          onClick={() => handleLikeImage(d.id)}
          className={`card-like text-sm underline underline-offset-2  ${
            d.isLiked ? "text-red-900" : "text-green-700"
          }`}
        >
          {d.isLiked ? "UNLIKE" : "LIKE"}
        </button>
      </div>
    </section>
  );
}

export default Card;
