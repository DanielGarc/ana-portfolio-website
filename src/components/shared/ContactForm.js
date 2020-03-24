import React from 'react';

import '../../css/contactForm.css';
import Section from './Section';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ''
    };
  }
  render() {
    const { status } = this.state;
    return (
      <>
        <div className='cFormWrapper'>
          <div className='cFormContent'>
            <div className='cFormLeftContent'>
              <h2>DON'T BE A STRANGER</h2>
              <h1>
                Let's
                <br />
                connect!
              </h1>
            </div>
            <div className='cFormRightContent'>
              <h2>DON'T BE A STRANGER</h2>
              <form action='https://formspree.io/mzbzpgjk' method='POST'>
                <input
                  type='hidden'
                  name='_next'
                  value='http://localhost:3000/'
                />
                <label className='cFormRightContentNameLabel'>Name:</label>
                <input
                  required
                  type='text'
                  id='fname'
                  name='firstname'
                  placeholder='Enter your name'
                ></input>
                <label style={{ marginTop: 15 }}>Email:</label>
                <input
                  required
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                />
                <label style={{ marginTop: 15 }}>Message:</label>
                <textarea
                  minLength='1'
                  rows='2'
                  type='text'
                  name='message'
                  placeholder='Words go here'
                />

                {status === 'SUCCESS' ? (
                  <p>Thanks!</p>
                ) : (
                  <input type='submit' value='Submit mesage' />
                )}
                {status === 'ERROR' && <p>Ooops! There was an error.</p>}
              </form>
            </div>
          </div>
        </div>
        <Section wrapperColor='#fff' sectionColor='#fff'>
          <div className='section-spacer'></div>
        </Section>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    debugger;
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
