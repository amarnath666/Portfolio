import ViewArea from "./view-area"
import Image from "next/image"
import Link from "next/link"
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

                        <Link href="#projects" className="text-base/7 text-white">

                            Projects
                        </Link>
                        <Link href="mailto:amarnathdhumal2001@gmail.com" className="text-base/7 text-white">
                            Contact
                        </Link>
                    </div>
                </div>
            </ViewArea>
        </div>
    )
}

export default Header