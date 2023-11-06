import './account.css';
function Account() {
    return (
        <section className='account_page container'>
                <h1>Personal information</h1>
            <table className="infor_orderdetail">
                <tr>
                    <td className="title_info ">Username:</td>
                    <td className="infor_detail ">David James</td>
                </tr>
                <tr>
                    <td className="title_info ">Email: </td>
                    <td className="infor_detail ">jame@gmail.com</td>
                </tr>
                <tr>
                    <td className="title_info ">Birthday:</td>
                    <td className="infor_detail ">D11/22/2001</td>
                </tr>
                <tr>
                    <td className="title_info ">Address:</td>
                    <td className="infor_detail ">Kentucky, the US</td>
                </tr>
            </table>
        </section>
    );
}
export default Account;