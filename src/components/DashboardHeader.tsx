"use client";
import Image from "next/image";
import { BsListStars } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import CitiesList from "./CitiesList";
import { getCities } from "../../app/api";
import { FC, useState, useEffect, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { TCitiesList } from "../types";

interface DashboardHeaderProps {
  onSetCurrentCity: (city: TCitiesList) => void;
}

const DashboardHeader: FC<DashboardHeaderProps> = ({ onSetCurrentCity }) => {
  const [input, setInput] = useState("");
  const [cities, setCities] = useState<null | TCitiesList[]>(null);
  const [isUserCitiesList, setIsUserCitiesList] = useState(false);

  const getCitiesResult = useCallback(async () => {
    const data = await getCities(input);
    if (data.results) {
      const result = data.results.map((item: TCitiesList) => {
        return {
          id: item.id,
          name: item.name,
          latitude: item.latitude,
          longitude: item.longitude,
        };
      });
      setCities(result);
    } else {
      !isUserCitiesList && setCities([]);
      input === "" && !isUserCitiesList && setCities(null);
    }
  }, [input, isUserCitiesList]);

  useEffect(() => {
    if (!localStorage.getItem("userCitiesList")) {
      localStorage.setItem("userCitiesList", "[]");
    }
  }, []);

  useEffect(() => {
    getCitiesResult();
  }, [input, getCitiesResult]);

  const onChangeIsFavorite = (item: TCitiesList) => {
    let newList;
    const storedCities = localStorage.getItem("userCitiesList");
    const oldList = storedCities ? JSON.parse(storedCities) : null;

    newList = oldList.some((value: TCitiesList) => value.id === item.id)
      ? [...oldList.filter((value: TCitiesList) => value.id !== item.id)]
      : (newList = [item, ...oldList]);

    localStorage.setItem("userCitiesList", JSON.stringify(newList));

    isUserCitiesList ? setCities(newList) : getCitiesResult();
  };

  const onToggleIsFavorite = () => {
    if (isUserCitiesList) {
      setIsUserCitiesList(false);
      setCities(null);
    } else {
      setIsUserCitiesList(true);
      setInput("");
      const storedCities = localStorage.getItem("userCitiesList");
      setCities(storedCities ? JSON.parse(storedCities) : null);
    }
  };

  return (
    <div>
      <Image
        src="/logo.png"
        alt="Weather app Logo"
        priority
        width={160}
        height={0}
        className="block mb-4 ml-auto mr-auto"
      />
      <div className="w-full mb-4 flex gap-2 justify-between items-end">
        <div className="relative flex-1">
          <div className="flex gap-2 p-3 background-main">
            <div className="relative flex items-center flex-1">
              <input
                type="text"
                placeholder="Your city"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                onClick={() => {
                  if (isUserCitiesList) {
                    setIsUserCitiesList(false);
                    setCities(null);
                  }
                }}
                value={input}
                className="bg-white w-60 px-2 flex-1 rounded-custom shadow-custom h-10 outline-none"
              />
              {input && (
                <button
                  type="button"
                  onClick={() => {
                    setInput("");
                    setCities(null);
                    setIsUserCitiesList(false);
                  }}
                  className="absolute right-2"
                >
                  <AiFillCloseSquare
                    size="26"
                    className="text-gray-300 duration-300 hover:text-gray-400"
                  />
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={onToggleIsFavorite}
              className={twMerge(
                "button-main",
                isUserCitiesList ? "button-active" : null
              )}
            >
              <BsListStars size="26" />
            </button>
          </div>
          <CitiesList
            cities={cities}
            onChangeIsFavorite={onChangeIsFavorite}
            onSetCurrentCity={(city) => {
              onSetCurrentCity(city);
              setCities(null);
              setInput("");
              setIsUserCitiesList(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
