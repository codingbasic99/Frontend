import React,{useEffect,useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


import { http } from '../config/axiosConfig.js'

const Chart = () => {
    const [Data, setData] = useState(null)
    useEffect(() => {
      http('/dashboard').then(res=>setData(res.data)).catch(err=>console.log(err.message))    
    }, [])
    
//CHART START------------------
ChartJS.register(ArcElement, Tooltip, Legend);

 const DATA = {
  labels: [`Users=${Data?.users}`,`Categories=${Data?.categories}`, `Transactions=${Data?.transactions}`, `Products=${Data?.products}`, `Cars=${Data?.cars}`],
  datasets: [
    {
      label: '# of Votes',
      data:[Data?.users,Data?.categories,Data?.transactions,Data?.products,Data?.cars],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
//CHART END=-----------------------------


  return (
    <div>
        <Container>
            <Row>
                <Col lg={8} >       
                    <Pie data={DATA}/>
               </Col>
            </Row>
        </Container>
    </div>
  )
}






export default Chart