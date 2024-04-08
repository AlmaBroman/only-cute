# Manual Testing

[Go to README](README.md)

| Testcase                                               | Expected Result                                                                                   | Test Result |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ----------- |
| **Authorization**                                      |                                                                                                   |             |
| Register a user with valid data                        | Request is successful, user is registered and logged in                                           | PASS        |
| Register a user with invalid data                      | Request fails, form loads again with data and error messages                                      | PASS        |
| Login a user with valid data                           | Request is successful, user is logged in                                                          | PASS        |
| Login a user with invalid data                         | Request fails, form loads again with data and error messages                                      | PASS        |
| Logout a user by clicking logout button                | Request is succesfull, user is logged out                                                         | PASS        |
| Navbar displays proper links when unathenticated       | nav bar shows register and sign in. User profile, logout, post and saved are not visible          | PASS        |
| Navbar displays proper links when Authenticated        | nav bar shows user profile, logout, post and saved. Register and sign in are not visible.         | PASS        |
| Open the Homepage unauthenticated                      | Homepage loads and displays information for unauthenticated users                                 | PASS        |
| Open the Homepage authenticated without followers      | Homepage loads and displays hint to follow members                                                | PASS        |
| Open the Homepage with feed                            | Homepage loads and displays the feed of the user                                                  | PASS        |
| Open the Explore page unauthenticated                  | Explore page loads and displays all the posts                                                     | PASS        |
| Open the Explore page authenticated                    | Explore page loads and displays all the posts from other members                                  | PASS        |
| Open the Explore page with follow                      | Explore page loads and displays all the posts from other members                                  | PASS        |
| Open Search Page                                       | Search Page loads and shows input                                                                 | PASS        |
| Send search request                                    | After entering keywords the request is send and the result is shown below                         | PASS        |
| **Profile**                                            |                                                                                                   |             |
| Open Profile authenticated                             | Opens Profile Page with correct data, follow button visible, no dropdown menu                     | PASS        |
| Open Profile unauthenticated                           | Opens Profile Page with correct data, no follow button, no dropdown menu                          | PASS        |
| Open own Profile                                       | Opens Profile Page with correct data, no follow button dropdown menu available                    | PASS        |
| Edit Profile                                           | If data is valid, form is submitted, the profile is updated and the user is redirected to profile | PASS        |
| Follow Profile                                         | Request is successful, Follow button changes, followers count is updated                          | PASS        |
| **Posts**                                              |                                                                                                   |             |
| Create a Post with valid data                          | Request is successful, post is created and user is redirected to profile                          | PASS        |
| Create a Post with invalid data                        | Request fails, form shows error                                                                   | PASS        |
| Edit a Post with valid data                            | Request is successful, post is updated and user is redirected to post detail                      | PASS        |
| Edit a Post with invalid data                          | Request fails, form shows error                                                                   | PASS        |
| Delete a Post                                          | Request is successful, Post is deleted and user is redirected to profile                          | PASS        |
| Open a post by clicking on post image or comments icon | Post Detail page loads with correct data                                                          | PASS        |
| Liking a post Owner                                    | Message is shown when hovering over like icon, request fails on click                             | PASS        |
| Liking a post authenticated                            | Like count increases, like icon changes.                                                          | PASS        |
| Liking a post unauthenticated                          | Message is shown when hovering over like icon, request fails on click                             | PASS        |
| Unliking a post                                        | Like count decreases and like icon changes                                                        | PASS        |
| Saving a post Owner                                    | Message is shown when hovering over save icon, request fails on click                             | PASS        |
| Saving a post authenticated                            | Post is added to saved posts list, save icon changes.                                             | PASS        |
| Saving a post unauthenticated                          | Message is shown when hovering over save icon, request fails on click                             | PASS        |
| Unsaving a post                                        | Post is removed from saved posts list and save button changes                                     | PASS        |
| **Commenting**                                         |                                                                                                   |             |
| Writing a comment                                      | Request is successful, comment is added to the list, message is shown                             | PASS        |
| Editing a comment                                      | Request is successful, comment content is updated, message is shown                               | PASS        |
| Delete a comment                                       | Request is successful, comment is deleted, message is shown                                       | PASS        |
