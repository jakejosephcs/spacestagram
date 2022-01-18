import { useState, useEffect } from "react";

import Header from "./Header";
import CardContainer from "./Card/CardContainer";
import DatePicker from "./DatePicker";
import Modal from "./Modal";
import Status from "./Status";

import { augmentData, getCurrentDate, isValidDate } from "./utils";

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
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=${startDate}&end_date=${endDate}`
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
        setData(augmentData(fetchedData));
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
        <CardContainer
          isLoading={isLoading}
          data={data}
          handleLikeImage={handleLikeImage}
          setModalInfo={setModalInfo}
          setIsModalOpen={setIsModalOpen}
        />
      </main>
    </>
  );
}

export default App;
