const SearchForm = ({
  query = "",
  formClassName,
  placeholder,
  buttonClassName,
  inputClassName,
}) => {
  return (
    <form className={formClassName} action="/search" method="GET">
      <input
        type="text"
        placeholder={placeholder}
        className={inputClassName}
        name="query"
        defaultValue={query}
      ></input>
      <button className={buttonClassName} type="submit">
        <i className="fa solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchForm;