import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps={
    pageSize : 6,
    category : 'general'
  }
  
  static propTypes={
    category : PropTypes.string,
  }
  
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);}

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1, 
     
    };
    
   document.title=`${this.capitalizeFirstLetter(this.props.category)}-MonkeyNews`
  }
async updateNews() {
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=8a9b3e9e49a042d99d7c5146016eef3b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults : parsedData.totalResults,
      loading:false
    });
}

  async componentDidMount() {
  
    this.updateNews();
  }

  previousbtn =  () => {
    this.setState({page:this.state.page-1})
    this.updateNews();

  }
  
  nextbtn =  () => {
    this.setState({page:this.state.page+1})
    this.updateNews();
  
  }
  

  render() {
    return (
      <div className="my-3 container">
        <h1 className="text-center"> Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <Newsitem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 80) : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                time={element.publishedAt}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between my-5">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.previousbtn}
            className="btn btn-dark"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            onClick={this.nextbtn}
            className="btn btn-dark"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
