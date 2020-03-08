
const HOST = "https://api.github.com"

async function basicFetch(url){
  await fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('Request successful', data);
      return data
      
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
}

export function getRepositories(user){
    var url = "https://api.github.com/repos/KevinFrazier/KevyKat/commits"
    return basicFetch(url)
}

export async function authenticateUser(user){
    
}

export async function getStats(user, repo){

  const STAT_LIST = ["contributors", "commit_activity", "code_frequency", "participation", "punch_card"]
  var payload = {}
  for(const stat in STAT_LIST){
    var url = HOST + "/repos/" + user + "/" + repo + "/stats/" + STAT_LIST[stat];
    payload[STAT_LIST[stat]] = await basicFetch(url)
  }
  
  return payload

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