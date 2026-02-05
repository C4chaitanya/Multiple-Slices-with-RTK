import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slices/carsSlice";

export default function CarList() {
  const dispatch = useDispatch();

  const { carsList, name } = useSelector(
    ({ form, cars: { data, searchTerm } }) => {
      const filteredCars = data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      return {
        carsList: filteredCars,
        name: form.name,
      };
    },
  );

  const handleDeleteCar = (id) => {
    dispatch(removeCar(id));
  };

  const renderedCars = carsList?.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    console.log("bold value", bold);

    return (
      <li
        key={car.id}
        className={`border p-3 m-3 flex flex-row justify-between rounded ${bold && "font-bold"}`}
      >
        {car.name} - ${car.cost}
        <span>
          <button
            className="border rounded text-white bg-blue-500 p-2 w-30 text-sm"
            onClick={() => handleDeleteCar(car.id)}
          >
            Delete
          </button>
        </span>
      </li>
    );
  });

  return <div>{renderedCars}</div>;
}
