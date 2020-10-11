import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const Settings: React.FC = () => (
  <Layout>
    <Link to="/settings/shipping">Leveringsmetoder</Link>
  </Layout>
);

export default Settings;
