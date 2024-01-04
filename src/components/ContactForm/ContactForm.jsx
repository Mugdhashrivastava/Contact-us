import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontsize="24px"/>} />
        <Button text="VIA CAll" icon={<MdOutlinePhone fontsize="24px"/>} />
        </div>
      </div>
      <div className={styles.contactImage}></div>
    </section>
  );
};

export default ContactForm;
