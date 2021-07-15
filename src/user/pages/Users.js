import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image: 'https://media-exp1.licdn.com/dms/image/C5603AQEXrhNA4NQj2Q/profile-displayphoto-shrink_800_800/0/1600381494650?e=1630540800&v=beta&t=6cfVLJQYvNNeB9gaEJxeb6fAgmgF2JMoI2O08KqQWnY',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
