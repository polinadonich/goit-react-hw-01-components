import Profile from './components/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';
function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
