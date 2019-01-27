import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../stores/actions/Movies';

import '../styles/Home.scss';

class Home extends Component {
  componentDidMount() {
    const { fetchNowPlayingMovies } = this.props;
    fetchNowPlayingMovies();
  }

  render() {
    return (
      <div className="home">
        <div className="mt-5">This is Home</div>
      </div>
    );
  }
}

Home.propTypes = {
  fetchNowPlayingMovies: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNowPlayingMovies
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
