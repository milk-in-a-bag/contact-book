import mail from "./assets/mail-icon.png";
import phone from "./assets/phone-icon.png";

export default function Contact(props) {
  return (
    <article className="contact-card">
      <img src={props.img} alt={`Photo of ${props.name}`} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phone} alt="phone icon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={mail} alt="mail icon" />
        <p>{props.mail}</p>
      </div>
    </article>
  );
}
