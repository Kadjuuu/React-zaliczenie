import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";

const WrappedEntities = styled.div`
  display: block;
  background: ${Colors.white};
  margin-inline: 2%;
  margin-bottom: 2%;
  border-radius: 15px;
`;

const UpperText = styled.div`
  p {
    color: grey;
  }
`;

const SettingSet = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  font-weight: bold;
  img {
    width: 25px;
    margin-right: 10px;
  }
  p {
    font-size: 25px;
    margin-left: 20px;
    text-align: center;
  }
  input {
    outline: none;
    margin-left: 15px;
  }
`;

const ArrowSize = styled.div`
  img {
    width: 15px;
    margin-left: 5px;
  }
`;

const AdditionalFilters = styled.div`
margin-top: 15px;
  display: flex;
  align-items: center;
  font-weight: bold;
img{
    width: 15px;
}
p{
    color: #2e2e33;
    margin-left: 10px;
    margin-right: 20px;
    font-size: 20px;
}
`;


export const Filter: FC = () => {
  return (
    <WrappedEntities>
      <UpperText>
        <p>
          Rows are filtered by the following conditions starting from the top
        </p>
      </UpperText>
      <SettingSet>
        <img src="./Media/x.svg" alt="" />
        <p>Where</p>
        <p>Company</p>
        <ArrowSize>
          <img src="./Media/arrow-down.svg" alt="" />
        </ArrowSize>
        <p>Contains</p>
        <ArrowSize>
          <img src="./Media/arrow-down.svg" alt="" />
        </ArrowSize>
        <input type="text" />
      </SettingSet>
      <SettingSet>
        <img src="./Media/x.svg" alt="" />
        <p>Where</p>
        <p>Status</p>
        <ArrowSize>
          <img src="./Media/arrow-down.svg" alt="" />
        </ArrowSize>
        <p>Is</p>
        <ArrowSize>
          <img src="./Media/arrow-down.svg" alt="" />
        </ArrowSize>
        <input type="text" />
      </SettingSet>
      <SettingSet>
        <img src="./Media/x.svg" alt="" />
        <p>And</p>
        <p>Status</p>
        <ArrowSize>
          <img src="./Media/arrow-down.svg" alt="" />
        </ArrowSize>
        <p>End Before</p>
        <ArrowSize>
          <img src="./Media/arrow-down.svg" alt="" />
        </ArrowSize>
        <input type="text" />
        <p>In</p>
        <ArrowSize>
          <img src="./Media/arrow-down.svg" alt="" />
        </ArrowSize>
        <input type="text" />
      </SettingSet>

      <AdditionalFilters>
          <img src="./Media/plus.svg" alt="" />
          <p>Add filter</p>
          <p>Choose property</p>
        <ArrowSize>
          <img src="./Media/arrow-down.svg" alt="" />
        </ArrowSize>
      </AdditionalFilters>
    </WrappedEntities>
  );
};
