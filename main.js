const listRepos = async username => {
  try {
    const repos = await (
      await fetch(
        `https://api.github.com/users/${username}/repos?type=owners&sort=updated`
      )
    ).json();

    const markup = repos
      .map(
        repo =>
          `<li>
          <a href="${repo.html_url}">${repo.name}</a>
        (🌟 ${repo.stargazers_count})
        </li>`
      )
      .join('');

    const content = document.getElementById('content');

    content.innerHTML = `<ul>${markup}</ul>`;
  } catch (e) {
    console.error(e);
  }
};

listRepos('david-mateogit');
