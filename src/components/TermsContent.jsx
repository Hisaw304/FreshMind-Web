export default function TermsContent() {
  const sections = [
    {
      title: "Last Updated",
      content: (
        <p>
          These Terms and Conditions were last updated on{" "}
          <strong>July 25, 2026</strong>.
        </p>
      ),
    },

    {
      title: "1. Acceptance of Terms",
      content: (
        <p>
          By accessing or using the FreshMind Web website and services, you
          agree to be bound by these Terms and Conditions. If you do not agree
          with these terms, please do not use our website or services.
        </p>
      ),
    },

    {
      title: "2. Our Services",
      content: (
        <>
          <p>FreshMind Web provides professional digital services including:</p>

          <ul>
            <li>Website Design</li>
            <li>Website Development</li>
            <li>Landing Pages</li>
            <li>E-commerce Development</li>
            <li>Website Maintenance</li>
            <li>SEO Services</li>
            <li>Custom Web Applications</li>
            <li>UI/UX Design</li>
          </ul>
        </>
      ),
    },

    {
      title: "3. Quotes & Pricing",
      content: (
        <p>
          All quotations are provided based on the project requirements shared
          at the time of estimation. Any additional features or changes outside
          the agreed scope may require a revised quotation.
        </p>
      ),
    },

    {
      title: "4. Payments",
      content: (
        <>
          <p>Unless otherwise agreed:</p>

          <ul>
            <li>A deposit is required before work begins.</li>
            <li>Remaining balances are due before final delivery.</li>
            <li>Late payments may delay project completion.</li>
          </ul>
        </>
      ),
    },

    {
      title: "5. Client Responsibilities",
      content: (
        <>
          <p>The client agrees to provide:</p>

          <ul>
            <li>Project requirements</li>
            <li>Brand assets and content</li>
            <li>Timely feedback</li>
            <li>Required approvals</li>
          </ul>
        </>
      ),
    },

    {
      title: "6. Intellectual Property",
      content: (
        <p>
          Upon full payment, ownership of the completed website design and
          custom-developed code created specifically for your project will be
          transferred to you, unless otherwise agreed in writing. Third-party
          libraries, fonts, plugins, and software remain subject to their
          respective licenses.
        </p>
      ),
    },

    {
      title: "7. Project Timelines",
      content: (
        <p>
          Estimated completion dates are provided in good faith. Delays in
          content delivery, approvals, or requested revisions may affect the
          project timeline.
        </p>
      ),
    },

    {
      title: "8. Limitation of Liability",
      content: (
        <p>
          FreshMind Web shall not be liable for indirect, incidental, or
          consequential damages resulting from the use of our website or
          services. We make reasonable efforts to deliver secure and reliable
          solutions but cannot guarantee uninterrupted operation.
        </p>
      ),
    },

    {
      title: "9. Third-Party Services",
      content: (
        <p>
          We may integrate services provided by third parties such as hosting
          providers, payment gateways, analytics platforms, or APIs. Their use
          is governed by their own terms and privacy policies.
        </p>
      ),
    },

    {
      title: "10. Termination",
      content: (
        <p>
          Either party may terminate a project in accordance with the agreed
          contract. Payment remains due for work completed up to the date of
          termination.
        </p>
      ),
    },

    {
      title: "11. Changes to These Terms",
      content: (
        <p>
          We reserve the right to update these Terms and Conditions at any time.
          Any changes will be published on this page together with the revised
          update date.
        </p>
      ),
    },

    {
      title: "12. Contact Information",
      content: (
        <>
          <p>
            If you have any questions regarding these Terms and Conditions,
            please contact us.
          </p>

          <p>
            <strong>FreshMind Web</strong>
            <br />
            Email: freshmindwebagency@gmail.com
            <br />
            Website: https://freshmindweb.online
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="fm-privacy-content">
      <div className="fm-container">
        {sections.map((section) => (
          <div className="fm-privacy-card" key={section.title}>
            <h2>{section.title}</h2>

            <div className="fm-privacy-text">{section.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
