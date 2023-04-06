import React from "react";
import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import AddInput from './AddInput';
import Task from './Task';

function ShopListComponent() {
  const { dummyData, setDummyData } = useContext(DataContext);

  function addItem() {
    console.log("add item");
  }

  function deleteItem() {
    console.log("delete item");
  }

  return (
    <div className="shop-container">
      <h3>Shop List</h3>
      {dummyData.shopList.map(
        (task, index) => <Task {...task} action={deleteItem} key={index} />
      )}
      <AddInput action={addItem} txt="Add item..." />
    </div>
  );
}

export default ShopListComponent;
