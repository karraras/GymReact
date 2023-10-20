import BeatLoader from "react-spinners/BeatLoader";

function Loading() {
  return (
    <div className="container flex items-center justify-center flex-1">
      <BeatLoader
        color="#36d7b7"
        cssOverride={{}}
        loading
        margin={2}
        size={50}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loading;
