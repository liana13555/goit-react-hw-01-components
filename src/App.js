import Profile from './components/Profile';
import profil from './user.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={profil.avatar}
        name={profil.name}
        tag={profil.tag}
        location={profil.location}
        followers={profil.stats.followers}
        views={profil.stats.views}
        likes={profil.stats.likes}
      />
    </div>
  );
}
