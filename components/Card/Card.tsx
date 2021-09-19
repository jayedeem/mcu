import { FC } from "react";

interface Props {
    title?: string;
    id?: number;
    img?: string;
    subtext?: string;
}

const Card: FC<Props> = ({ title, id, img, subtext }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtext}</p>
        </div>
    )
}

export default Card;