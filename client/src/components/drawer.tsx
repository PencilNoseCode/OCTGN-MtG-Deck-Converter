import Offcanvas from 'react-bootstrap/Offcanvas';

interface DrawerProps {
    placement: "start" | "end" | "top" | "bottom"
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