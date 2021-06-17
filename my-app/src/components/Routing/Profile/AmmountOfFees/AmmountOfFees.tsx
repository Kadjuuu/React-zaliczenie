import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
 
const  AmmountOfFeesWrapper= styled.div`
  background: ${Colors.white};
  padding: 5px;
  margin: 2%;
  height: 100%;
  border-top: 0.1rem solid grey;
  h1 {
      margin-top: 30px;
      color: #5e666e;
    font-size: 30px;
    font-weight: bold;
  }
`;

const SectionTitles = styled.div`
margin-top: 30px;
display: block;
margin-left: 15px;
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td {
  text-align: left;
  padding: 8px;
  font-size: 25px;
}
th {
border-bottom: 0.1rem solid grey;
text-align: left;
padding: 8px;
font-weight: bold;
font-size: 30px;
color: #5e666e
}
`;


export const AmmountOfFees: FC = () => {
  return (
    <>
      <AmmountOfFeesWrapper>
<h1>Amount of fees</h1>
<SectionTitles>
<table>
<tr>
    <th>Year</th>
    <th>Cost center</th>
    <th>Total amount</th>
    <th>Law firm</th>
  </tr>
  <tr>
    <td>2019</td>
    <td>CS 153</td>
    <td>3 500€</td>
    <td>Clifford chance</td>
  </tr>
  <tr>
    <td>2018</td>
    <td>CS 153</td>
    <td>9 500€</td>
    <td>Linklaters</td>
  </tr>
  <tr>
    <td>2017</td>
    <td>CS 47</td>
    <td>10 500€</td>
    <td>Linklaters</td>
  </tr>
  <tr>
    <td></td>
    <td>CS 153</td>
    <td>18 500€</td>
    <td>Linklaters</td>
  </tr>
  <tr>
    <td></td>
    <td>CS 32</td>
    <td>15 500€</td>
    <td>Linklaters</td>
  </tr>

    
</table>
    </SectionTitles>

      </AmmountOfFeesWrapper>
    </>
  );
};
