import { SetStateAction, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

// @ts-ignore
import ArrowIcon from '../../assets/icons/ArrowIcon.tsx';
import socket from '../../api/socket.ts';

const ChatForm = () => {
  const [value, setvalue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => setvalue(e.target.value);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    socket.emit('newMessage', {
      body: value,
      channelId: 1,
      username: 'admin',
    }, () => {
      setIsLoading(false);
      setvalue('');
    });
  };

  if (isLoading) return <Spinner animation="border" />;

  return (
    <div className="mt-auto px-5 py-3">
      <form noValidate className="py-1 border rounded-2" onSubmit={handleSubmit}>
        <div className="input-group has-validation">
          <input
            name="body"
            aria-label="Новое сообщение"
            placeholder="Введите сообщение..."
            className="border-0 p-0 ps-2 form-control"
            value={value}
            onChange={handleChange}
          />

          <button type="submit" disabled className="btn btn-group-vertical">
            <ArrowIcon />
            <span className="visually-hidden">Отправить</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatForm;
