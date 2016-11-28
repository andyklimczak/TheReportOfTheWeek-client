import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FlashMessages from './common/FlashMessages';
import logo from '../logo.svg';
import { getReports, filterReports } from '../actions/index';
import CategoryCount from '../components/CategoryCount';
import RatingChart from '../components/RatingChart';
import AverageRating from '../components/AverageRating';

import '../assets/css/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.filterReports = this.filterReports.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReports());
  }
  computeCategoryCountValues(reports) {
    const categoryCount = {};
    reports.forEach(report => {
      categoryCount[report.category] = categoryCount[report.category] + 1 || 1;
    });
    const categoryCountData = [];
    for(var v in categoryCount) {
      categoryCountData.push({category: v, count: categoryCount[v]});
    }
    return categoryCountData;
  }
  computeRatingValues(reports) {
    return reports.filter(report => {
      return report.rating;
    });
  }
  computeAverageReviewRating(reports) {
    return reports.reduce((sum, report) => {
      return report.rating + sum;
    }, 0) / reports.length;
  }
  filterReports(e) {
    const { dispatch } = this.props;
    dispatch(filterReports(e.target.value));
  }
  render() {
    const { reports, filteredReports } = this.props;
    if(reports.length > 1) {
      const categoryCountValues = this.computeCategoryCountValues(reports);
      const ratingValues = this.computeRatingValues(filteredReports);
      const averageReviewRating = this.computeAverageReviewRating(ratingValues);
      return (
        <div className="App">
          <FlashMessages />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Redux Starter v2!</h2>
            <div className="navigation">
              <button onClick={this.filterReports} className="btn btn-primary" value="Energy Crisis">Energy Crisis</button>
              <button className="btn btn-primary">Reset</button>
            </div>
          </div>
          <div className="App-body">
            <CategoryCount data={categoryCountValues} />
            <AverageRating averageRating={averageReviewRating} count={ratingValues.length} />
            <RatingChart data={ratingValues} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          Loading...
        </div>
      );
    }
  }
}

App.propTypes = {
  children: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  reports: PropTypes.array,
  filteredReports: PropTypes.array
};

function mapStateToProps(state) {
  return {
    reports: state.reports.reports,
    filteredReports: state.reports.filteredReports
  };
}

export default connect(mapStateToProps)(App);
