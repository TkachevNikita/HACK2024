import React from 'react';
import withAuth from '@shared/hoc/withAuth';

const ProfileUserParticipant: React.FC = () => (
  <div>
    <h1>ProfileUserParticipant</h1>
  </div>
);

export default withAuth(ProfileUserParticipant);