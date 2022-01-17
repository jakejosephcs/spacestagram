import React from "react";

function Status({ text }) {
  return (
    <section className="status flex justify-center items-center m-4 text-center">
      <p>{text}</p>
    </section>
  );
}

export default Status;
