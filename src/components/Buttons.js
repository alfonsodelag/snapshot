import React from "react";

function Buttons(props) {
  const { filterBtnState, setFilterBtnState } = props;

  return (
    <div>
      <div className="flex justify-between mt-5">
        <button
          onClick={() => {
            setFilterBtnState("Mountain");
          }}
          className="text-white rounded-md p-2"
          style={{ backgroundColor: "#051C33" }}
        >
          Mountain
        </button>
        <button
          onClick={() => {
            setFilterBtnState("Beaches");
          }}
          className="text-white rounded-md p-2"
          style={{ backgroundColor: "#051C33" }}
        >
          Beaches
        </button>
        <button
          onClick={() => {
            setFilterBtnState("Birds");
          }}
          className="text-white rounded-md p-2"
          style={{ backgroundColor: "#051C33" }}
        >
          Birds
        </button>
        <button
          onClick={() => {
            setFilterBtnState("Food");
          }}
          className="text-white rounded-md p-2"
          style={{ backgroundColor: "#051C33" }}
        >
          Food
        </button>
      </div>
      <h1 className="text-center mt-10">
        {filterBtnState && filterBtnState + " Images"}
      </h1>
    </div>
  );
}

export default Buttons;
