import React from "react";
import useCollection from "../hooks/useCollection";
import Spinner from "../components/Spinner";

function Home() {
  const { documents, isPending } = useCollection("foods");
  console.log(documents);
  return (
    <div className="max-container py-5">
      <div className="flex justify-center items-center m-auto z-10">{isPending && <Spinner />}</div>
      {documents &&
        documents.map((doc) => {
          const { id, title, ingredient, images, cookingTime, method, time } =
            doc;
          return (
            <li
              className="bg-gray-400 max-w-[400px] list-none p-6 rounded-lg text-white"
              key={id}
            >
              <div className="mb-5">
                <div className="flex items-center justify-between mb-5">
                  <h2>Title: {title}</h2>
                  <h2>Date: {time}</h2>
                </div>
                <h3>Cooking time: {cookingTime}</h3>
                <h4>Ingredinets: {ingredient}</h4>
              </div>
              <div className="flex items-center gap-5 mb-5">
                {images.map((img) => {
                  return (
                    <img
                      key={img}
                      className="w-40 h-40 rounded-lg object-cover"
                      src={img}
                      alt=""
                    />
                  );
                })}
              </div>
              <div>
                <p>Method: {method}</p>
              </div>
            </li>
          );
        })}
    </div>
  );
}

export default Home;
