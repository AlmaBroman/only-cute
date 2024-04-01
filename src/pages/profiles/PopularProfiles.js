import React, { useEffect, useState } from 'react'
import appStyles from "../../App.module.css";
import { Col, Container } from 'react-bootstrap';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from '../../components/Asset';
import Profile from '../posts/Profile';
import { useProfileData } from '../../contexts/ProfileDataContext';

const PopularProfiles = () => {
    const { popularProfiles } = useProfileData();

  return (
    <Container className={`${appStyles.Content} ${appStyles.Border} text-center`}>
        {popularProfiles.results.length ? (
            <>
            <h3>Here are some suggestions:</h3>
            <div>
            {popularProfiles.results.map(profile => (
                <Profile key={profile.id} profile={profile} />
            ))}
            </div>
            </>
        ) : (
            <Asset spinner />
        )}
    </Container>
  )
}

export default PopularProfiles