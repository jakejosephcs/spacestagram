import Card from "./Card.js";

function CardContainer({
  isLoading,
  data,
  handleLikeImage,
  setModalInfo,
  setIsModalOpen,
}) {
  return (
    <section className="flex flex-wrap justify-center max-w-5xl mx-auto">
      {!isLoading &&
        data?.map((d) => {
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
  );
}

export default CardContainer;
