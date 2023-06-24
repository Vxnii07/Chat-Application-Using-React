import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';
import './App.css';

const projectID = '67f3d31f-26e6-40d8-a741-b4c4f5c1e99d';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};



export default App;