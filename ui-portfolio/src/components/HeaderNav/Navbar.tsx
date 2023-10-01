import { IonToolbar, IonTitle, IonSegment, IonLabel, IonSegmentButton} from "@ionic/react"

interface SegmentButtonProps {
    name: string;
}

let options: string[] = ["About Me", "Blogposts", "Final Project"]

export const NavBar: React.FC = () => {
    return (
        <IonToolbar class="ion-no-border">
            <IonSegment value="all">
            {options.map((label) => (
            <SegmentButton name={label} />
            ))}
            </IonSegment>
        </IonToolbar>
    )
}

const SegmentButton: React.FC<SegmentButtonProps> = (props) => {
    return (
        <IonSegmentButton value = {props.name}>
            <IonLabel>{props.name}</IonLabel>
        </IonSegmentButton>
    )
}
