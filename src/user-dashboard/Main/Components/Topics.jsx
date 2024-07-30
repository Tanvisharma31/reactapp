import React from 'react';

const TrendingTags = () => {
    // Dummy data for tags
    const tags = [
        { id: 1, title: "Javascript", articles: "172 articles this week", image: "https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg" },
        { id: 2, title: "Javascript", articles: "172 articles this week", image: "https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg" },
    ];

    const newlyAddedTags = [
        { id: 1, title: "Lindo", image: "" },
        { id: 2, title: "Lindo", image: "" },
    ];

    const allTags = [
        { id: 1, title: "#Javascript", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat dolor maxime eligendi, faci", posts: "100008 posts published" },
    ];

    return (
        <div className="max_width_holder grid place-items-center w-full max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
            <section className="topic_section p-[30px] max-[900px]:ml-0 max-w-[1400px]">
                <div className="heading flex">
                    <h1 className="text-2xl font-semibold mr-4">Trending Tags</h1>
                    <button className="outline-none border border-blue-600 rounded-full px-4 py-1 font-semibold text-blue-600 text-md">
                        See all tags
                    </button>
                </div>
                <div className="tags_holder flex my-10 flex-wrap justify-between max-[900px]:justify-center">
                    {tags.map(tag => (
                        <div key={tag.id} className="tag flex items-center bg-gray-300 min-w-[300px] border border-white h-[80px] my-0.5 rounded-md p-2">
                            <img src={tag.image} alt="" className="w-10 h-10 mr-4" />
                            <div className="details_holder flex-1">
                                <h1 className="text-lg font-semibold">{tag.title}</h1>
                                <p className="text-sm text-gray-600">{tag.articles}</p>
                            </div>
                            <button className="outline-none bg-white border-none w-9 h-9 text-blue-600 rounded-full text-lg font-semibold">+</button>
                        </div>
                    ))}
                </div>
                <p id="light_heading" className="text-xl font-semibold mr-4 justify-between">Newly Added Tags</p>
                <div className="tags_holder flex flex-wrap my-10 justify-between max-[900px]:justify-center">
                    {newlyAddedTags.map(tag => (
                        <div key={tag.id} className="tag newly flex items-center bg-gray-300 border border-white rounded-md p-2 min-w-[300px] h-[80px] my-0.5">
                            <img src={tag.image} alt="" className="w-10 h-10 mr-4" />
                            <div className="details_holder flex-1">
                                <h1 className="text-lg font-semibold">{tag.title}</h1>
                            </div>
                            <button className="outline-none bg-white border-none w-9 h-9 text-blue-600 rounded-full text-lg font-semibold">+</button>
                        </div>
                    ))}
                </div>
                <p id="light_heading" className="text-lg font-semibold mt-4 justify-between mr-4">All Tags</p>
                <div className="tags_holder flex flex-wrap justify-between mt-4 max-[900px]:justify-center">
                    {allTags.map(tag => (
                        <div key={tag.id} className="tag_card flex flex-col min-w-[300px] max-w-[300px] bg-white border border-gray-400 rounded-lg my-1">
                            <div className="color_holder yellow h-5 rounded-t-lg"></div>
                            <div className="details_holder p-4">
                                <h1 className="text-lg font-semibold">
                                    <span id="yellow" className="text-yellow-600">#</span>
                                    {tag.title}
                                </h1>
                                <p className="text-sm text-gray-600">{tag.description}</p>
                                <p id="light" className="text-sm text-gray-700">{tag.posts}</p>
                            </div>
                            <div className="card_footer px-4 py-2 flex justify-between">
                                <button className="bg-gray-300 border-none outline-none rounded-lg px-4 py-1 font-semibold">Follow</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TrendingTags;
