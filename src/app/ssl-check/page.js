"use client"
import InputForm from './components/InputForm';
import ResultCard from './components/ResultCard';
import { useState } from 'react';
import { fetchSSLCertificate } from '@/services/sslService';

export default function SSLCheckPage() {
  const [domain, setDomain] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setCertificateData(null); 

    try {
    setLoading(true)
      const data = await fetchSSLCertificate(domain);
      if (!data || data.status === 500 ) {
        setCertificateData('NotFound'); 
        setLoading(false)
      } else {
        setCertificateData(data); 
        setLoading(false)
      }
    } catch (err) {
      setError('Failed to fetch SSL certificate data.');
    }
  };
    console.log(certificateData,"ff")
  return (
    <div>
      <h2>SSL Checker</h2>
      <InputForm domain={domain} setDomain={setDomain} onSubmit={handleSubmit} loading={loading}/>
      {loading ? <h3>Loading...</h3>:''}
      {certificateData === 'NotFound' ? <h2>Not a existing domain</h2> : certificateData === null ? <p className='Center'>Please search domail SSL</p> :<ResultCard data={certificateData} />}
      {error && <p>{error}</p>}
    </div>
  );
}
