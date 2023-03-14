import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./style.module.scss";
import { motion } from "framer-motion";
import { emailHandler } from "../../lib/emailjs";
import Swal from "sweetalert2";
import Loader from "../UI/Loader";

// enums
enum HTTPStateKind {
  PENDING = 1,
  SUCCESS = 2,
  ERROR = 3,
}

const Contact: React.FC = () => {
  const [sendFormStatut, setSendFormStatut] = useState<HTTPStateKind | null>(
    null
  );
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const name = nameRef.current!.value;
    const email = emailRef.current!.value;
    const message = messageRef.current!.value;

    if (!name || !email || !message) return;

    const template = {
      name,
      email,
      message,
    };

    try {
      setSendFormStatut(HTTPStateKind.PENDING);

      const response = await emailHandler.sendEmail(template);

      if (response.status !== 200) throw new Error();
      setSendFormStatut(HTTPStateKind.SUCCESS);
    } catch (err) {
      setSendFormStatut(HTTPStateKind.ERROR);
    }
  };

  useEffect(() => {
    const swalInstance = Swal.mixin({
      customClass: {
        popup: "popup",
        confirmButton: "popup__btn",
      },
      buttonsStyling: false,
    });

    // popup display
    if (sendFormStatut === HTTPStateKind.SUCCESS) {
      swalInstance.fire({
        title: "Formulaire envoyé avec succès !",
        text: "Je vous répondrez dès que possible.",
        icon: "success",
      });
    } else if (sendFormStatut === HTTPStateKind.ERROR) {
      swalInstance.fire({
        title: "Echec de l'envoi du formulaire",
        text: "Il y a peut-être une erreur dans un/plusieurs champs.",
        icon: "error",
      });
    }
  }, [sendFormStatut]);

  return (
    <>
      {sendFormStatut === HTTPStateKind.PENDING && <Loader />}
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        onAnimationStart={() => window.scrollTo(0, 0)}
        className={classes.contact}
      >
        <Form className={classes.contact__form} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nom et Prénom</Form.Label>
            <Form.Control
              required
              ref={nameRef}
              type="text"
              placeholder="Entrer le nom et le prénom"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control
              required
              ref={emailRef}
              type="email"
              placeholder="Entrer l'email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              ref={messageRef}
              as="textarea"
              rows={3}
              placeholder="Entrer le message"
              className={classes.contact__textarea}
            />
          </Form.Group>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button size="lg" className={classes.contact__button} type="submit">
              Soumettre
            </Button>
          </motion.div>
        </Form>
      </motion.section>
    </>
  );
};

export default Contact;
