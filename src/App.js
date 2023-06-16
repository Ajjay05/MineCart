import "./styles.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListAction, typeSearch, vendorSearch } from "./redux/action";
import { addItems } from "./redux/action";
import { deleteData } from "./redux/action";

export default function App() {
  const selector = useSelector((state) => state);

  const [input, setInput] = useState({
    itemName: "",
  vendorName: "",
    itemPrice: "",
    itemImage: ""
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAction());
  }, []);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput({ ...input, [name]: value });
  };

  const onClickHandler = () => {
    dispatch(addItems(input));
    setInput({
      itemName: "",
    vendorName: "",
      itemPrice: "",
      itemImage: ""
    })
  };

  const deleteHandler = (index) => {
    dispatch(deleteData(index));
  };


  const vendorChangeHandler=(e)=>{

    let value=e.target.value
  
    dispatch(vendorSearch(value))
  }

 const typeChangeHandler=(e)=>{
  let value=e.target.value
  
    dispatch(typeSearch(value))
  }






  return (
    <div className="App">
    


      <div className="form-div">
        <h1 className="addProductText">Add New Product</h1>
        <div>
          <div className="input-sections">
            {/* <label>Product Name </label> */}
            <input
              type="text"
              name="itemName"
              onChange={onChangeHandler}
              value={input.itemName}
              className="inputs"
              placeholder="Item Name"

            />
          </div>

          <div className="input-sections">
            {/* <label>Description </label> */}
            <input
              type="text"
              name="vendorName"
              onChange={onChangeHandler}
              value={input.vendorName}
              className="inputs"
              placeholder="Vendor Name"

            />
          </div>

          <div className="input-sections">
            {/* <label>Price </label> */}
            <input
              type="number"
              name="itemPrice"
              onChange={onChangeHandler}
              value={input.itemPrice}
              className="inputs"
              placeholder="Price"
            />
          </div>

          <div className="input-sections">
            {/* <label>Image </label> */}
            <input
              type="text"
              name="itemImage"
              onChange={onChangeHandler}
              value={input.itemImage}
              placeholder="Paste Image URL Here"
              className="inputs"
            />
          </div>
        </div>

        <button className="addBtn" onClick={onClickHandler}>Add Item</button>
      </div>

<div className="sorting-section">
<select name="Vendor" id="Vendor" className="select-box" onChange={vendorChangeHandler}>
<option value="" disabled selected>Vendor</option>
    <option value="Shree Textiles">Shree Textile</option>
    <option value="Crown Ltd.">Crown Ltd.</option>
    <option value="Lucky Goods">Lucky Goods</option>
  
  </select>
  
  <select name="Type" id="Type" className="select-box" onChange={typeChangeHandler}>
<option value="" disabled selected>Type</option>

    <option value="Shoes">Shoes</option>
    <option value="Furniture">Furniture</option>
    <option value="Laptop">Laptop</option>
    
    
  </select>
  

</div>

      <ul class="card-list">
        {selector?.rootReducers?.productList?.data?.map((val, index) => {
        
          return (
            <>
           <>
              <li class="card">
                <img src={val?.img} alt="img" className="product-image" />
                <h2>Name:- {val?.productName}</h2>
                <h2>Price:- {val?.price}</h2>


                {/* 
                <p>Description:- {val?.description}</p>
                <p>Price:- {val?.price} </p> */}
                <button
             className="card-list-btn"
                  onClick={() => deleteHandler(index)}
                >
                  Delete
                </button>
              </li>
              </>
            </>
          );
        })}
      </ul>
     { selector?.rootReducers?.productList?.data?.length===0 &&   <div><h1>You need to Refresh  the Page</h1>  </div>
     } 
    </div>
  );
}
