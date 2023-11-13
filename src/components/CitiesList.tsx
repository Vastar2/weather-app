import { FC } from "react";
import { TbStar, TbStarFilled } from "react-icons/tb";
import { TCitiesList } from "../types";

interface CitiesListProps {
  cities: TCitiesList[] | undefined | null;
  onChangeIsFavorite: (item: TCitiesList) => void;
  onSetCurrentCity: (city: TCitiesList) => void;
}

const CitiesList: FC<CitiesListProps> = ({
  cities,
  onChangeIsFavorite,
  onSetCurrentCity,
}) => {
  if (cities === null) return null;

  return (
    <>
      {cities && cities.length !== 0 ? (
        <ul className="absolute top-[72px] max-h-[300px] overflow-y-auto z-20 bg-white w-full rounded-custom shadow-custom">
          {cities.map((item) => (
            <li key={item.id} className="w-full h-full">
              <button
                className="w-full h-full flex items-center py-1 px-3 border-b last-of-type:border-none cursor-pointer duration-300 hover:bg-gray-100"
                onClick={(e) =>
                  e.target === e.currentTarget && onSetCurrentCity(item)
                }
              >
                <p className="w-44 text-left">{item.name}</p>
                <button
                  type="button"
                  onClick={() =>
                    onChangeIsFavorite({
                      id: item.id,
                      name: item.name,
                      latitude: item.latitude,
                      longitude: item.longitude,
                    })
                  }
                  className="button-main ml-auto"
                >
                  {!JSON.parse(
                    localStorage.getItem("userCitiesList") || "[]"
                  ).some((value: TCitiesList) => value.id === item.id) ? (
                    <TbStar size="20" />
                  ) : (
                    <TbStarFilled size="20" className="text-yellow-400" />
                  )}
                </button>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="absolute px-12 flex justify-center items-center top-[72px] h-[150px] overflow-y-auto z-20 bg-white w-full rounded-custom shadow-custom">
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
