const express = require('express');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

const githubData = {
    "login": "Atharva17062002",
    "id": 71925942,
    "node_id": "MDQ6VXNlcjcxOTI1OTQy",
    "avatar_url": "https://avatars.githubusercontent.com/u/71925942?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Atharva17062002",
    "html_url": "https://github.com/Atharva17062002",
    "followers_url": "https://api.github.com/users/Atharva17062002/followers",
    "following_url": "https://api.github.com/users/Atharva17062002/following{/other_user}",
    "gists_url": "https://api.github.com/users/Atharva17062002/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Atharva17062002/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Atharva17062002/subscriptions",
    "organizations_url": "https://api.github.com/users/Atharva17062002/orgs",
    "repos_url": "https://api.github.com/users/Atharva17062002/repos",
    "events_url": "https://api.github.com/users/Atharva17062002/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Atharva17062002/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Atharva Udavant",
    "company": null,
    "blog": "",
    "location": "Pune",
    "email": null,
    "hireable": true,
    "bio": "FLUTTER - \r\nFIREBASE - \r\nFIGMA  - \r\nDATA STRUCTURES AND ALGORITHMS - \r\nC/C++ - \r\nPYTHON",
    "twitter_username": "Atharva17062002",
    "public_repos": 42,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2020-09-26T10:11:55Z",
    "updated_at": "2024-01-21T15:20:52Z"
    }

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter',(req,res) => {
    res.send('This is twitter page'); 
})

app.get('/github',(req,res) => {
    res.json(githubData);
})

app.get('/login',(req,res) => {
    res.send('<h1>This is login page</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})