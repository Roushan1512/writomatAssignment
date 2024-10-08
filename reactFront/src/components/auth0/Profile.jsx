import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  //console.log(user);

  return (
    isAuthenticated && (
      <div>
        <img
          src={user.picture}
          alt={user.name}
          className="rounded-full scale-150 -mt-2"
        />
      </div>
    )
  );
};

export default Profile;
