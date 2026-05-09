"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { industries, siteSettings } from "@/data/siteContent";

const enquiryTypes = [
  "RFQ / replacement part",
  "Wear solution",
  "Corrosion protection",
  "Reverse engineering",
  "Municipal casting",
  "Machining / fabrication",
  "3D printing / advanced manufacturing",
  "Facility visit",
  "Careers"
];

const urgencyOptions = ["Routine", "Planned shutdown", "Urgent", "Plant stopped"];
const responseOptions = ["Email", "Phone", "WhatsApp"];

function encode(value) {
  return encodeURIComponent(value || "");
}

export function RFQForm({ compact = false, industries: industriesProp = industries, siteSettings: siteSettingsProp = siteSettings }) {
  const [status, setStatus] = useState("");
  const settings = siteSettingsProp;

  const submit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      `Full name: ${formData.get("fullName")}`,
      `Company: ${formData.get("company")}`,
      `Job title: ${formData.get("jobTitle")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      `Industry: ${formData.get("industry")}`,
      `Enquiry type: ${formData.get("enquiryType")}`,
      `Urgency: ${formData.get("urgency")}`,
      `Existing drawing available: ${formData.get("drawingAvailable")}`,
      `Sample part available: ${formData.get("samplePartAvailable")}`,
      `Quantity required: ${formData.get("quantity")}`,
      `Preferred response method: ${formData.get("responseMethod")}`,
      `Material known: ${formData.get("materialKnown") || "Not provided"}`,
      `Equipment name: ${formData.get("equipmentName") || "Not provided"}`,
      `OEM part number: ${formData.get("oemPartNumber") || "Not provided"}`,
      `Operating environment: ${formData.get("operatingEnvironment") || "Not provided"}`,
      `Failure description: ${formData.get("failureDescription") || "Not provided"}`,
      `Shutdown date: ${formData.get("shutdownDate") || "Not provided"}`,
      `Location/site: ${formData.get("siteLocation") || "Not provided"}`,
      "",
      "Part / problem description:",
      `${formData.get("description")}`
    ];

    setStatus("Opening your email client with the RFQ details. Attach confidential drawings or photos directly to that email.");
    window.location.href = `mailto:${settings.salesEmail || settings.primaryEmail}?subject=${encode("NFG RFQ / Technical Review")}&body=${encode(lines.join("\n"))}`;
  };

  return (
    <form className={`rfq-form ${compact ? "rfq-form-compact" : ""}`} onSubmit={submit}>
      <div className="form-grid">
        <label>
          Full name
          <input name="fullName" type="text" autoComplete="name" required />
        </label>
        <label>
          Company
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <label>
          Job title
          <input name="jobTitle" type="text" autoComplete="organization-title" required />
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
          Industry
          <select name="industry" defaultValue="" required>
            <option value="" disabled>Select industry</option>
            {industriesProp.map((industry) => (
              <option value={industry.title} key={industry.slug}>{industry.title}</option>
            ))}
          </select>
        </label>
        <label>
          Enquiry type
          <select name="enquiryType" defaultValue="" required>
            <option value="" disabled>Select enquiry type</option>
            {enquiryTypes.map((type) => (
              <option value={type} key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          Urgency
          <select name="urgency" defaultValue="" required>
            <option value="" disabled>Select urgency</option>
            {urgencyOptions.map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Existing drawing available?
          <select name="drawingAvailable" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Sample part available?
          <select name="samplePartAvailable" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Quantity required
          <input name="quantity" type="text" required />
        </label>
        <label>
          Preferred response method
          <select name="responseMethod" defaultValue="" required>
            <option value="" disabled>Select method</option>
            {responseOptions.map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Part / problem description
        <textarea
          name="description"
          placeholder="Describe the broken part, drawing, material, industry, wear condition, corrosion issue or operational problem."
          rows={compact ? 4 : 5}
          required
        />
      </label>

      {!compact ? (
        <div className="form-grid">
          <label>
            Material known?
            <input name="materialKnown" type="text" />
          </label>
          <label>
            Equipment name
            <input name="equipmentName" type="text" />
          </label>
          <label>
            OEM part number
            <input name="oemPartNumber" type="text" />
          </label>
          <label>
            Operating environment
            <input name="operatingEnvironment" type="text" />
          </label>
          <label>
            Failure description
            <input name="failureDescription" type="text" />
          </label>
          <label>
            Shutdown date
            <input name="shutdownDate" type="date" />
          </label>
          <label className="form-grid-wide">
            Location/site
            <input name="siteLocation" type="text" />
          </label>
        </div>
      ) : null}

      <label className="upload-field">
        <Upload size={18} aria-hidden="true" />
        <span>Upload drawing/photo/file. Attach confidential files to the email that opens after submission.</span>
        <input
          name="rfqFile"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.step,.stp,.stl,.dxf,.dwg,.zip"
          onChange={() => setStatus("File selected. For confidentiality, attach it directly to your email or secure backend once connected.")}
        />
      </label>

      <p className="security-note">
        RFQ uploads should be treated as confidential client data. Sanity is reserved for public CMS media and brochures; secure private storage should be connected for production upload handling.
      </p>

      <button type="submit">Send RFQ / Technical Review</button>
      {status ? <p className="form-status" role="status">{status}</p> : null}
    </form>
  );
}
