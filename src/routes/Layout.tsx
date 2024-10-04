import React from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Main from '@components/common/Main';
import PageContainer from "@components/ui/PageContainer.tsx";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageContainer>
      <Header/>
        <Main>
          {children}
        </Main>
      <Footer/>
    </PageContainer>
  );
};

export default Layout;