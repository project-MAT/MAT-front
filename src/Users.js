import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import Page404 from './Page404';

function Users() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setData(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          '/v1/question'
        );
        setData(response.data.list); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <Page404 />;
  if (!data) return null;
  return (
    <div className="App">
    <Header />
    <main>
    {data && <p>{JSON.stringify(data, null, 2)}</p>}
    </main>
    <Aside />
    <Footer />
  </div>
  );
}

export default Users;