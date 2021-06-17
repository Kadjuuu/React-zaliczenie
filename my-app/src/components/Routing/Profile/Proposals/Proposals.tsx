import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
 
const ProposalsWrapper= styled.div`
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
  margin-bottom: 50px;
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
tr:nth-child(even) {
}

`;

const SeeMore= styled.div`
margin-top: 5px;
position: absolute;
margin-left: 47%;
font-weight: bold;
font-size: 30px;
color: #000000;
cursor: pointer;

`;

export const Proposals: FC = () => {
  return (
    <>
      <ProposalsWrapper>
<h1>Proposals</h1>
<SectionTitles>
<table>
<tr>
    <th>Name</th>
    <th>Entity</th>
    <th>Location</th>
    <th>Expertise</th>
    <th>Date</th>
    <th>Firm</th>
  </tr>
  <tr>
    <td>Operation Test</td>
    <td>Renault Corporation</td>
    <td>France</td>
    <td>#Tax</td>
    <td>20/01/2018</td>
    <td>Racine</td>
  </tr>
  <tr>
    <td>Op. Latandre</td>
    <td>Renault HQ</td>
    <td>USA</td>
    <td>#M&A</td>
    <td>18/02/2019</td>
    <td>Clifford chance</td>
  </tr>
  <tr>
    <td>Op. Prometheus</td>
    <td>Renault Brasil</td>
    <td>Italia</td>
    <td>#Social</td>
    <td>18/02/2019</td>
    <td>SVZ</td>
  </tr>

    
</table>
<SeeMore>
<p>See more proposals</p>
</SeeMore>
    </SectionTitles>

      </ProposalsWrapper>
    </>
  );
};
