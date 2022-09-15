import './App.css';
import Header from './Header'
import Footer from './Footer'
import Profile from './Profile'

function App() {

  const userName = 'Jamsoi';
  const title = 'Director';
  const description = 'Making Life Better for All'


  return (
    <div className="container-app">
      <Header />
      <Profile userName={userName} title={title} description={description}/>
      <Footer/>
    </div>
  );
}

export default App;
