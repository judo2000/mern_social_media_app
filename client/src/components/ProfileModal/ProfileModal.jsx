import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpen, setModalOpen }) {
  const theme = useMantineTheme();
  console.log(modalOpen);
  return (
    <Modal
      overlayprops={{
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      size="60%"
      opened={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <form className="infoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstName"
            placeholder="First Name"
          />

          <input
            type="text"
            className="infoInput"
            name="lastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIn"
            placeholder="Lives in"
          />

          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="relationshipStatus"
            placeholder="Relationship Status"
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
