import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./Header";
import Card from "./Card";
import DatePicker from "./DatePicker";
import Modal from "./Modal";
import Status from "./Status";

import { getCurrentDate, isValidDate } from "./utils";

function App() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(getCurrentDate());
  const [endDate, setEndDate] = useState(getCurrentDate());

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    setError({ isError: false, errorMessage: "" });
    setData([]);
    setIsLoading(true);

    if (!isValidDate(startDate, endDate)) {
      setError({
        isError: true,
        errorMessage: "Please select a correct date range",
      });
      setIsLoading(false);
      return;
    }

    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=0h15cF2D2m26IDbyqP4Y2WbxRhDTBJAqo6RUFqQX&start_date=${startDate}&end_date=${endDate}`
    )
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(JSON.parse(text).error.message);
          });
        }
        return response.json();
      })
      .then((fetchedData) => {
        setData(
          fetchedData.map((data) => {
            return {
              ...data,
              isLiked: false,
              id: uuidv4(),
            };
          })
        );
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ isError: true, errorMessage: err.message });
        setIsLoading(false);
      });
  }, [startDate, endDate]);

  const handleLikeImage = (id) => {
    setData((data) =>
      data.map((d) => {
        if (d.id === id) {
          return {
            ...d,
            isLiked: !d.isLiked,
          };
        }
        return d;
      })
    );
  };

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} modalInfo={modalInfo} />
      )}
      <Header />
      <main className="h-screen">
        <h1 className="text-center mt-3" id="title">
          Astronomy Picture of the Day
        </h1>
        <h2 className="text-center mb-2 font-extralight" id="subtitle">
          Select a date range to see the pictures on those days
        </h2>
        <DatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        {error.isError && <Status text={error.errorMessage} />}
        {isLoading && <Status text="Loading..." />}
        {!isLoading && data.length === 0 && <Status text="No results" />}
        <section className="flex flex-wrap justify-center max-w-5xl mx-auto">
          {!isLoading &&
            data.length !== 0 &&
            data.map((d) => {
              return (
                <Card
                  key={d.id}
                  d={d}
                  handleLikeImage={handleLikeImage}
                  setModalInfo={setModalInfo}
                  setIsModalOpen={setIsModalOpen}
                />
              );
            })}
        </section>
      </main>
    </>
  );
}

export default App;
