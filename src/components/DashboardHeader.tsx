"use client";
import Image from "next/image";
import { BsListStars } from "react-icons/bs";
import CitiesList from "./CitiesList";
import { getCities } from "../api";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { TCitiesList } from "../types";

const DashboardHeader = () => {
  const [input, setInput] = useState("");
  const [cities, setCities] = useState<null | TCitiesList[]>(null);
  const [isUserCitiesList, setIsUserCitiesList] = useState(false);

  const getCitiesResult = async () => {
    const data = await getCities(input);
    if (data.results) {
      const result = data.results.map((item: TCitiesList) => {
        return { id: item.id, name: item.name };
      });
      setCities(result);
    } else {
      if (!isUserCitiesList) {
        setCities([]);
      }
      if (input === "" && !isUserCitiesList) {
        setCities(null);
      }
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("userCitiesList")) {
      localStorage.setItem("userCitiesList", "[]");
    }
  }, []);

  useEffect(() => {
    getCitiesResult();
  }, [input]);

  const onChangeIsFavorite = (item: TCitiesList) => {
    let newList;
    const storedCities = localStorage.getItem("userCitiesList");
    const oldList = storedCities ? JSON.parse(storedCities) : null;

    if (oldList.some((value: TCitiesList) => value.id === item.id)) {
      newList = [
        ...oldList.filter((value: TCitiesList) => value.id !== item.id),
      ];
    } else {
      newList = [item, ...oldList];
    }
    localStorage.setItem("userCitiesList", JSON.stringify(newList));

    if (isUserCitiesList) {
      setCities(newList);
    } else {
      getCitiesResult();
    }
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
    <div className="w-full  mb-2 flex gap-2 justify-between items-end">
      <Image
        src="/logo.png"
        alt="Weather app Logo"
        priority
        width={230}
        height={0}
      />
      <div className="relative">
        <div className="flex gap-2 p-3 background-main">
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
            className="bg-white w-60 px-2 rounded-custom shadow-custom h-10 outline-none"
          />
          <button
            type="button"
            onClick={onToggleIsFavorite}
            className={`button-main ${twMerge(
              isUserCitiesList ? "button-active" : null
            )}`}
          >
            <BsListStars size="26" />
          </button>
        </div>
        <CitiesList cities={cities} onChangeIsFavorite={onChangeIsFavorite} />
      </div>
    </div>
  );
};

export default DashboardHeader;
