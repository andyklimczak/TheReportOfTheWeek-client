import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FlashMessages from './common/FlashMessages';
import logo from '../logo.svg';
import { getReports, filterReports } from '../actions/index';
import CategoryCountBar from '../components/CategoryCountBar';
import CategoryCountPie from '../components/CategoryCountPie';
import RatingChart from '../components/RatingChart';
import CategoryYearlyStacked from '../components/CategoryYearlyStacked';
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
  findYear(report) {
    return new Date(report.dateReleasedUnix).toISOString().slice(0, 4);
  }
  getCategory(report, reports) {
    if(!(report.category in reports)) {
      reports[report.category] = 0;
    }
    reports[report.category] += 1;
    return reports;
  }
  yearSplit(reports) {
    // TODO clean up somehow
    const object = reports.reduce((obj, x) => {
      const reportYear = this.findYear(x);
      if(!(reportYear in obj)) {
        obj[reportYear] = {};
      }
      obj[reportYear] = (this.getCategory(x, obj[reportYear]));
      return obj;
    }, {});

    return Object.keys(object).map(key => {
      return { year: key, ...object[key] };
    });
  }
  render() {
    const { reports, filteredReports } = this.props;
    if(reports.length > 1) {
      const categoryCountValues = this.computeCategoryCountValues(reports);
      const ratingValues = this.computeRatingValues(filteredReports);
      const categories = this.getCategories(reports);
      const yearSplit = this.yearSplit(reports);
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
            <RatingChart data={ratingValues} />
            <CategoryYearlyStacked data={yearSplit} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          Fetching & Parsing Reports...
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
