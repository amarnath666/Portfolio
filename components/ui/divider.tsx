import ViewArea from "./view-area"

const Divider = () => {
    return (
        <ViewArea
            showBorderTop={false} showBottomDots={false}
            className="p-0 md:p-0 w-full relative ">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen md:h-12 h-8 bg-[repeating-linear-gradient(315deg,transparent,transparent_5px,#171717_5px,#171717_6px)]  "></div>
            <div className="md:h-12 h-8 w-full"></div>
        </ViewArea>
    )
}

export default Divider
