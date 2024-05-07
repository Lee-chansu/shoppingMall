import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useNavigate } from "react-router-dom";

const ModalPay = ({ mainAddressRef }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const detailAddressRef = useRef();
  const navigate = useNavigate();

  const MyHandleComplete = (data) => {
    console.log(data);
    mainAddressRef.current.value = data.address;
  };

  const closeHandler = (state) => {
    console.log(state);
    setIsModalOpened(!isModalOpened);
  };

  // useEffect(() => {
  //   console.count('세부주소로인한 재생성');
  //   console.log(detailAddress);
  // }, [detailAddress]);

  return (
    <>
      <Modal show={isModalOpened}>
        <Modal.Header>도로명 주소지 조회 서비스</Modal.Header>
        <Modal.Body>
          <div className="do_not_delete_this_div">
            <DaumPostcodeEmbed
              onComplete={MyHandleComplete}
              onClose={closeHandler}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setIsModalOpened(!isModalOpened);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Button
        className="btn btn-info"
        onClick={() => {
          setIsModalOpened(!isModalOpened);
        }}
      >
        도로명 주소지 조회하기
      </Button>
    </>
  );
};

export default ModalPay;
