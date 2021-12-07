import React, { Component } from "react";
import ReactDOM from "react-dom";
import PDF from "react-pdf-js";

import samplePDF from "./somefile.pdf";

export default class PdfViewer extends Component {
  state = {};
  handlePrevious = this.handlePrevious.bind(this);
  handleNext = this.handleNext.bind(this);
  onDocumentComplete = this.onDocumentComplete.bind(this);

  onDocumentComplete(pages) {
    this.setState({ page: 1, pages });
  }

  handlePrevious() {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext() {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination() {
    return (
      <>
        <button onClick={this.handlePrevious}>&lt;</button>
        <button onClick={this.handleNext}>&gt;</button>
      </>
    );
  }

  render() {
    let pagination = null;

    if (this.state.pages) {
      pagination = this.renderPagination();
    }
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <PDF
          file={samplePDF}
          page={this.state.page}
          scale={1.5}
          onDocumentComplete={this.onDocumentComplete}
        />
        {pagination}
      </div>
    );
  }
}
