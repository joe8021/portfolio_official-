// import React from 'react';


// export default class extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { feedback: '', name: 'Joe', email: 'vanhornjoe8@gmail.com' };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }


// render() {
//     return (
//         <form className="test-mailing">
//             <h1>Let's see if it works</h1>
//             <div>
//                 <textarea
//                     id="vanhornjoe8@gmail.com"
//                     name="test-mailing"
//                     onChange={this.handleChange}
//                     placeholder="Post some lorem ipsum here"
//                     required
//                     value={this.state.feedback}
//                     style={{ width: '100%', height: '150px' }}
//                 />
//             </div>
//             <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
//         </form>
//     )
// };

// handleChange(event) {
//     this.setState({ feedback: event.target.value })
// }

//     handleSubmit(event) {
//         const templateId = 'contactmeemail';

//         this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
//     }

//     sendFeedback(templateId, variables) {
//         window.emailjs.send(
//             'gmail', templateId,
//             variables
//         ).then(res => {
//             console.log('Email successfully sent!')
//         })
//             // Handle errors here however you like, or use a React error boundary
//             .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
//     }

// };


import React from 'react';
import emailjs from 'emailjs-com';

// import './ContactUs.css';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
}