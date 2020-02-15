import React from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [count, setCount] = useState("10");
  const exampleRequest = "https://meme-api.herokuapp.com/gimme/dankmemes/2";

  useEffect(() => {
    getResult();
  }, [count, query]);

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  const updateCount = event => {
    setCount(event.target.value);
    console.log(count);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search + "/");
    setSearch("");
  };

  return (
    <div>
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          value=""
          className="search-box"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-submit">
          Search
        </button>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={updateSearch}
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>

        <select className="search-count" onChange={updateCount}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </form>
    </div>
  );
};

export default Search;
