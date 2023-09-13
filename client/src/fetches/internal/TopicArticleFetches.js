const URL = "http://localhost:8080/api/topic/article";

/* ***** ***** get articles by topic id ***** ***** */

/* ***** ***** add topic article ***** ***** */

export async function addTopicArticle(topicArticle) {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(topicArticle)
  }
  const response = await fetch(URL, init);
  if (response.status === 201) {
    return await response.json()
  } else {
    const errs = await response.json();
    return Promise.reject(errs);
  }
}

/* ***** ***** delete topic article by key ***** ***** */