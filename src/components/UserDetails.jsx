import { LuDot } from "react-icons/lu";
import NameSection from "./userDetails/NameSection";
import WorkStatus from "./userDetails/WorkStatus";
import PortfolioLinks from "./userDetails/PortfolioLinks";
import ProfileSummary from "./userDetails/ProfileSummary";
import CardWrapper from "./CardWrapper";
import Designation from "./userDetails/Designation";


function UserDetails() {
    return (
        <CardWrapper>
            <div className="leftUser w-100% md:w-[70%] h-full">
                <div className="flex flex-col justify-around h-full py-12 px-5 lg:p-10 md:ml-10 gap-6 md:gap-2 ">
                    <WorkStatus />
                    <NameSection />
                    <Designation />
                    <ProfileSummary />
                    <PortfolioLinks />
                </div>

            </div>
            <div className="rightUser w-[30%] h-full ">

            </div>
        </CardWrapper>
    )
}

export default UserDetails