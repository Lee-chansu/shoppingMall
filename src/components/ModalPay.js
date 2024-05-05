import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useNavigate } from "react-router-dom";

const ModalPay = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const mainAddressRef = useRef();
  const detailAddressRef = useRef();
  const navigate = useNavigate();

  const MyHandleComplete = (data) => {
    console.log(data);
    mainAddressRef.current.value = data.address;
  };

  const handleSendAddress = () => {
    const mainAddress = mainAddressRef.current.value;
    const detailAddress = detailAddressRef.current.value;
    console.log(mainAddress);
    console.log(detailAddress);
    if (mainAddress === "") {
      alert("도로명 주소지를 설정하세요");
      return;
    }
    navigate("/nextpage", {
      state: {
        mainAddress,
        detailAddress,
      },
    });
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
      <input ref={mainAddressRef} placeholder="도로 주소명(자동)" disabled />
      <input ref={detailAddressRef} placeholder="상세 주소 기입" />
      <button className="btn  btn-info" onClick={handleSendAddress}>
        주소 설정 완료
      </button>
    </>
  );
};

export default ModalPay;
