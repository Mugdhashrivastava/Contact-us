import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Mugdha");
  const [email, setEmail] = useState("support@ayasya.com");
  const [text, setText] = useState("get good at react");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontsize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdOutlinePhone fontsize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<CiMail fontsize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
          	
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/images/Service 24_7-pana 1.svg" alt="contact img"/>
      </div>
    </section>
  );
};

export default ContactForm;
