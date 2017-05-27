import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import review from '../review.svg';
import { getReports, filterReports } from '../actions/index';
import CategoryCountBar from '../components/CategoryCountBar';
import CategoryCountPie from '../components/CategoryCountPie';
import RatingChart from '../components/RatingChart';
import CategoryYearlyStacked from '../components/CategoryYearlyStacked';
import { forIn, groupBy } from 'lodash';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import ReactGA from 'react-ga';

import '../assets/css/App.css';

const logPageView = () => {
  ReactGA.initialize('UA-100026494-1', { debug: true });
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.filterReports = this.filterReports.bind(this);
    logPageView();
  }
  componentWillMount() {
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
          <GitHubForkRibbon
            href="https://github.com/andyklimczak/TheReportOfTheWeek-client"
            target="_blank"
            position="right"
          >
            Fork me on GitHub!
          </GitHubForkRibbon>
          <div className="App-header">
            <img src={review} className="App-logo" alt="logo" />
            <h2>Report of The Report of the Week</h2>
            <p>
              Visualizations & graphs for youtuber <a href="https://www.youtube.com/user/TheReportOfTheWeek">The Report of the Week</a>
            </p>
            <div className="navigation">
            </div>
          </div>
          <div className="App-body">
            <h3>Reviews by Category</h3>
            <div className="category-count">
              <CategoryCountBar data={categoryCountValues} />
              <CategoryCountPie data={categoryCountValues} n={reports.length} />
            </div>
            <h3>Reviews by Rating</h3>
            <RatingChart data={ratingValues} categories={categories} filterReports={this.filterReports} />
            <h3>Reviews by Year</h3>
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
