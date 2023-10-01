import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Dashboard.css';
import { NavBar } from '../../components/HeaderNav/Navbar';
import { BlogPostDisplay } from '../../components/BlogPostsDisplayer/BlogpostDisplay';

const Dash: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <NavBar/>
      </IonHeader>
      <IonContent fullscreen>
        <BlogPostDisplay />
      </IonContent>
    </IonPage>
  );
};

export default Dash;
