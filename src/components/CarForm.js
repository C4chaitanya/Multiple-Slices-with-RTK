import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store"; // Adjust the path based on where your action is defined

export default function CarForm() {
  const dispatch = useDispatch();

  const { carName, carCost } = useSelector((state) => {
    return {
      carName: state.form.name,
      carCost: state.form.cost,
    };
  });

  const handleCarNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCarValueChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCar({
        name: carName,
        cost: carCost,
      }),
    );
  };

  return (
    <div>
      <p className="font-bold text-2xl m-3">Add Car</p>
      <form className="flex flex-row gap-3 border m-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 p-3">
          <label>Car Name</label>
          <input
            className="border rounded p-1"
            type="text"
            value={carName}
            onChange={handleCarNameChange}
            placeholder="Enter Car Name"
          />
        </div>
        <div className="flex flex-col gap-2 p-3">
          <label>Car Value</label>
          <input
            className="border rounded p-1"
            type="number"
            value={carCost || ""}
            onChange={handleCarValueChange}
            placeholder="Enter Car Value"
          />
        </div>
        <div className="flex flex-col gap-2 p-10">
          <button className="border rounded bg-blue-500 text-white p-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
