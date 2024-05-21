import Patient from "../components/Patient";

const hearthRecord = () => {
    return (
      <div >
        <header style = {{
         textAlign: "center",
          //  padding: "5px 0"
          }}>
          <a className="long-underline">Hồ sơ bệnh nhân </a>
        </header>
        <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "20px"
                }}>
          <Patient/>
          <Patient/>
          <Patient/>
        </div>
      </div>
      
    )
  }
   
  export default hearthRecord;