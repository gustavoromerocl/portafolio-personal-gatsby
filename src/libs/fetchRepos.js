export default async () => {
  const response = await fetch("https://api.github.com/users/gustavoromerocl/repos")
  let myRepos = await response.json()

  return myRepos
}