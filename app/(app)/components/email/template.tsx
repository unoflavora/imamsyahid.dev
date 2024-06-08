import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h3>Hi {firstName} </h3>

    <p>
      I can acknowledge receipt of your message to my inbox. Thank you for
      sending it to me. I&apos;ll be in touch with my response shortly.
    </p>

    <p>Many Thanks,</p>

    <p>Imam Syahid Hudzaifah</p>
  </div>
);
