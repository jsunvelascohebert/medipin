const URL = "http://localhost:8080/api/topic";

/* ***** get all topics ***** */

export async function getTopics() {
  const init = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
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

/* ***** add new topic ***** */

export async function addTopic(topic) {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(topic)
  }
  const response = await fetch(URL, init);
  if (response.status === 201) {
    return await response.json();
  } else {
    const errs = await response.json();
    return Promise.reject(errs);
  }
}

/* ***** delete topic ***** */

export async function deleteTopic(topidId) {
  const init = {
    method: 'DELETE'
  }
  const response = await fetch(`${URL}/${topidId}`, init);
  if (response.status != 204) {
    const errs = await response.json();
    return Promise.reject(errs);
  }
}
