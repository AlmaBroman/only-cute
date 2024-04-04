import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/wow.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostsPage({ message, message2, filter = "", renderFallback }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  let pageTitle = "";
  let pageDescription = "";

  if (pathname === "/") {
    pageTitle = "Home";
    pageDescription = currentUser
      ? "Welcome to your home feed! This is your place to view what the people you're following have been up to!"
      : "Create an account or sign in to view your home feed";
  } else if (pathname === "/explore") {
    pageTitle = "Explore";
    pageDescription = "Discover new content and profiles!";
  } else if (pathname === "/search") {
    pageTitle = "Search";
    pageDescription = "Search for a username or a post title!";
  }

  return (
    <Container className={appStyles.Content}>
      {pathname === "/" && !currentUser ? (
        <>
          <Row className="justify-content-center text-center">
            <Col>
              <h1>{pageTitle}</h1>
              <p>{pageDescription}</p>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1>{pageTitle}</h1>
              <p>{pageDescription}</p>
            </Col>
          </Row>
          {pathname === "/search" && (
            <Row className="justify-content-center">
              <Col className="py-2 p-0 p-lg-2" lg={8}>
                <i className={`fas fa-magnifying-glass ${styles.SearchIcon}`} />
                <Form
                  className={styles.SearchBar}
                  onSubmit={(event) => event.preventDefault()}
                >
                  <Form.Control
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    className="mr-sm-2"
                    placeholder="Search Posts"
                  />
                </Form>
              </Col>
            </Row>
          )}
          <Row className="h-100 justify-content-center">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
              {hasLoaded ? (
                <>
                  {posts.results.length ? (
                    <InfiniteScroll
                      children={posts.results.map((post) => (
                        <Post key={post.id} {...post} setPosts={setPosts} />
                      ))}
                      dataLength={posts.results.length}
                      loader={<Asset spinner />}
                      hasMore={!!posts.next}
                      next={() => fetchMoreData(posts, setPosts)}
                    />
                  ) : (
                    <>
                      <Container className={appStyles.Content}>
                        <Asset
                          src={NoResults}
                          message={message}
                          message2={message2}
                        />
                        {renderFallback}
                      </Container>
                    </>
                  )}
                </>
              ) : (
                <Container className={appStyles.Content}>
                  <Asset spinner />
                </Container>
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default PostsPage;
