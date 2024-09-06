import { RevolvingDot } from "react-loader-spinner";

const Loader = () => {
  return (
    <RevolvingDot
      visible={true}
      height="40"
      width="40"
      color="red"
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
export default Loader;
