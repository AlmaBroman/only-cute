# Only Cute
![Only Cute Logo](docs/images/only-cute-hero.png)  
Only Cute is a photo sharing platform for authenticated users to share cute images with other people. Logged in users can post, like, save and comment on post and edit/delete posts they've created. Logged in users are also able to follow other users in doing their home feed will be populated by the posts from the poeple the logged in user has followed.

# Live Page
[https://only-cute-95810adc5d9f.herokuapp.com/](https://only-cute-95810adc5d9f.herokuapp.com/)

![Website Mockup](docs/images/responsive.png)

# Objective
The objective of this project is to present my skills in React, Django Rest Framework and Python. I wanted to create a simple app with easy-to-use handy functions for the user to easily navigate through the site.

# Django Rest Backend
The repository for the backend of the application can be found here: [https://github.com/AlmaBroman/only-cute-api](https://github.com/AlmaBroman/only-cute-api)

# Contents
* [Features](#features)
  * [Navbar](#navbar)
  * [Post](#post)
  * [Home Page](#home-page)
  * [Explore Page](#explore-page)
  * [Search Page](#search-page)
  * [Saved Page](#saved-page)
  * [Profile Page](#profile-page)
    * [Edit Profile](#edit-profile)
  * [Posts](#posts)
    * [Post Detail](#post-detail)
    * [Create Post](#create-post)
    * [Edit Post](#edit-post)
    * [Like Post](#like-post)
    * [Save Post](#save-post)
    * [Delete Post](#delete-post)
  * [Comments](#comments)
    * [Add Comment](#add-comment)
    * [Edit Comment](#edit-comment)
    * [Delete Comment](#delete-comment)
  * [Register](#register)
  * [Sign In](#sign-in)
      * [Form Validation](#form-validation)
  * [Additional Features](#additional-features)
* [Colors](#colors)
* [Fonts](#fonts)
* [Testing](#testing)
  * [Manual Testing](#manual-testing)
  * [Validation](#validation)
  * [Bugs](#bugs)
* [Development process](#development-process)
  * [Development Preparation](#development-preparation)
  * [Agile Development](#agile-development)
  * [Git](#git)
  * [React](#react)
  * [Prettier](#prettier)  
* [Deployment](#deployment)
  * [Setup](#setup)
* [Credits](#credits)
  * [Used Technologies and Tools](#used-technologies-and-tools)
  * [Content and Media](#content-and-media)
  * [Other](#other)
* [Acknowledgments](#acknowledgments)

# FEATURES

## Navbar
![Navbar](docs/features/navbar.png)
- The navbar is visible on every page.
- It is fully responsive and includes the site logo at the top and links to all the pages below.
- The navbar is responsive, appearing as a dropdown menu at the top of the screen on smaller devices
- The navbar when logged in shows create, saved, user profile and logout links.
- The user can always see if they are logged in by their username and profile image being displayed. 

## Post
![Post](docs/features/post-1.png)
- The Post component is reused throughout the application to display posts.
- At the top of the card, a link to the author's profile and the time since posting is displayed.
- The middle of the card shows the image of the post.
- Below the image shows the post title and post description. All users can see like, save and comment buttons.
![Post Profile Page](docs/features/post-2.png)
- On profile pages on larger screens the post component is styled differently, divided into two columns so that users can get a better overview of all the posts and easily browse through a users posts.

## Home Page
![Home Page Unauthenticated](docs/features/home-page-unauth.png)
- The Home Page is used to display a welcoming message to new users who are not yet members.

![Home Page No Follow](docs/features/home-page-no-follow.png)
- Members, who have not yet followed anybody, can see a welcome message and a hint to follow somebody other members.
- Under the message they can view a list of popular profiles to follow.

![Home Page Feed](docs/features/home-feed.png)
- The posts in the feed are displayed with the Post List component that uses the Post component for every post. The post list component is reused on multiple pages to display a list of posts.

## Explore Page
![Explore Page](docs/features/explore.png)
- The explore page allows any user to explore new content.
- This page shows all the posts loading in ten posts at a time with infinite scroll.

## Search Page
![Search Page](docs/features/search.png)
- The user can search for specific posts containing chosen keywords.
- To get a match, the article has to contain selected keywords in either the post title or name of the author.
- The search request is automatically sent after typing and displayed below the search bar. 
- In case there is no match, the page informs the user of the fact by displaying a message.
- The search page uses one of the pages that use the Post List component to display the result.

## Saved Page
![Saved Page](docs/features/saved.png)
- The saved page allows members to see posts they saved.
![Empty Saved Page](docs/features/no-saved.png)
- If they haven't saved any posts the post page will have no posts and will show a hint to the user to save a post.

## Profile Page
![Profile Page](docs/features/profile.png)
- Every member has a profile page that displays the profile image, name, and biography of the member.
- Members can see a Follow button at the top right corner of other member's profiles that allows them to follow that member to receive that member's posts in their feed.
- Below the profile information, all the posts of the member are displayed in a grid.

### Edit Profile
![Edit Profile](docs/features/edit-profile.png)
- Members can edit their own profile through the Edit Profile page which is accessible by clicking the edit button in the top right corner of their profile.
- The edit post form allows the user to change their profile image, name, and biography.

## Posts

### Post Detail
![Post Detail](docs/features/post-detail.png)
- Every post on the website can be opened by clicking on the image in the post.
- At the top, the detail page shows the title of the post. Below the title, the post is displayed with the [Post component](#post) which is also used in the Post List component.

### Create Post
![Create Post](docs/features/create-post.png)
- Posts can be created by members through the Create Post page.
- The page shows the Post Form component which has an image input and two text inputs for the title and content. The image input is the same component as on the Edit Profile page.
- When submitting the form, the post is created and the user is navigated to the ppost detail page of their newly created post.

### Edit Post
![Edit Post](docs/features/edit-post.png)
- Post can be edited by the owner of the post through the Edit Post page accessible through the Post Detail page of the post.
- Like the Create Post page, the page also uses the Post Form component but is prefilled with the post data.
- When submitting the form, the post is updated and the user is navigated to the post detail page of the edited post.

### Like Post
- Posts can be liked by authenticated members by clicking the heart button on the post card.
- The heart in the button gets filled to inform the user about the successful like.
- Members can revert the like by clicking the button again, which empties the heart.

### Save Post
- Posts can be saved by authenticated users by clicking on the star button on the post card.
- The star gets filled to inform the user about the successful save.
- The users saved posts are listed on the saved post page.
- Members can revert the save by clicking on the button again, removing it from the save post page and making the star unfilled and grey.

### Delete Post
- Posts can be deleted permanently by the owner of the post through the Post Detail page.
- In the Post Card component the owner can see a delete button by clicking on the three dots dropdown menu next to the date.
- When clicking on the trash can, the post is deleted and the user is navigated to the profile page. A message informs the user about the successful operation.
- When canceling the deletion, the modal is closed.

## Comments
![Comment Section](docs/features/comments.png)
- Every post has a comment section on the detail page.
- If the user is not authenticated, a hint shows that the user needs to log in or register to post a comment.

### Add Comment
- If the user is authenticated, a comment form is displayed instead of the hint.
- The user can enter the content of the comment and post it by clicking the button.

### Edit Comment
- The user can edit their comment by clicking the edit button in the top right corner.
- The comment turns into an inline form allowing the user to edit the comment.
- To save the changes, the user can click on the save button.
- If the user changes their mind, and does not want to edit the comment any longer, they can drop the changes by clicking the cancel button.

### Delete Comment
- The user can remove their comments permanently from the conversation.
- To delete a comment, the user can click on the three dots in the top right corner of the comment and then the trashcan button.
- The comment is immediatly deleted and will dissapear from the posts comment list.

## Register
![Register Form](docs/features/register.png)
- If a user wants to use the features reserved for members of the website, such as commenting, liking, saving (...etc) they have to register.
- The user can reach the registration page by the link in the navbar or through links available throughout the website.
- To become a member, the user has to enter a username, a password and then confirm the password.
- If the provided data is valid, the user is automatically logged in and redirected to the Homepage.

## Sign In
![Sign in Form](docs/features/sign-in.png)
- If an unauthenticated member wants to use the features reserved for members of the website such as commenting and liking, they have to log in.
- The member can reach the login page by the link in the navigation bar or through links available throughout the website.
- To log in, the user has to enter their username and password.
- If the username and/or password are incorrect, the form is loaded again, informing the user about the error.

### Form Validation
![Sign In Form Error](docs/features/sign-in-validation.png)
- If the entered data is invalid when sent off, the form data is preserved and an error is displayed. 
- After fixing the invalid fields the user can send the form again.


## Additional Features
Features that could be implemented in the future:
- Allow users to choose categories for their posts and filtering post by category on the search page
- Allow users to view a link to a liked posts page on their profile page
- Allow first time users to view a landing page with all the important information about the website so that they can learn about the features of the website
- Allow users to create draft posts.

# Colors
The page is centered around three main colors ( apart from black and white):

- #ff66c4- pink
- #ffde59 - yellow
- #359d1b - green

The color choices and the general design was centered around three words:
- simple
- fun
- cute

# Fonts
The main font used for this website was Nunito and it was imported and implemented using [Google Fonts](https://fonts.google.com/).

# Testing

## Manual Testing
- Throughout the development process, I manually tested every page and feature exhaustively.   
[List of manual tests](manual_testing.md)

## Validation

### ESlint

There were no errors found in the javascript using [ESlint](https://eslint.org/).

## Bugs

### Fixed Bugs
| Bug | Description     | Solution             |
| :-----: | :-----------: |:---------------------------------:|
| **Image deafult overriding user uploaded image on put request**  | When making a put request for updating the post or profile data with existing values for image, the updated data would 'forget' the existing image and instead put the default image.  | This turned out to be an issue with the djangorestframework 3.15, solved by upgrading to djangorestframework 3.15.1 |

### Unsolved Bugs
The developer has fixed all the bugs that has been found so far.

# Development process
While working on this project, I tried to follow an agile development approach as much as possible. 

## Development Preparation
The first step in my development process was to plan the website thoroughly:
- At first, I created a simple class diagram that shows the models I was planning on implementing, with their properties and relations  
  [Image of the class diagram](docs/images/db-models.png)
- Next, I thought about the User Interface and its layout. I created a wireframe[(image of the wireframe)](docs/images/only-cute-wireframes.png). 
  - Note: During development, the layout for some of the pages were modified. Landing page for example was planned but not implemented in this sprint.
- Lastly, I wrote the majority of my user stories and tasks in my [GitHub Project](https://github.com/users/AlmaBroman/projects/6/views/1?visibleFields=%5B%22Title%22%2C84473290%2C84475478%5D) 

### Agile Development
- In my [GitHub Project](https://github.com/users/AlmaBroman/projects/6/views/12), all my issues are separated into two parts of the application by a custom field "App". Each ticket was assigned one of two milestones: "MVP" and "Additional Features"
- Issues not necessary for my project were added to the "Additional Features" milestone. Those tickets were only to be worked on when all the "MVP" tickets were done and I still had time left.
- Each issue was then categorized into user stories or technical tasks by adding the corresponding label.
- All the issues were then grouped into various epics by a custom field "Epic".
- When I was working on the project, I chose one issue to work on from the "Todo" column of the MVP board and moved it into the "In Progress" column.
- After I finished the issue by fulfilling all the acceptance criteria, I moved it into the "Done" Column.

### Git
- I started the program and repository by using the [gitpod python template](https://github.com/Code-Institute-Org/python-essentials-template) provided by the Code Insitute.
- Then I regularly staged my changes using the command `git add .` and then committed the staged changes to my local repository using `git commit -m 'short descriptive message here'`.
- Finally, I would push the commits from my local repository up to the GitHub repository using the command `git push`.
- With every push, Heroku automatically deploys my latest commit from the 'main' branch to the Heroku app.

## React
The react project was initialised with [create-react-app](https://www.npmjs.com/package/create-react-app) build tool and the [template](https://github.com/Code-Institute-Org/cra-template-moments.git) provided by Code Institute:   
```npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm```

## Prettier
The Typescript and SCSS files were formatted during the development with the [Prettier](https://prettier.io/) library. The following steps were taken to set up Prettier in the project:
- First, I install the [Prettier package](https://www.npmjs.com/package/prettier) in my project with the command ```npm install prettier```
- when a file is done I use the command 'control' + 'shift' + 'f' to format the file with the prettier formatter in my workspace.

# Deployment

The app was deployed using Heroku.

## Setup
The steps to deploy the React app to Heroku are as follows:
- Create a new App from the Heroku dashboard.
- Enter a name for the app and select a region, then click on "Create App".
- On the page of the app that opens, go to the "Settings" tab.
- In Settings add the necessary config vars, for this project I added the URL of my backend.
- Afterwards, go to the "Deploy" tab on the app page.
- In the "Deployment method" section, select "GitHub" and follow the steps to connect Heroku with GitHub.
- Then, in the "Connect to GitHub" section, search for the repository that is supposed to be deployed and click on "Connect".
- The last step is to either:
    - enable automatic deployment by clicking on the button "Enable Automatic Deploys" in the "Automatic Deploys" Section.
    - deploy a branch manually by selecting the branch and clicking the button "Deploy Branch" in the "Manual deploys" section.

The live link can be found here: [Only Cute](https://only-cute-95810adc5d9f.herokuapp.com/)

# Credits

## Used Technologies and Tools
- [React Bootstrap 4](https://react-bootstrap-v4.netlify.app/getting-started/introduction/) - As the CSS framework
- [Prettier](https://prettier.io/) - For formatting Javascript code
- [Heroku](https://www.heroku.com/) - For the deployment of the website
- [ElephantSQL](https://www.elephantsql.com/) - As the database provider
- [Cloudinary](https://cloudinary.com/) - As the image storage
- [Balsamiq](https://balsamiq.com/) - For creating the wireframes
- [Lucid Chart](https://lucid.app/) - For creating the database diagrams
- [Canva](https://www.canva.com/) - For creating custom logos and hero image
- [Tiny Img](https://tiny-img.com/image-compressor/) - Image resizer

## Content and Media
- All the images posted on the website by me were downloaded from [Unsplash](https://unsplash.com/) and [Pexels](https://www.pexels.com/)
- All the icons on the website are from [FontAwesome](https://fontawesome.com/)
- The fonts [Nunito](https://fonts.google.com/specimen/Nunito?query=nunito)

## Other
- This project was based on the drf and the moments walktrough from Code Institute. I have used the walktrough projects as a starting off point and then modified them accordingly to suit my project.


# Acknowledgements

I would like to acknowledge the following people who have helped me along the way in completing my final portfolio project:
- Akshat Garg, for mentoring me and for his guidance and inspiration.
- CI tutor support and my fellow students, without slack and tutor support i wouldn't have been able to come as far as i've done.
- My friends and family for testing the website and sharing posts and writing comments.