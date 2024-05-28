import React from "react";
import styles from "../css/footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <h2 className={styles.title}> About Us</h2>
            <p>pick&fit </p>
            <p>hotcake1234@naver.com </p>
            <p>tel.010-XXXX-XXXX</p>
            <p>이찬수, 유아린, 송효근, 윤지호</p>
          </li>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <h2 className={styles.title}>CUSTUMER CENTER</h2>
            <p>전화번호 </p>
            <p>010-XXXX-XXXX </p>
            <p>현재 고객센터 점검중(0~24시)</p>
          </li>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <h2 className={styles.title}>BANK ACCOUNT</h2>
            <p>테스트용이므로 실제로 입금되지 않습니다. </p>
            <p> 기업은행 : 012-xxxx-xxxx</p>
            <p> 카카오뱅크 : 555-xxxx-yyyy </p>
            <p> 입금주 : 없음</p>
          </li>
        </ul>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <h2 className={styles.title}>교환,환불,취소 안내</h2>
            <p>교환반품주소지 </p>
            <p>인천광역시 부평구 X동 XXX </p>
            <p> 유통사 고객센터: 1588-9XXX</p>
            <p>택배사에 자동수거 접수가 되지 않습니다.</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};
