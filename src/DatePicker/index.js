function index({ startDate, setStartDate, endDate, setEndDate }) {
  return (
    <section
      className="bg-slate-200 flex justify-center max-w-2xl mx-auto p-2 rounded-md mb-5"
      role="dialog"
      aria-modal="true"
      id="datepicker"
    >
      <div className="flex flex-col items-center mr-2">
        <label htmlFor="start">start date</label>
        <input
          type="date"
          id="start"
          name="start"
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
          min="1995-06-16"
          max="2022-01-15"
          className="font-semibold p-1 rounded-xl"
        />
      </div>
      <div className="flex flex-col items-center ml-2">
        <label htmlFor="end">end date</label>
        <input
          type="date"
          id="end"
          name="end"
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
          min="1995-06-16"
          max="2022-01-15"
          className="font-semibold p-1 rounded-xl"
        />
      </div>
    </section>
  );
}

export default index;
