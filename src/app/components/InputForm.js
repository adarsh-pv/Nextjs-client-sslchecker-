export default function InputForm({ domain, setDomain, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter domain name"
        />
        <button type="submit" onClick={()=>handleSubmit()}>Check SSL Certificate</button>
      </form>
    );
  }
  ``
  