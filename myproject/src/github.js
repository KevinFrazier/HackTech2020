
export async function getRepositories(user){
    console.log("repos for user: " + user)
await fetch('https://api.github.com/users/' + user  + '/repos')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log('Request successful', data);
    return
    
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });

}

export async function authenticateUser(user){
    
}

export async function getCommits(owner, repo){
    console.log("commit statistics for: " + repo)
    await fetch('https://api.github.com/repos/' + owner + '/' + repo + '/stats/constributor')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('Request successful', data);
      return
      
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
}