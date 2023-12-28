const fetchItems = (page = 1) => async() => {
    const response = await fetch(`${process.env.REACT_APP_API_KEY}?_limit=10&_page=${page + 1}`);
    const data = await response.json();
    return data
}

export default fetchItems