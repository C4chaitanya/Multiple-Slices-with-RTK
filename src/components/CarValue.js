import { useSelector } from "react-redux";

export default function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return (
    <div className="flex flex-row justify-end m-3 p-2">
      <p className="font-bold text-xl">Total Cost: ${totalCost}</p>
    </div>
  );
}
