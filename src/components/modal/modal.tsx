import ReactModal from 'react-modal';
import styled from 'styled-components';
import { Button as ButtonStyled} from '@assets/styled/button';
import { Icon } from '@elements/icon/icon';

interface DialogProps {
  readonly title: string;
  readonly open: boolean;
  readonly onClose: () => void;
  readonly children: React.ReactNode;
}

export function Modal({ title, open, onClose, children, ...rest }: DialogProps) {
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

  return (
    <ReactModal 
      isOpen={open}
      contentLabel="Minimal Modal Example"
      style={customStyles}
      className="Modal"
      overlayClassName="Overlay"
    >
      <Content {...rest}>
        <Header>
          <Title>{ title }</Title>
          <Button variant='flat' onClick={() => onClose()}>
            <Icon icon='xmark'/>
          </Button>
        </Header>
        <Body>
          {children}
        </Body>
      </Content>
    </ReactModal>
  )
}

const Content = styled.div`
  background-color: white;
  border-radius: var(--border-radius-16);  
  width: 100%;
  max-width: 600px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: var(--color-stroke);
  padding: var(--spacing-28) var(--spacing-28) var(--spacing-20);
`

const Body = styled.div`
  padding: var(--spacing-20) var(--spacing-28) var(--spacing-28);
`

const Title = styled.p`
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-bold);
`

const Button = styled(ButtonStyled)`
  width: 32px;
  height: 32px;
  padding: 0;
`