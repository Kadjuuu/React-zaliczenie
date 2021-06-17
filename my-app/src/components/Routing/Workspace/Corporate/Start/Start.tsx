import { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../../../../styledHelpers/Colors";
import {StartEntities} from "./Entities"
import {StartCalendar} from "./Calendar"
import {StartOwnership} from "./Ownership"



export const Start: FC = () => {
  return (
    <>
     <StartEntities/>
     <StartOwnership/>
     <StartCalendar/>
    </>
  );
};
