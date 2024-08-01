import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
interface Image {
  urls: {
    regular: string;
  };
}
interface UnsplashResponse {
  results: Image[];
}
interface GalleryProps {
  searchTerm: string;
}
const Gallery: React.FC<GalleryProps> = ({ searchTerm }) => {
  const [queryTerm, setQueryTerm] = useState(searchTerm || "nature");

  const fetchImages = async (search: string): Promise<UnsplashResponse> => {
    const url = `https://api.unsplash.com/search/photos?page=1&per_page=10&query=${search}`;
    try {
      const result = await axios.get(url, {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
        },
      });
      return result.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      return {} as UnsplashResponse;
    }
  };

  const { data, isLoading, error, isError, refetch } = useQuery(
    ["gallery", queryTerm],
    () => fetchImages(queryTerm),
    {
      enabled: !!queryTerm,
    }
  );

  useEffect(() => {
    if (searchTerm) {
      setQueryTerm(searchTerm);
      refetch();
    }
  }, [searchTerm, refetch]);

  if (isLoading) {
    return (
      <div className="text-lg font-bold h-[100vh] flex items-center justify-center dark:text-white ">
        Loading...
      </div>
    );
  }

  if (isError) {
    return <div>Error: {String(error)}</div>;
  }

  if (!data || data.results.length < 1) {
    return (
      <div className="text-lg font-bold h-[100vh] flex items-center justify-center dark:text-white capitalize ">
        No images found.
      </div>
    );
  }

  return (
    <div className="dark:text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-blue-400 dark:bg-gray-800">
      {data.results.map((e) => {
        const url = e?.urls?.regular;
        return (
          <div
            key={url}
            className="w-full h-60 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700"
          >
            <img className="w-full h-full object-cover" src={url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
