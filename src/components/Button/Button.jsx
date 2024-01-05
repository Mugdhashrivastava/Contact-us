
import styles from "./Button.module.css";

const Button = (props) => {
  

  // this line is destructuring so we dont have to access props.text every time we could just do text hehhehehheehhehhehehhehehehheh
  const {isOutline,icon,text,...rest} = props;
  console.log(props);
  return (
    <button {...rest}  className={isOutline ? styles.outline_btn :styles.primary_btn}>
     
     {icon}
     {text}
   
    </button>
  );
};

export default Button;
