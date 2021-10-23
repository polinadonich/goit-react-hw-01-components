import PropTypes from 'prop-types';
import friends from './friends.json';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendList() {
  return (
    <section className={s.friends}>
      <div className={s.container}>
        <ul className={s.friendList}>
          {/* {const status = friend.isOnline}; */}
          {friends.map(friend => {
            return (
              <FriendListItem
                key={friend.id}
                id={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FriendList;

FriendList.prototype = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
