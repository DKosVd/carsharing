import axios from 'axios';
import React from 'react'
import Row from '../Row/Row';
import Pagination from '../Pagination/Pagination';
// import { Bar, Line, Pie} from 'react-chartjs-2';


export default function Users(props) {
    const [data, setData] = React.useState([]);
    const itemPerPage = 10;
    const [activePage, setActivePage] = React.useState(0);

    React.useEffect(() => {
        async function getData() {
            let { data } = await axios.get(`http://jsonplaceholder.typicode.com/posts`);
            setData(data);
        }
        getData();
    }, [])

    const handlerSort = (e) => {
        console.log(e.target.attributes.getNamedItem('data-sort').value)
    }
    const handlerChangeActivePage = (active) => {
        setActivePage(active);
    }
    const dataFromFetch = {

    }
    data.forEach( (elem, idx) => {
        dataFromFetch[elem.userId] = dataFromFetch[elem.userId] + 1 || 1; 
    })
    const dataForChart = {
        labels: Object.keys(dataFromFetch),
        datasets: [
            {
                label: 'PostOfOneUser',
                data: Object.values(dataFromFetch),
                backgroundColor: [
                    'rgb(46%, 13%, 13%, 1)',
                    'rgb(96%, 13%, 13%, 1)',
                    'rgb(16%, 18%, 1%, 1)',
                    'rgb(4%, 13%, 5%, 1)',
                    'rgb(46%, 13%, 13%, 1)',
                    'rgb(76%, 55%, 42%, 1)',
                    'rgb(6%, 13%, 13%, 1)',
                    'rgb(47%, 82%, 11%, 1)',
                    'rgb(79%, 12%, 75%, 1)',
                    'rgb(89%, 20%, 44%, 1)',
                ]
            }
        ]
    }
    const dataWithPagination = [...data];
    const ViewData = dataWithPagination.slice(itemPerPage*activePage, itemPerPage*(activePage+1))
    return (
        <>
            <div className="content__users">
                <table>
                    <thead>
                        <tr onClick={handlerSort}>
                            <th data-sort='userId'>UserId</th>
                            <th data-sort="id">Id</th>
                            <th data-sort="title">Title</th>
                            <th data-sort="body">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ViewData && ViewData.map( (elem, idx) => 
                         <Row key={`${elem}__${idx}`} {...elem} sort={handlerSort}/>
                     )
                     }
                    </tbody>
                </table>
                {/* <div className="chart">
                    <Bar
                        data={dataForChart}
                        options={
                            {
                                maintainAspectRatio: true
                            }
                        }
                    />
                    <Line
                    data={dataForChart}
                    />
                    <Pie
                    data={dataForChart}
                    />
                </div> */}
            </div>
            <Pagination
                totalItems={data.length} 
                itemPerPage={itemPerPage}
                activePage={activePage}
                onChange={handlerChangeActivePage}
                />
        </>
    )
}
