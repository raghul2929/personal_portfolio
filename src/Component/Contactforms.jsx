// import Form from 'react-bootstrap/Form';
import '../Styles/Form.css';

function TextControlsExample() {
  return (
    <form action="#" method="POST">
        <div class="form-field">
            <input type="text" id="name" name="name" required placeholder=" " />
            <label for="name">Name</label>
        </div>
        <div class="form-field">
            <input type="email" id="email" name="email" required placeholder=" " />
            <label for="email">Email</label>
        </div>
        <div class="form-field">
            <textarea id="message" name="message" required placeholder=" "></textarea>
            <label for="message">Message</label>
        </div>
        <div class="form-field">
            <button type="submit">Send Message</button>
        </div>
    </form>
  );
}

export default TextControlsExample;