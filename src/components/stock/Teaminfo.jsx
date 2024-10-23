import React from "react";
import { useSelector } from "react-redux";

function TeamScore() {
    const teamData = useSelector((state) => state.tokenData.teamInfo);

    return (
        <div className="my-[0.5rem] bg-[#191C19] p-[0.75rem]">
            <div className="">
                <h1 className="capitalize text-[#E1E3DD]">team info</h1>
            </div>
            <div className="flex flex-wrap gap-2">
                {teamData.map((member, index) => (
                    <div key={index} className="relative w-[10rem] h-[11rem]">
                        <img
                            src={member.image_url || "/stock/profile-placeholder.png"}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute w-full h-[100%] bottom-0 bg-gradient-to-t from-[#000000] flex items-end p-[0.76rem]">
                            <div className="text-[#FFFFFF]">
                                <h1 className="">{member.name}</h1>
                                <p className="">{member.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};



export default TeamScore;