import { rankings } from "match-sorter";
import React, { useEffect, useState } from "react";
import { FaBookmark, FaShare } from "react-icons/fa";

const AllHome = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>


            {news.slice(0,6).map((singleNews, index) => (
                <div key={index}>
                    
                    <div className="flex justify-around items-center rounded-lg bg-gray-200  gap-12 mb-12  ">
                        <img className="w-12 rounded-full" src={singleNews.author.img} alt="" />
                        <div>
                            <h2 className="text-2xl">{singleNews.author.name}</h2>
                            <p>{singleNews.author.published_date}</p>
                        </div>
                        <div className="flex gap-3">
                            <p><FaBookmark></FaBookmark></p>
                            <p><FaShare></FaShare></p>
                        </div>
                    </div>


                    <h2 className="mb-4 text-xl">{singleNews.title}</h2>
                    <img className="w-full" src= {singleNews.thumbnail_url} alt="" />
                    <p>{singleNews.details.slice(0,200)}</p>
                    
                    <div className="flex items-center justify-between my-6">
                        <p>Rating: {singleNews.rating.number}</p>
                        <p>{singleNews.rating.badge}</p>
                        <p> Total Veiw: {singleNews.total_view}</p>

                    </div>

                </div>
            ))}
        </div>
    );
};

export default AllHome;
