import { IonToolbar, IonTitle, IonSegment, IonLabel, IonSegmentButton, IonButton, IonIcon} from "@ionic/react"
import { BlogPostCard } from "../BlogPostCard/BlogPostCard"
import './BlogpostDisplay.scss';
import { arrowBack, arrowForward} from "ionicons/icons";

export const BlogPostDisplay: React.FC = () => {
    return (
        <div className="full-display">
            <div className="title">
                <h4>BLOGPOSTS</h4>
            </div>
            <CardDisplay />
        </div>
    )
}

const CardDisplay: React.FC = () => {
    return(
        <div className = "cardholder"> 
        <IonButton className="arrow-button" fill="clear">
            <IonIcon slot="icon-only" icon={arrowBack}></IonIcon>
        </IonButton>

        <div className="cards">
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
        </div>

        <IonButton className="arrow-button" fill="clear">
            <IonIcon slot="icon-only" icon={arrowForward}></IonIcon>
        </IonButton>
        </div>
    )
}
