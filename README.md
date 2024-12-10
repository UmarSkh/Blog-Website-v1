# Blog-Website-v1
 This is a simple yet powerful blog platform built using Node.js and Express.js with EJS as the templating engine. It allows users to create, view, and search blog posts. Users can add new posts via a form, where they input a title and content. On the homepage, users can search for posts by title and view the full content by clicking "Read More." The website is designed to be easy to use and showcases basic CRUD functionalities for blog management.

Features:
Add Blog Posts:
Users can add new blog posts by navigating to the /compose route. They can input a title and content for the blog post. Once submitted, the blog post is stored and displayed on the homepage.

Homepage Search:
The homepage provides a search functionality, where users can search for specific blog posts by title. Each blog post on the homepage is displayed with a "Read More" button, which redirects to the full post page when clicked.

Blog Post Details:
Clicking on "Read More" will take users to a separate page dedicated to the full blog post. Here, users can read the entire post with its title and content.

Routes:
/ (Homepage): Displays a list of all blog posts with titles and excerpts. Users can search and click on "Read More" to view the full post.

/compose: A form where users can add a new blog post by submitting a title and content.

/posts/:title: Displays the full blog post, including its title and content.

Technologies Used:
Node.js: Server-side JavaScript environment.
Express.js: Web framework for Node.js to handle routing and requests.
EJS: Templating engine used to render HTML views.
