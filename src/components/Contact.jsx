import React from "react";

// import logo1 from "../img/index-procaliber-lacrosse.png";



const Contact = () => {
    return (
        <>
        <div class="container" id="contactform">  
            <form id="contact" action="" method="post">
                <h3>Get In Touch</h3>
                <h4>Feel free to contact me</h4>
                <fieldset>
                <input placeholder="Your name" type="text" tabindex="1" required autofocus />
                </fieldset>
                <fieldset>
                <input placeholder="Your Email Address" type="email" tabindex="2" required />
                </fieldset>
                <fieldset>
                <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3"  />
                </fieldset>
                <fieldset>
                <input placeholder="Your Web Site (optional)" type="url" tabindex="4"  />
                </fieldset>
                <fieldset>
                <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" action="mailto:ezequiasguerra@yahoo.com.br">Submit</button>
                </fieldset>
            </form>
        </div>
        </>       
      
    )
}

export default Contact;
