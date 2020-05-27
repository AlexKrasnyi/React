import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import Loader from '../loader'
import ErrorIndicator from '../error-indicator'
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAdded } from '../../actions';
import BookListItem from '../book-list-item.js';
import './BookList.css';

const BookList = ({ books, onAddedBook}) => {
	return (
		<ul className="book-list">
			{ books.map((book) => {
				return (
					<li key={book.id}>
						<BookListItem book={book} onAddedBook={() => onAddedBook(book.id)} />
					</li>
				);
			} ) }
		</ul>
	);
}


class BookListComponent extends Component {

	componentDidMount() {
		this.props.fetchBooks()
		// const { 
		// 	bookstoreService, 
		// 	booksLoaded, 
		// 	booksUpdated, 
		// 	booksError } = this.props;
		
		// 	booksUpdated()
		// bookstoreService.getBooks()
		// .then((data) => {booksLoaded(data)})
		// .catch((e) => booksError(e) );

	};

	render() {
		const { books, loading, error, onAddedBook } = this.props;
		if(loading) {
			return <Loader />
		};

		if(error) {
			return <ErrorIndicator />
		}

		return <BookList books={books} onAddedBook={onAddedBook}/>
	};
};

const mapStateToProps = (state) => {
	return  { 
		books: state.books,
		loading: state.loading,
		error: state.error
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({ booksLoaded }, dispatch)
// };
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
	return {
		fetchBooks: fetchBooks(dispatch, bookstoreService),
		onAddedBook: (id) => dispatch(bookAdded(id))
	};
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListComponent));
