import Lottie from "react-lottie";
import animationData from "./argonLoadingSpinner.json";

type Props = {
  size?: number;
};

export default function LoadingSpinner({ size }: Props) {
  size = size ?? 180;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={size} width={size} />
    </div>
  );
}
