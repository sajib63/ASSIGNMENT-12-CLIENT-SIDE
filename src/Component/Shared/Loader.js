import { ThreeCircles } from "react-loader-spinner"

export const Loader = () => {
    return <div className="flex  justify-center items-center mt-10 lg:mt-60">  
        <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
        />
    </div>
}