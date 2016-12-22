import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FlashMessages from './common/FlashMessages';
import logo from '../logo.svg';
import { getReports, filterReports } from '../actions/index';
import CategoryCountBar from '../components/CategoryCountBar';
import CategoryCountPie from '../components/CategoryCountPie';
import RatingChart from '../components/RatingChart';
import { forIn, groupBy } from 'lodash';

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
    const categoryCount = [];
    const grouping = groupBy(reports, 'category');
    forIn(grouping, (v, k) => {
      categoryCount.push({category: k, count: v.length});
    });
    return categoryCount;
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
  getCategories(reports) {
    const c = reports.map(report => {
      return report.category;
    });
    return Array.from(new Set(c));
  }
  render() {
    const { reports, filteredReports } = this.props;
    if(reports.length > 1) {
      const categoryCountValues = this.computeCategoryCountValues(reports);
      const ratingValues = this.computeRatingValues(filteredReports);
      const averageReviewRating = this.computeAverageReviewRating(ratingValues);
      const categories = this.getCategories(reports);
      return (
        <div className="App">
          <FlashMessages />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Redux Starter v2!</h2>
            <div className="navigation">
              {categories.map((category, i) => {
                return <button onClick={this.filterReports} className="btn btn-primary" value={category} key={i}>{category}</button>;
              })}
              <button onClick={this.filterReports} className="btn btn-primary" value="Reset">Reset</button>
            </div>
          </div>
          <div className="App-body">
            <div className="category-count">
              <CategoryCountBar data={categoryCountValues} />
              <CategoryCountPie data={categoryCountValues} />
            </div>
            <RatingChart data={ratingValues} averageRating={averageReviewRating} />
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
