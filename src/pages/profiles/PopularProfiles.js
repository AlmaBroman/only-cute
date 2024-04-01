import React, { useEffect, useState } from 'react'
import appStyles from "../../App.module.css";
import { Col, Container } from 'react-bootstrap';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from '../../components/Asset';
import Profile from '../posts/Profile';

const PopularProfiles = () => {
    const [profileData, setProfileData] = useState({
        pageProfile: {results: []},
        popularProfiles: {results: []},
    });
    const { popularProfiles } = profileData;
    const currentUser = useCurrentUser()

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(
                    "/profiles/?ordering=-followers_count"
                );
                setProfileData((prevState) => ({
                    ...prevState,
                    popularProfiles: data,
                }));
            } catch(err){
                console.log(err)
            }
        };

        handleMount()
    }, [currentUser]);

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