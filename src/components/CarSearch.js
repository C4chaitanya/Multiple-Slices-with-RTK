import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

export default function CarSearch() {
  const dispatch = useDispatch();

  const searchValue = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTerm = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div>
      <div className="flex flex-row justify-between m-3 ">
        <h2 className="font-bold text-2xl">My Cars</h2>
        <div className="flex flex-row gap-3">
          <label className="mt-2 font-bold">Search</label>
          <input
            type="text"
            className="border p-2 text-sm rounded"
            placeholder="Enter Car name..."
            value={searchValue}
            onChange={handleSearchTerm}
          />
        </div>
      </div>
    </div>
  );
}
