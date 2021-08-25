import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import user from './user.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
    </div>
  );
}
