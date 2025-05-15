import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const DrawerPlacement = {
  LEFT: "start",
  RIGHT: "end", 
  TOP: "top",
  BOTTOM: "bottom"
}

interface DrawerProps {
    placement: string
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
}

export function Drawer({ show, setShow, children }: DrawerProps ) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add a card</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {children}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}