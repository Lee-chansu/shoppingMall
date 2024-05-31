import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap"; //리액트 부트스트랩 사용한 모달
import DaumPostcodeEmbed from "react-daum-postcode";

const AddressModal = ({ mainAddressRef, innerText, setNewUser }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const MyHandleComplete = data => {
    // console.log(data);
    mainAddressRef.current.value = data.address;
    setNewUser(prev => {
      return { ...prev, mainAddress: data.address };
    });
  };

  const closeHandler = state => {
    console.log(state);
    setIsModalOpened(!isModalOpened);
  };

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
        variant="secondary"
        onClick={() => {
          setIsModalOpened(!isModalOpened);
        }}
      >
        <h6 className="carrySelectBtn">{innerText}</h6>
      </Button>
    </>
  );
};
export default AddressModal;
