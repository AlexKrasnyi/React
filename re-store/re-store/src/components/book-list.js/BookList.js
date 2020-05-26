import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import Loader from '../loader'
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import BookListItem from '../book-list-item.js';
import './BookList.css';

class BookList extends Component {

	componentDidMount() {
		const { bookstoreService, booksLoaded } = this.props;
		bookstoreService.getBooks()
		.then((data) => booksLoaded(data));

	};

	render() {
		const { books, loading } = this.props;
		if(loading) {
			return <Loader />
		}

		return (
			<ul className="book-list">
				{ books.map((book) => {
					return (
						<li key={book.id}>
							<BookListItem book={book} />
						</li>
					);
				} ) }
			</ul>
		)
	};
};

const mapStateToProps = (state) => {
	return  { 
		books: state.books,
		loading: state.loading 
	}
};

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({ booksLoaded }, dispatch)
// };
const mapDispatchToProps = { booksLoaded }

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
