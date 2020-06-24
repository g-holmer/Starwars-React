import React, { Component } from "react";
import axios from "axios";
import Characters from "../../Components/Characters/Characters";
import CharacterInfo from "../../Components/Characters/Character/CharacterInfo/CharacterInfo";
import Pagination from "../../Components/Pagination";
import classes from "./StarwarsBuilder.css";
import Search from "../../Components/Search";
// import NothingFound from "../../Components/NothingFound/NothingFound";

class StarwarsBuilder extends Component {
  state = {
    characters: [],
    preArray: [],
    charactersAll: [],
    characterInfo: {
      name: "",
      gender: "",
      height: 0,
      skin_color: "",
      mass: 0,
      homeworld: "",
      hair_color: "",
      films: [],
    },
    data: [],
    showCharacterInfo: false,
    filteredCharacters: [],
    nothingFound: false,
  };
  componentDidMount() {
    let url = "https://swapi.dev/api/people/?page=";
    this.fetchAPIData(url);
    this.fetchAllAPIData();
  }

  fetchAllAPIData() {
    const list = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const promises = list.map(
      (number) =>
        new Promise((resolve) => {
          var url = "https://swapi.dev/api/people/?page=" + number;
          axios
            .get(url)
            .then((response) => {
              resolve(response.data.results);
            })
            .catch((error) => console.log(error));
        })
    );
    Promise.all(promises).then((results) => {
      this.setState({ preArray: results });
      let floors = [...this.state.charactersAll];
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 9; j++) {
          floors.push(this.state.preArray[j][i]);
        }
      }
      var filtered = floors.filter(function (el) {
        return el != null;
      });
      this.setState({ charactersAll: filtered });
    });
  }
  fetchAPIData(url) {
    this.setState({ loading: true }, () => {
      axios
        .get(url)
        .then((response) => {
          this.setState({
            data: response.data,
            loading: false,
            characters: response.data.results,
          });
        })
        .catch((error) => console.log(error));
    });
  }
  nextPageHandler = () => {
    if (this.state.data.next !== null) {
      let url = this.state.data.next;
      var position = 6;
      var output = [url.slice(4, position), url.slice(position)].join("");
      const https = "https" + output;

      this.fetchAPIData(https);
    }
  };
  previousPageHandler = () => {
    if (this.state.data.previous !== null) {
      let url = this.state.data.previous;

      var position = 6;
      var output = [url.slice(4, position), url.slice(position)].join("");
      const https = "https" + output;

      this.fetchAPIData(https);
    }
  };
  filterCharactersHandler = (event) => {
    const searchFor = event.target.value.toLowerCase();
    const filtered = this.state.charactersAll.filter((item) => {
      return item.name.toLowerCase().includes(searchFor);
    });
    // if (!filtered.length) {
    //   this.setState({ NothingFound: true });
    // }

    this.setState({ characters: filtered });
    if (searchFor === "") {
      let str = this.state.data.next;
      let res = str.replace(/\D/g, "");
      let page = res - 1;
      this.fetchAPIData("https://swapi.dev/api/people/?page=" + page);
    }
  };

  showInfoHandler = (index) => {
    const name = this.state.characters[index].name;
    const gender = this.state.characters[index].gender;
    const height = this.state.characters[index].height;
    const skin_color = this.state.characters[index].skin_color;
    const mass = this.state.characters[index].mass;
    const homeworld = this.state.characters[index].homeworld;
    const hair_color = this.state.characters[index].hair_color;
    const doesShow = this.state.showCharacterInfo;
    const films = this.state.characters[index].films;

    this.setState(() => ({
      characterInfo: {
        name,
        gender,
        height,
        skin_color,
        mass,
        homeworld,
        hair_color,
        films,
      },
      showCharacterInfo: !doesShow,
    }));
  };
  render() {
    if (this.state.showCharacterInfo) {
      return (
        <CharacterInfo
          name={this.state.characterInfo.name}
          mass={this.state.characterInfo.mass}
          height={this.state.characterInfo.height}
          gender={this.state.characterInfo.gender}
          skin_color={this.state.characterInfo.skin_color}
          homeworld={this.state.characterInfo.homeworld}
          hair_color={this.state.characterInfo.hair_color}
          films={this.state.characterInfo.films}
          clicked={() =>
            this.setState({ showCharacterInfo: !this.state.showCharacterInfo })
          }
        />
      );
    }
    return (
      <div className="StarwarsBuilder">
        <Search filter={this.filterCharactersHandler} />
        <div className={classes.CharactersWrapper}>
          <Characters
            chars={this.state.characters}
            showInfo={this.showInfoHandler}
            loading={this.state.loading}
          />
        </div>
        <Pagination
          previous={this.previousPageHandler}
          next={this.nextPageHandler}
        />
      </div>
    );
  }
}

export default StarwarsBuilder;
