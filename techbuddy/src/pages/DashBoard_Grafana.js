import './css/DashBoard_Grafana.css'

const Grafana = () => {
    return (
        <div className="div-grafana">
            <iframe src="http://localhost:30091/d/xC07X_YVz/techbuddy?orgId=1" width="1500" height="1000"></iframe>
        </div>
    )
  };
  
  export default Grafana;