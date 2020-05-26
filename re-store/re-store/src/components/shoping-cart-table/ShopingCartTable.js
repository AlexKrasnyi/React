import React from 'react';
import './ShopingCartTable.css';

const ShopingCartTable = () =>{
  return (
    <div className="shoping-cart-table">
      <h2>You Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
					<tr>
            <td>1</td>
            <td>Мастер и Маргарита</td>
            <td>2</td>
            <td>$25</td>
            <td>
            <button className="btn btn-outline-danger btn-sm">
							<i className="fa fa-trash-o"></i>
            </button>
            <button className="btn btn-outline-success btn-sm">
							<i className="fa fa-plus-circle"></i>
            </button>
            <button className="btn btn-outline-warning btn-sm">
							<i className="fa fa-minus-circle"></i>
            </button>
          </td>
					</tr>
        </tbody>
      </table>

			<div className="total">
				Total: $201
			</div>
    </div>
  );
};

export default ShopingCartTable;