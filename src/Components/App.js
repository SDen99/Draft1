import React, { Component, Fragment } from 'react';
import './App.css';
import {Header, Footer} from './Layouts/Index'
import Reports from '../Reports'
import {domain, reports} from '../Store2'


class App extends Component {
  state = {
    report: {},
    reports
  }

  getReportsByDomain(){
    const initReports = domain.reduce((reports, category) => ({
        ...reports,
        [category]:[]
    }), {})

    return Object.entries(this.state.reports.reduce((reports, report) => {
        const {domain} = report;

        reports[domain] = reports[domain]
          ? [...reports[domain], report] 
          : [report]

        return reports
      }, initReports)
    )
  }
  
  handleCategorySelect = category => 
    this.setState({
       category
    })

  handleReportSelect = id => 
    this.setState(({reports}) => ({
       report: reports.find(r => r.id === id),
       editMode: false
    }))

  handleReportCreate = report =>
     this.setState(({reports}) => ({
       reports: [
         ...reports,
         report
       ]
     }))

  handleReportDelete = id =>
    this.setState(({reports, report, editMode})  => ({
      reports: reports.filter(r => r.id !== id),
      editMode: report.id === id ? false:editMode,
      report: report.id === id ? {} :report   
    }))
  
  handleReportSelectEdit = id =>
    this.setState(({reports}) => ({
      report: reports.find(r => r.id === id),
      editMode: true    
    }))

  handleReportEdit = report =>
    this.setState(({reports}) => ({
      reports: [
        ...reports.filter(r => r.id !== report.id),
      report
      ],
      report
    }))

  handleBlockCreate = (report, block) =>
    this.setState(({reports}) => ({
      reports: [
        ...reports.filter(r => r.id !== report.id),
      report.push(block)
      ],
      report
    }))

  render() {
    const reports = this.getReportsByDomain(),
          {category, report, editMode} = this.state
 
    return (
      <Fragment>
        <Header
          domains={domain} 
          onReportCreate={this.handleReportCreate}
        />

        <Reports
           report = {report}
           category={category}
           reports={reports}
           domains = {domain}
           editMode={editMode}
           onSelect={this.handleReportSelect}
           onDelete={this.handleReportDelete}
           onSelectEdit={this.handleReportSelectEdit}
           onEdit={this.handleReportEdit}
           />

        <Footer
          category = {category}
          domains={domain}
          onSelect={this.handleCategorySelect}
          />
      </Fragment>
    );
  }
}

export default App;
