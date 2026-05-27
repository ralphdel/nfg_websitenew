"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { industries, rtqFormConfig, siteSettings } from "@/data/siteContent";

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
const yesNoOptions = ["Yes", "No"];
const yesNoMaybeOptions = ["Yes", "No", "Maybe"];

function encode(value) {
  return encodeURIComponent(value || "");
}

function normalizeSupportType(value) {
  const normalized = String(value || "").toLowerCase();
  if (normalized.includes("emergency")) return "emergency";
  if (normalized.includes("planned") || normalized.includes("stocking")) return "planned";
  return "standard";
}

function suggestedUrgency(supportType) {
  if (supportType === "emergency") return "Plant stopped";
  if (supportType === "planned") return "Planned shutdown";
  return "Routine";
}

function getSupportTypeLabel(options, value) {
  return options.find((option) => option.value === value)?.label || "Standard RFQ / Technical Review";
}

function optionalLine(formData, label, name) {
  return `${label}: ${formData.get(name) || "Not provided"}`;
}

function SelectField({ label, name, options, defaultValue = "", className = "" }) {
  return (
    <label className={className}>
      {label}
      <select name={name} defaultValue={defaultValue}>
        <option value="" disabled>Select one</option>
        {options.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export function RFQForm({
  compact = false,
  industries: industriesProp = industries,
  siteSettings: siteSettingsProp = siteSettings,
  formConfig = rtqFormConfig,
  initialSupportType = "standard",
  initialInterest = ""
}) {
  const settings = siteSettingsProp;
  const supportOptions = formConfig.supportTypeOptions?.length ? formConfig.supportTypeOptions : rtqFormConfig.supportTypeOptions;
  const initialType = normalizeSupportType(initialSupportType);
  const [supportType, setSupportType] = useState(initialType);
  const [urgency, setUrgency] = useState(suggestedUrgency(initialType));
  const [status, setStatus] = useState("");
  const supportTypeLabel = getSupportTypeLabel(supportOptions, supportType);
  const stockingInterest = String(initialInterest || "").toLowerCase() === "stocking" ? "Yes" : "";

  const updateSupportType = (value) => {
    setSupportType(value);
    setUrgency(suggestedUrgency(value));
  };

  const submit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedSupportType = formData.get("supportType") || supportTypeLabel;
    const subject =
      supportType === "emergency"
        ? "NFG Emergency Manufacturing Support"
        : supportType === "planned"
          ? "NFG Planned Critical-Parts Support"
          : "NFG RFQ / Technical Review";

    const lines = [
      `Support type: ${selectedSupportType}`,
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
      `Location/site: ${formData.get("siteLocation") || "Not provided"}`
    ];

    if (supportType === "planned") {
      lines.push(
        "",
        "Planned critical-parts support:",
        optionalLine(formData, "Upcoming shutdown / turnaround date", "upcomingShutdownDate"),
        optionalLine(formData, "Critical parts list available", "criticalPartsListAvailable"),
        optionalLine(formData, "Repeat parts currently imported", "repeatPartsCurrentlyImported"),
        optionalLine(formData, "Parts with no drawings", "partsWithNoDrawings"),
        optionalLine(formData, "Interest in minimum stock levels", "minimumStockInterest"),
        optionalLine(formData, "Interest in consignment stocking", "consignmentStockingInterest"),
        optionalLine(formData, "Maintenance contact name", "maintenanceContactName"),
        optionalLine(formData, "Planning contact name", "planningContactName"),
        optionalLine(formData, "Procurement contact name", "procurementContactName")
      );
    }

    if (supportType === "emergency") {
      lines.push(
        "",
        "Emergency manufacturing support:",
        optionalLine(formData, "Plant currently stopped", "plantCurrentlyStopped"),
        optionalLine(formData, "Production affected duration", "productionAffectedDuration"),
        optionalLine(formData, "Emergency shutdown date", "emergencyShutdownDate"),
        optionalLine(formData, "Sample part available immediately", "immediateSampleAvailable"),
        optionalLine(formData, "Urgent site visit required", "urgentSiteVisitRequired")
      );
    }

    lines.push("", "Part / problem description:", `${formData.get("description")}`);

    setStatus("Opening your email client with the RFQ details. Attach confidential drawings or photos directly to that email.");
    window.location.href = `mailto:${settings.salesEmail || settings.primaryEmail}?subject=${encode(subject)}&body=${encode(lines.join("\n"))}`;
  };

  return (
    <form className={`rfq-form ${compact ? "rfq-form-compact" : ""}`} onSubmit={submit}>
      <section className="rfq-support-section" aria-labelledby="support-type-heading">
        <h2 id="support-type-heading">What support do you need?</h2>
        <div className="support-type-options">
          {supportOptions.map((option) => (
            <label className={`support-type-option ${supportType === option.value ? "is-active" : ""}`} key={option.value}>
              <input
                type="radio"
                name="supportType"
                value={option.label}
                checked={supportType === option.value}
                onChange={() => updateSupportType(option.value)}
                required
              />
              <span>
                <strong>{option.label}</strong>
                <small>{option.description}</small>
                <em>{option.defaultGuidance}</em>
              </span>
            </label>
          ))}
        </div>
        <p className="rfq-context-note">
          {supportType === "emergency"
            ? "Emergency support is for plants already stopped, under pressure or waiting for urgent replacement support."
            : supportType === "planned"
              ? "Planned support is for shutdowns, repeat parts, critical spares, stock-level discussions and consignment stocking."
              : "Standard RFQ / Technical Review is for part, drawing, photo or manufacturing requirement review."}
        </p>
      </section>

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
        <label className={supportType !== "standard" ? "is-highlighted" : ""}>
          Urgency
          <select name="urgency" value={urgency} onChange={(event) => setUrgency(event.target.value)} required>
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
        <>
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

          {supportType === "planned" ? (
            <section className="rfq-conditional-section" aria-label="Planned critical-parts support fields">
              <h3>Planned Critical-Parts Support</h3>
              <div className="form-grid">
                <label>
                  Upcoming shutdown / turnaround date
                  <input name="upcomingShutdownDate" type="date" />
                </label>
                <SelectField label="Critical parts list available?" name="criticalPartsListAvailable" options={yesNoOptions} />
                <SelectField label="Repeat parts currently imported?" name="repeatPartsCurrentlyImported" options={yesNoOptions} />
                <SelectField label="Parts with no drawings?" name="partsWithNoDrawings" options={yesNoOptions} />
                <SelectField
                  label="Interest in minimum stock levels?"
                  name="minimumStockInterest"
                  options={yesNoMaybeOptions}
                  defaultValue={stockingInterest ? "Maybe" : ""}
                  className={stockingInterest ? "is-highlighted" : ""}
                />
                <SelectField
                  label="Interest in consignment stocking?"
                  name="consignmentStockingInterest"
                  options={yesNoMaybeOptions}
                  defaultValue={stockingInterest}
                  className={stockingInterest ? "is-highlighted" : ""}
                />
                <label>
                  Maintenance contact name
                  <input name="maintenanceContactName" type="text" />
                </label>
                <label>
                  Planning contact name
                  <input name="planningContactName" type="text" />
                </label>
                <label className="form-grid-wide">
                  Procurement contact name
                  <input name="procurementContactName" type="text" />
                </label>
              </div>
            </section>
          ) : null}

          {supportType === "emergency" ? (
            <section className="rfq-conditional-section" aria-label="Emergency manufacturing support fields">
              <h3>Emergency Manufacturing Support</h3>
              <div className="form-grid">
                <SelectField label="Is the plant currently stopped?" name="plantCurrentlyStopped" options={yesNoOptions} />
                <label>
                  How many hours/days has production been affected?
                  <input name="productionAffectedDuration" type="text" />
                </label>
                <label>
                  Is there an emergency shutdown date?
                  <input name="emergencyShutdownDate" type="date" />
                </label>
                <SelectField label="Is a sample part available immediately?" name="immediateSampleAvailable" options={yesNoOptions} />
                <SelectField label="Is urgent site visit required?" name="urgentSiteVisitRequired" options={yesNoMaybeOptions} />
              </div>
            </section>
          ) : null}
        </>
      ) : null}

      <p className="rfq-form-note">
        The more clearly maintenance, planning and procurement are aligned, the better NFG can assess the requirement, plan the manufacturing route and support delivery realistically.
      </p>

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
