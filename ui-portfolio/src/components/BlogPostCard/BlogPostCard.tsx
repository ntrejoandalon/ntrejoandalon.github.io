import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import "./BlogPostCard.scss"

export const BlogPostCard: React.FC = () => {
    return (
    <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <div className='card-subtitle'>
                <IonCardSubtitle>Blog Type</IonCardSubtitle>
                <IonCardSubtitle>Date</IonCardSubtitle>
            </div>
        </IonCardHeader>
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
    );
}

