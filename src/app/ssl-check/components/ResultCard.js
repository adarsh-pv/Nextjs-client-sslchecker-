"use client";

export default function ResultCard({ data }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const formattedDate =
      date.getFullYear() + "-" +
      ('0' + (date.getMonth() + 1)).slice(-2) + "-" +
      ('0' + date.getDate()).slice(-2);
    return formattedDate;
  };

  return (
    <div className="result-card">
      <h3>SSL Certificate Details</h3>
      
      <div className="issuer">
        <p><strong>Issuer Name :</strong> {data?.issuer?.commonName || "N/A"}</p>
        <p><strong>Country :</strong> {data?.issuer?.country || "N/A"}</p>
        <p><strong>Organization :</strong> {data?.issuer?.organization || "N/A"}</p>
        <p><strong>Day Remindibg :</strong> {data?.daysRemaining}</p>
        {data?.issuer?.state && <p><strong>State:</strong> {data?.issuer?.state}</p>}
        {data?.issuer?.locality && <p><strong>Locality:</strong> {data?.issuer?.locality}</p>}
      </div>

      <div className="validity">
        <p><strong>Valid From:</strong> {formatDate(data?.validFrom)}</p>
        <p><strong>Valid To:</strong> {formatDate(data?.validTo)}</p>
      </div>

      <div className="subject">
        <p><strong>Subject:</strong> {data?.subject || "N/A"}</p>
      </div>

      <p><strong>Is the certificate valid?</strong> {data?.isValid ? "Yes" : "No"}</p>
      <p><strong>CA Trusted:</strong> {data?.isCATrusted ? "Yes" : "No"}</p>
      <p><strong>Is it self-signed?</strong> {data?.isSelfSigned ? "Yes" : "No"}</p>
    </div>
  );
}
