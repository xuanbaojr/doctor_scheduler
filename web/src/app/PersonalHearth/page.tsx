import Link from "next/link";
import Patient from "../components/Patient";

const PersonalHearth = () => {
    return (
      <div >
      <header style = {{
          textAlign: "center",
        }}>
        <a className="long-underline">Hồ sơ cá nhân</a>
      </header>
      <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "20px"
              }}>
        <Patient/>
        <div className="grid grid-cols-10 px-4 lg:px-0 lg:max-w-4xl w-full bg-blue-50 rounded-lg mt-6" style={{
          height: "500px"
        }}>
          <div className=" col-span-3  bg-blue-100">
            <div className ="navbar">
              <div>
                <Link href="">Hồ sơ bệnh x</Link>
              </div>
              <div>
                <Link href="">Hồ sơ bệnh y</Link>
              </div>
              <div>
                <Link href="">Hồ sơ bệnh z</Link>
              </div>
            </div>
          </div>
          <div className="content col-span-7  bg-blue-50">
          aaaaa
          </div>
        </div>
      </div>
    </div>
    )
  }
   
  export default PersonalHearth;