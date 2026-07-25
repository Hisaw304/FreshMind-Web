export default function PrivacyContent() {
  const sections = [
    {
      title: "Last Updated",
      content: (
        <>
          <p>
            This Privacy Policy was last updated on{" "}
            <strong>July 25, 2026</strong>.
          </p>
        </>
      ),
    },

    {
      title: "1. Introduction",
      content: (
        <>
          <p>
            FreshMind Web ("we", "our", or "us") respects your privacy and is
            committed to protecting any personal information you share with us.
            This Privacy Policy explains how we collect, use, store, and protect
            your information when you visit our website or use our services.
          </p>
        </>
      ),
    },

    {
      title: "2. Information We Collect",
      content: (
        <>
          <p>We may collect the following information:</p>

          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Project details you submit through our contact form</li>
            <li>Website analytics and usage data</li>
            <li>IP address and browser information</li>
          </ul>
        </>
      ),
    },

    {
      title: "3. How We Use Your Information",
      content: (
        <>
          <p>Your information may be used to:</p>

          <ul>
            <li>Respond to inquiries</li>
            <li>Provide website development services</li>
            <li>Prepare project proposals and quotations</li>
            <li>Improve our website and user experience</li>
            <li>Send project updates and important communications</li>
            <li>Comply with legal obligations</li>
          </ul>
        </>
      ),
    },

    {
      title: "4. Cookies",
      content: (
        <>
          <p>
            Our website may use cookies and similar technologies to improve
            performance, remember user preferences, and analyze website traffic.
            You may disable cookies through your browser settings if you prefer.
          </p>
        </>
      ),
    },

    {
      title: "5. Third-Party Services",
      content: (
        <>
          <p>
            We may use trusted third-party services including website analytics,
            hosting providers, payment providers, and communication tools. These
            providers only receive information necessary to perform their
            services.
          </p>
        </>
      ),
    },

    {
      title: "6. Data Security",
      content: (
        <>
          <p>
            We implement reasonable technical and organizational measures to
            protect your information from unauthorized access, disclosure,
            alteration, or destruction. However, no internet transmission or
            electronic storage system is completely secure.
          </p>
        </>
      ),
    },

    {
      title: "7. Your Rights",
      content: (
        <>
          <p>You may request to:</p>

          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information</li>
            <li>Withdraw consent where applicable</li>
            <li>Request a copy of your stored data</li>
          </ul>
        </>
      ),
    },

    {
      title: "8. Children's Privacy",
      content: (
        <>
          <p>
            Our services are not directed toward children under the age of 13.
            We do not knowingly collect personal information from children.
          </p>
        </>
      ),
    },

    {
      title: "9. Changes to This Privacy Policy",
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page together with the updated revision date.
          </p>
        </>
      ),
    },

    {
      title: "10. Contact Us",
      content: (
        <>
          <p>
            If you have any questions regarding this Privacy Policy or how your
            information is handled, please contact us.
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
