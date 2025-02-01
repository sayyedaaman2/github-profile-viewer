document.addEventListener('DOMContentLoaded',function(){
    const container  = document.querySelector('.container');
    const inputBox = document.getElementById('input-box');
    const searchBtn = document.getElementById('search-btn');
    const errorMessage = document.getElementById('error-message');

    
    let user = {
        "login": "sayyedaaman2",
        "id": 98977020,
        "node_id": "U_kgDOBeZE_A",
        "avatar_url": "https://avatars.githubusercontent.com/u/98977020?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/sayyedaaman2",
        "html_url": "https://github.com/sayyedaaman2",
        "followers_url": "https://api.github.com/users/sayyedaaman2/followers",
        "following_url": "https://api.github.com/users/sayyedaaman2/following{/other_user}",
        "gists_url": "https://api.github.com/users/sayyedaaman2/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/sayyedaaman2/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/sayyedaaman2/subscriptions",
        "organizations_url": "https://api.github.com/users/sayyedaaman2/orgs",
        "repos_url": "https://api.github.com/users/sayyedaaman2/repos",
        "events_url": "https://api.github.com/users/sayyedaaman2/events{/privacy}",
        "received_events_url": "https://api.github.com/users/sayyedaaman2/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "Sayyed Aaman",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": "SayyedAaman",
        "public_repos": 62,
        "public_gists": 1,
        "followers": 1,
        "following": 23,
        "created_at": "2022-02-03T17:56:18Z",
        "updated_at": "2025-01-04T19:25:37Z"
      }

      function fetchData(username){
        let api = `https://api.github.com/users/${username}`
        fetch(api)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                showProfile(data);
            })
            .catch(error => {
                showErrorMessage('User not found');
            });
      }
    searchBtn.addEventListener('click',function(){
        
        let username = inputBox.value;
        if(username == "" || username == undefined){
            showErrorMessage('Username is required !')
        }

        fetchData(username);
        

      
    })
    function showErrorMessage(error){
        if(error == null){
            errorMessage.style.display = 'none'
        }
        errorMessage.innerText = error;
        errorMessage.style.display = 'block';

    }
    function showProfile(user){
        let isExists = document.querySelector('.profile-container')
        
        if(isExists){
            isExists.remove()
        }
        let profileContainer = document.createElement('div');
        profileContainer.className = 'profile-container';

        let img = document.createElement('img');
        img.id = 'avatar';
        img.alt = 'profile';
        img.src = user.avatar_url;



        let profileDetails = document.createElement('div');
        profileDetails.className = 'profile-detail';

        let username = document.createElement('h1');
        username.className = 'username';
        username.innerHTML = `Username : <span>${user.login}</span>` 
        
        let name = document.createElement('h2');
        name.className = 'name';
        name.innerHTML = `Name : <span>${user.name}</span>`;

        let info = document.createElement('div');
        info.className = 'info';

        let block1 = document.createElement('div');
        block1.innerHTML = `<p>Repo</p> <p>${user.public_repos}</p>`;
        block1.className = 'block';
        
        let block2 = document.createElement('div');
        block2.innerHTML = `<p>Following</p> <p>${user.following}</p>`;
        block2.className = 'block';
        
        let block3 = document.createElement('div');
        block3.innerHTML = `<p>Followers</p> <p>${user.followers}</p>`;
        block3.className = 'block';

        
        info.append(block1);
        info.append(block2);
        info.append(block3);


        let profileActions = document.createElement('div');
        profileActions.className = 'profile-actions';

        let viewButton = document.createElement('a');
        viewButton.href = user.html_url;
        viewButton.className = 'primary-btn';

        viewButton.innerText = 'View';

        profileActions.append(viewButton);
        
        
        profileContainer.append(img);


        profileDetails.append(username);
        profileDetails.append(name);
        profileDetails.append(info);
        profileDetails.append(profileActions);

        profileContainer.append(profileDetails);

        container.append(profileContainer)

    }
})