import React from "react";
import appStyles from "../../App.module.css";
import { Row, Col, Container } from "react-bootstrap";
import Asset from "../../components/Asset";
import Profile from "../posts/Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";

const PopularProfiles = () => {
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${appStyles.Border} text-center`}
    >
      <Row className={appStyles.Padding20}>
        <Col className={appStyles.Column}>
          {popularProfiles.results.length ? (
            <>
              <h3>Here are some suggestions:</h3>
              <div>
                {popularProfiles.results.map((profile) => (
                  <Profile key={profile.id} profile={profile} />
                ))}
              </div>
            </>
          ) : (
            <Asset spinner />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PopularProfiles;
