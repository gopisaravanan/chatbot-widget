import ReactDOM from 'react-dom/client';
import Chatbot from './ChatBot';

const mount = () => {
  const el = document.getElementById('chatbot-widget-root');
  if (el) {
    ReactDOM.createRoot(el).render(<Chatbot />);
  }
};

mount();
