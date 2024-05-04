import LoadingBox from "@/components/loading-box";
import LoadingComponent from "./share/LoadingComponent";

export default function loading() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
     <LoadingComponent/>
    </div>
  );
}