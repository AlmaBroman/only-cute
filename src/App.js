import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";

function App() {


  return (

        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home Page</h1>} />
              <Route exact path="/explore" render={() => <h1>Explore</h1>} />
              <Route exact path="/search" render={() => <h1>Search</h1>} />
              <Route
                exact
                path="/signin"
                render={() => (
                    <SignInForm />
                )}
              />
              <Route
                exact
                path="/register"
                render={() => (
                    <SignUpForm />
                )}
              />
              <Route
                exact
                path="/posts/create"
                render={() => (
                    <PostCreateForm />
                )}
              />
              <Route
                exact
                path="/posts/:id"
                render={() => (
                    <PostPage />
                )}
              />
              <Route render={() => <h1>Page not found! :o</h1>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;
