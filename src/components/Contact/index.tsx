import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./style.module.scss";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section className={classes.contact}>
      <motion.div
        className={classes.contact}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <Form className={classes.contact__form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button className={classes.contact__button} type="submit">
              Submit
            </Button>
          </motion.div>
        </Form>
      </motion.div>
    </section>
  );
};

export default Contact;
