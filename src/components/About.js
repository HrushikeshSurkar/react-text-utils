import React from "react";
import "./About.css"; // Import the CSS file for styling

export default function About() {
  return (
    <div className="container">
      <h1>About TextUtils</h1>
      <p className="intro">
        TextUtils is a powerful and user-friendly application designed to assist
        with various text manipulation tasks. Whether you're a writer,
        developer, or just someone who works with text frequently, TextUtils
        provides a suite of tools to enhance your productivity.
      </p>

      <div className="accordion" id="accordionExample">
        {/* Key Features Accordion Item */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Key Features
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <strong>Text Analysis:</strong> Analyze text for word count,
                  sentence count, and readability.
                </li>
                <li>
                  <strong>Case Conversion:</strong> Easily convert text between
                  uppercase, lowercase, and title case.
                </li>
                <li>
                  <strong>Text Formatting:</strong> Format text with custom
                  styles and alignments.
                </li>
                <li>
                  <strong>JSON Formatter:</strong> Beautify and format JSON data
                  for better readability.
                </li>
                <li>
                  <strong>Customizable Settings:</strong> Adjust the application
                  settings to fit your preferences.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works Accordion Item */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How It Works
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                TextUtils operates on a simple, intuitive interface. You can
                start by inputting your text into the main text area. Use the
                available tools to analyze, format, or convert the text as
                needed. The results will be displayed instantly, allowing you to
                make quick adjustments.
              </p>
              <p>
                Our JSON formatter tool enables you to paste JSON data and
                instantly see it formatted for better readability. You can
                collapse and expand JSON objects and arrays to view nested data
                without clutter.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Us Accordion Item */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Contact Us
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                We value your feedback and are here to help with any questions
                or issues you may have. You can reach us through the following
                channels:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> support@textutils.com
                </li>
                <li>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </li>
                <li>
                  <strong>Address:</strong> 123 TextUtils Lane, Suite 456,
                  Textville, TX 78901
                </li>
              </ul>
              <p>
                Feel free to get in touch with us for support, feature requests,
                or general inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
