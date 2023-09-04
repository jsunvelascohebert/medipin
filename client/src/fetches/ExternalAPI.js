const URL = "https://health.gov/myhealthfinder/api/v3";

export async function getArticlesByQuery(query) {

  const init = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  }

  const response = await fetch(`${URL}/topicsearch.json?keyword=${query}`, init);

  if (response.status === 200) {
    return response.json();
  } else {
    const errs = "No articles found!";
    return Promise.reject(errs);
  }
}
