import React from 'react';
import { connect } from 'react-redux';
import FetchAuthors from '../../../actions/fetchAuthors'
import { AuthorListComponent } from '../components/AuthorListComponent'

class AuthorListContainer extends React.Component{
  componentDidMount() {
    this.props.FetchAuthors();
  }
  render(){
    return(
      <AuthorListComponent authors={this.props.authors} />
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.authors.isFetching,
  isError: state.authors.isError,
  errorMessage: state.authors.errorMessage,
  authors: state.authors.authors,
});

export default connect(
  mapStateToProps,
  { FetchAuthors }
)(AuthorListContainer);
