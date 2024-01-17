import Modal from 'react-modal';
import { useState } from 'react';
import styled from 'styled-components';
import { Button as ButtonStyled } from '@assets/styled/button';

interface DialogProps {
  readonly title: string;
  readonly message?: string;
  readonly resolver: (value: boolean) => void;
}

export function Dialog({ title, message, resolver }: DialogProps) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [open, setOpen] = useState(true);

  const handleOnClick = (value: boolean) => {
    resolver(value);
    setOpen(false);
  };

  return (
    <Modal
      isOpen={open}
      contentLabel="Minimal Modal Example"
      style={customStyles}
      className="Modal"
      overlayClassName="Overlay"
    >
      <Content>
        <Title>{title}</Title>
        <Message>{message}</Message>

        <ButtonContent>
          <Button variant="primary" onClick={() => handleOnClick(true)}>
            Ok
          </Button>
          <Button variant="secondary" onClick={() => handleOnClick(false)}>
            Cancel
          </Button>
        </ButtonContent>
      </Content>
    </Modal>
  );
}

const Content = styled.div`
  background-color: white;
  border-radius: var(--border-radius-16);
  padding: var(--spacing-36);
`;
const Title = styled.p`
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-16);
`;
const Message = styled.p``;

const ButtonContent = styled.div`
  margin-top: var(--spacing-36);
  display: flex;
  gap: var(--spacing-16);
`;

const Button = styled(ButtonStyled)`
  min-width: 150px;
`;
