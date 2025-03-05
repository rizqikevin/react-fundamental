import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const ChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const SetButoon = () => {
    props.onChangeSearch(search);
  }

  const SearchKeydown = (e) => {
    if ((e.key = "Enter")) {
        SetButoon();
    }
  }

  return (
    <>
      <div>
        <div>
          Cari Artikel : <input onChange={ChangeSearch} onKeyDown={SearchKeydown}></input>
          <button onClick={SetButoon}>cari</button>
        </div>
        <small>Di temukan {props.totalPost} data dengan pencarian dari kata {search}</small>
      </div>
    </>
  );
}

export default Search;
