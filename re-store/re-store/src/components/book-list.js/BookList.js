import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import { withBookstoreService } from '../hoc'
import { booksLoaded } from '../../actions'
import BookListItem from '../book-list-item.js';

class BookList extends Component {

	componentDidMount() {
		const { bookstoreService } = this.props;
		const data = bookstoreService.getBooks();
		
		this.props.booksLoaded(data);
	};

	render() {
		const { books } = this.props;
		return (
			<ul>
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
		books: state.books 
	}
};

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({ booksLoaded }, dispatch)
// };
const mapDispatchToProps = { booksLoaded }

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
