

function renderPosts(posts, container) {
    const len = posts.length;
    var html = '<ul id="posts">'; 

    for (let i = 0; i < len; i++) {
        html += '<li class="post">' +
                '<h2>' + posts[i].title + '</h2>' +
                '<h3>' + posts[i].content + '</h3>' +
                '</li>'; 
    }

    html += '</ul>'; 
    container.innerHTML = html; 
}

const posts = [
    { title: 'First Post', content: 'This is the content of the first post.' },
    { title: 'Second Post', content: 'This is the content of the second post.' }
];

const container = document.getElementById('container');
renderPosts(posts, container); 


var post= [{
    title: "MIT",
    content: "great place to hang out"
  },
  {
    title: "cricket",
    content: "takes a long time to master"
  },
  {
    title: "marmalade",
    content: "chunky is the best"
  },
  {
    title: "Good Article",
    content: "Death of Planning"
  },
  {
    title: "Cooking",
    content: 'scrambled eggs on toast'
  }
]