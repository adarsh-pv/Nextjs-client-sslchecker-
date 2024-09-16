export default function InputForm({ domain, setDomain, onSubmit }) {
    return (
      <form onSubmit={onSubmit}>
        <label>
          Domain:
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter domain (e.g., amazon.com)"
          />
        </label>
        <button type="submit">Check SSL</button>
      </form>
    );
  }
  