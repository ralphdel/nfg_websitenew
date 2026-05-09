"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { industrialTrainingDepartments, siteSettings } from "@/data/siteContent";

function encode(value) {
  return encodeURIComponent(value || "");
}

export function IndustrialTrainingForm() {
  const [status, setStatus] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      `Full name: ${formData.get("fullName")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      `Institution: ${formData.get("institution")}`,
      `Course of study: ${formData.get("course")}`,
      `Current level/year: ${formData.get("level")}`,
      `Training duration required: ${formData.get("duration")}`,
      `Preferred department: ${formData.get("department")}`,
      "",
      "Short message:",
      `${formData.get("message")}`
    ];

    setStatus("Opening your email client. Attach the SIWES / IT letter directly to the email before sending.");
    window.location.href = `mailto:${siteSettings.primaryEmail}?subject=${encode("Industrial Training Enquiry")}&body=${encode(lines.join("\n"))}`;
  };

  return (
    <form className="rfq-form industrial-training-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Full name
          <input name="fullName" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Institution
          <input name="institution" type="text" required />
        </label>
        <label>
          Course of study
          <input name="course" type="text" required />
        </label>
        <label>
          Current level/year
          <input name="level" type="text" required />
        </label>
        <label>
          Training duration required
          <input name="duration" type="text" required />
        </label>
        <label>
          Preferred department
          <select name="department" defaultValue="" required>
            <option value="" disabled>Select department</option>
            {industrialTrainingDepartments.map((department) => (
              <option value={department} key={department}>{department}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="upload-field">
        <Upload size={18} aria-hidden="true" />
        <span>SIWES / IT letter upload. Attach PDF, JPG or PNG to the email that opens after submission.</span>
        <input
          name="itLetter"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={() => setStatus("File selected. Attach it directly to the email before sending.")}
        />
      </label>
      <label>
        Short message
        <textarea name="message" rows={4} required />
      </label>
      <p className="security-note">
        Submission does not guarantee placement. NFG will review enquiries based on available training capacity, safety requirements and departmental approval.
      </p>
      <button type="submit">Send Industrial Training Enquiry</button>
      {status ? <p className="form-status" role="status">{status}</p> : null}
    </form>
  );
}
