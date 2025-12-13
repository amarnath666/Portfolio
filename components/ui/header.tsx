import ViewArea from "./view-area"
import Image from "next/image"
const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm pt-[10px]">
            <ViewArea className="px-4 py-2">
                <div className="flex flex-row items-center justify-between">
                    <div>

                        <Image
                            src="/images/profile.jpg"
                            alt="profile"
                            width={40}
                            height={40}
                            className="rounded-full"
                            priority
                        />
                    </div>
                    <div className="flex flex-row gap-4">
                        <p className="text-base/7 text-white">
                            Projects
                        </p>
                        <p className="text-base/7 text-white">
                            Contact
                        </p>
                    </div>
                </div>
            </ViewArea>
        </div>
    )
}

export default Header