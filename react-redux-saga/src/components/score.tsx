// // App.js
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTotalScore } from '../store/actions/score';

// const App = () => {
//     const totalScore = useSelector((state: any) => state.totalScore.totalScore);
//     const loading = useSelector((state: any) => state.totalScore.loading);
//     const error = useSelector((state: any) => state.totalScore.error);
//     const dispatch = useDispatch();

//     console.log("?>>>>>>>>>>>>>>>>>>>>>>>>", totalScore);

//     useEffect(() => {
//         dispatch(fetchTotalScore());
//     }, [dispatch]);

//     return (
//         <div>
//             <h2>Total Score: {loading ? 'Loading...' : (error ? 'Error occurred' : totalScore)}</h2>
//             <p>Data: {totalScore.data}</p>

//         </div>
//     );
// };

// export default App;

// App.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTotalScore } from '../store/actions/score';

const App = () => {
    const totalScore = useSelector((state: any) => state.totalScore.totalScore?.data);
    const loading = useSelector((state: any) => state.totalScore.loading);
    const error = useSelector((state: any) => state.totalScore.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTotalScore());
    }, [dispatch]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error occurred</h2>;
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {totalScore && totalScore.map((item: any, index: number) => (
                        <tr key={index}>
                            <td>{item.fullName}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default App;
