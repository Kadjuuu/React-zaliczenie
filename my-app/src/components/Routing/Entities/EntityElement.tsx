import { FC } from "react"
import styled from "styled-components"
import { Colors } from "../../../styledHelpers/Colors";

const ElementWrapper = styled.div`
display: flex;
 background: ${Colors.white};
  padding: 5px;
  margin: 2%;
  height: 100%;
  border: 1px solid black;
`;
const ElementImage = styled.div`
img{
    width: 100px;
    height: 100px;
    
}
`;

const Info = styled.div`
margin-left: 5px;
h1{
    margin-top: 5px;
    font-size: 20px;
    color: #5a5f6b;
    font-weight: bold;
}
p{
    margin-top: 15%;
    color: #aaaaaa
}

`;

export const EntityElement: FC<{img:string, title:string, description:string}> = (props)=>{
    return(
        <>
            <ElementWrapper>
                <ElementImage>
                <img src={props.img} alt="" />
                </ElementImage>
                <Info>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                </Info>
            </ElementWrapper>

        </>
    )
}