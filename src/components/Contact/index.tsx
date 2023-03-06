import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./style.module.scss";

const Contact: React.FC = () => {
  return (
    <section>
      <div className={classes.contact}>
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
          <Button className={classes.contact__button} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
