import { FC } from "react";
import { BsSearch } from "react-icons/bs";
import { TbStar, TbStarFilled } from "react-icons/tb";
import { TCitiesList } from "../types";

interface CitiesListProps {
  cities: TCitiesList[] | undefined | null;
  onChangeIsFavorite: (item: TCitiesList) => void;
}

const CitiesList: FC<CitiesListProps> = ({ cities, onChangeIsFavorite }) => {
  if (cities === null) return null;

  return (
    <>
      {cities && cities.length !== 0 ? (
        <ul className="absolute top-[72px] max-h-[300px] overflow-y-auto z-20 bg-white w-[312px] px-3 rounded-custom shadow-custom">
          {cities.map((item) => (
            <li
              key={item.id}
              className="flex items-center py-1 border-b last-of-type:border-none"
            >
              <p className="w-44">{item.name}</p>
              <button
                type="button"
                onClick={() =>
                  onChangeIsFavorite({ id: item.id, name: item.name })
                }
                className="button-main ml-auto"
              >
                {!JSON.parse(
                  localStorage.getItem("userCitiesList") || "[]"
                ).some((value: TCitiesList) => value.id === item.id) ? (
                  <TbStar size="20" />
                ) : (
                  <TbStarFilled size="20" />
                )}
              </button>
              <button type="button" className="button-main ml-1">
                <BsSearch size="20" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="absolute px-12 flex justify-center items-center top-[72px] h-[150px] overflow-y-auto z-20 bg-white w-[312px] rounded-custom shadow-custom">
          <p className="text-center">
            There is nothing here.
            <br /> Try entering an existing city in the search field
          </p>
        </div>
      )}
    </>
  );
};

export default CitiesList;
