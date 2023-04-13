import PropTypes from 'prop-types';
import { Avatar, Friend, Name, Status } from './FriendItem.styled';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Friend>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Friend>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
