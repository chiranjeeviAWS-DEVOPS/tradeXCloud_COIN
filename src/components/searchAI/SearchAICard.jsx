import React from "react";



function SearchAICard(props){



    return(
        <div className="">
            <div className="w-full lg:w-[calc(40vh)] xl:w-[calc(50vh)] bg-searchAICardColor py-4 mb-4 lg:mb-0 lg:mx-10 rounded-r-2xl border-2 border-searchAITagColor">
                <h1 className="capitalize text-xl text-center font-semibold">{props.title}</h1>
                {/* SearchAI Card Tags Container Starts */}
                <div className="capitalize flex justify-center mt-4">
                    <div className="">
                        {
                            props.tags.map((tag) =>(
                                <h1 className="bg-searchAITagColor text-serachAITagTextColor px-4 py-2 mb-3 text-center">{tag}</h1>
                            ))
                        }    
                    </div>
                </div>
                {/* SearchAI Card Tags Container Ends*/}
            </div>
        </div>
    )
};


export default SearchAICard;