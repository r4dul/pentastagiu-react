import React, { Component } from 'react';
import Header from './components/header/header'
import Menu from './components/header/menu/menu';
import Content from './content/content';

var data = [{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman","Year":"1989","imdbID":"tt0096895","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"},{"Title":"Batman Returns","Year":"1992","imdbID":"tt0103776","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{"Title":"Batman Forever","Year":"1995","imdbID":"tt0112462","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman & Robin","Year":"1997","imdbID":"tt0118688","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},{"Title":"The Lego Batman Movie","Year":"2017","imdbID":"tt4116284","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},{"Title":"Batman: The Animated Series","Year":"1992–1995","imdbID":"tt0103359","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNzI5OWU0MjYtMmMwZi00YTRiLTljMDAtODQ0ZGYxMDljN2E0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},{"Title":"Batman: Under the Red Hood","Year":"2010","imdbID":"tt1569923","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTdlODI0YTYtNjk5ZS00YzZjLTllZjktYmYzNWM4NmI5MmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"}];
//const url = 'http://www.omdbapi.com/?apikey=bf3ef3c5&s=batman&page=1';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.handleChangeTitle=this.handleChangeTitle.bind(this);
    this.displayInfo=this.displayInfo.bind(this);
    this.fetchURL=this.fetchURL.bind(this);

    this.state = {
      name: '',
      allData: data,
      title: '',
      url: "http://www.omdbapi.com/?apikey=bf3ef3c5&s=batman&page=1",
    }
  }
  handleClick(name){
    alert(name);
  }

  displayInfo(year) { 
    console.log(year);
  }

  fetchURL(link)
  {
    link = "http://www.omdbapi.com/?apikey=bf3ef3c5&s=x-men&page=1";
    console.log("linl");
    fetch(link).then(res => res.json())
    .then((out) => {
      console.log('Checkout this JSON! ', out);
    })
    .catch(err => { throw err });
 //     return console.log(data1);

  }

  handleChangeTitle(event){
    this.setState({title: event.target.value});
    console.log(event.target.value);
  }
  render() {
    const headerName = "My first react App";
    return (
      <div className="App">
        <Header headerName={headerName} />
        <Menu fetchURL={this.fetchURL} link={this.state.link}/>
        <Content 
        name={this.state.name} 
        handleClick={this.handleClick} 
        allData={this.state.allData} 
        title={this.state.title} 
        handleChangeTitle={this.handleChangeTitle}
        displayInfo={this.displayInfo}

        />
      </div>
    );
  }
}

export default App;
