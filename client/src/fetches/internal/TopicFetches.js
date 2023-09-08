const URL = "http://localhost:8080/api/topic";

// topic fetches

export async function getTopics() {
  const init = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  }

  const response = await fetch(URL, init);

  if (response.status === 200) {
    return response.json();
  } else {
    const errs = response.json();
    return Promise.reject(errs);
  }

}