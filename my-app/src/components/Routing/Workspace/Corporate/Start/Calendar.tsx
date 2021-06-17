import { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../../../../styledHelpers/Colors";

const Calendar = styled.div`
  display: block;
  height: 280px;
  padding: 20px;
  width: 300px;
  overflow: hidden;
  margin: 2%;
  background: white;
  border:1px solid black;
p{
    margin-top: 30px;
    color: #444494;
font-size: 30px;
}
b{
    font-weight: bold;
}
`;

const CalendarDescription = styled.div`
p{
    color: grey;
    font-size: 25px;
}
`;

const CalendarWrapper = styled.div`
margin:20px;
align-items: left;
img{
    width: 80px;
    height: 80px;
}
`;


export const StartCalendar: FC = () => {
  return (
    <>
    <CalendarWrapper>
    <Calendar>
        <img src="./media/CContract3.png" alt="" />
        <p>Define the <b>calendar</b> </p>
        <CalendarDescription>

<p>Prepare future events by creating detailed plans around the life of your entity.</p>
        </CalendarDescription>
    </Calendar>
    </CalendarWrapper>
    </>
  );
};
