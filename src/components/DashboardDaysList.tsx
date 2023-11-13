import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface DashboardDaysListProps {
  chosenDay: null | string;
  onsetChosenDay: (day: null | string) => void;
}

const DashboardDaysList: FC<DashboardDaysListProps> = ({
  chosenDay,
  onsetChosenDay,
}) => {
  return (
    <div className="w-full mb-2">
      <ul className="flex gap-2">
        {[...Array(6).keys()].map((item) => {
          const currentDate = new Date();
          const day = `${currentDate.getFullYear()}-${
            currentDate.getMonth() + 1
          }-${currentDate.getDate() + item}`;

          return (
            <li
              key={item}
              className={`flex-1 background-main ${twMerge(
                chosenDay !== day
                  ? "duration-300 opacity-50 hover:opacity-100"
                  : null
              )}`}
            >
              <button
                className="py-2 w-full h-full"
                type="button"
                value={day}
                onClick={(e) => onsetChosenDay(e.currentTarget.value)}
              >
                {item ? `${day.split("-")[2]}.${day.split("-")[1]}` : "Now"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardDaysList;
