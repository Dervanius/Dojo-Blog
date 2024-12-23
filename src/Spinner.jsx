import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#f1356d",
  };
  return (
    <div className="sweet-loading">
      <ClipLoader cssOverride={override} size={120} />
    </div>
  );
};

export default Spinner;
