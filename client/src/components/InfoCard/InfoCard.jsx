import { useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpen(true)}
          />
          <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
      <div className="Info">
        <span>
          <b>Status </b>
        </span>
        <span>In a Relationship</span>
      </div>
      <div className="Info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Denver</span>
      </div>
      <div className="Info">
        <span>
          <b>Works at </b>
        </span>
        <span>Tell Your Testimony</span>
      </div>
      <button className="button logout-button">Log out</button>
    </div>
  );
};

export default InfoCard;
