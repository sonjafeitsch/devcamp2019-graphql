import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const USER_QUERY = gql`
    {
        users {
            name
        }
    }
`;
class User extends Component {
  render () {
    return (
      <Query query={USER_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>error</div>;
          return (
            <div>{data.users.map (name => <Element name={name.name} />)}</div>
          );
        }}
      </Query>
    );
  }
}

function Element (props) {
  return <div>{props.name}</div>;
}

export default User;
