import React from 'react';
import { connect } from 'react-redux'
import './ShopingCartTable.css';

const ShopingCartTable = ({ items, total, onDec, onInc, onDelete }) =>{

  const renderRow = (items, index) => {
    const { id, name, count, total } = items
    return(
      <tr key={id}>
    <td>{index + 1}</td>
    <td>{ name }</td>
    <td>{ count }</td>
    <td>{ total }</td>
    <td>
    <button 
      onClick={ () => onDelete(id) }
      className="btn btn-outline-danger btn-sm">
        <i className="fa fa-trash-o"></i>
    </button>
    <button 
      onClick={ () => onInc(id) }
      className="btn btn-outline-success btn-sm">
        <i className="fa fa-plus-circle"></i>
    </button>
    <button 
      onClick={ () => onDec(id) }
      className="btn btn-outline-warning btn-sm">
        <i className="fa fa-minus-circle"></i>
    </button>
  </td>
  </tr>
    )
  };
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
					{ items.map(renderRow)}
        </tbody>
      </table>

			<div className="total">
				Total: {total}
			</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    total: state.cartTotal
  }
};

const mapDispatchToProps = () => {
  return {
    onDec: () => console.log('decrease'),
    onInc: () => console.log('increment'),
    onDelete: () => console.log('delete')
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(ShopingCartTable);