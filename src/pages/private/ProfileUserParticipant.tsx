import React from 'react';
import withAuth from '@shared/hoc/withAuth';
import PageContainer from '@components/ui/PageContainer';

const ProfileUserParticipant: React.FC = () => (
  <PageContainer>
    <h1>ProfileUserParticipant</h1>
  </PageContainer>
);

export default withAuth(ProfileUserParticipant);