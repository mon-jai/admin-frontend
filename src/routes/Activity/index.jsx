import GridView from "./GridView"
import TableView from "./TableView"
import { useState } from "react"

const dummyActivities = [
  {
    name: "尾牙抽獎",
    status: "public",
    responsesCount: 15,
    lastModified: new Date("2023/09/16"),
    created: new Date("2023/09/16"),
  },
  {
    name: "尾牙抽獎",
    status: "private",
    responsesCount: 25,
    lastModified: new Date("2023/09/16"),
    created: new Date("2023/09/16"),
  },
  {
    name: "尾牙抽獎",
    status: "public",
    responsesCount: 35,
    lastModified: new Date("2023/09/16"),
    created: new Date("2023/09/16"),
  },
  {
    name: "尾牙抽獎",
    status: "private",
    responsesCount: 45,
    lastModified: new Date("2023/09/16"),
    created: new Date("2023/09/16"),
  },
  {
    name: "尾牙抽獎",
    status: "public",
    responsesCount: 55555,
    lastModified: new Date("2023/09/16"),
    created: new Date("2023/09/16"),
  },
]

export default function Activity() {
  const [viewMode, setViewMode] = useState(/** @type {("grid" | "table")} */ ("grid"))
  const [activities, _setActivities] = useState(
    /** @type {{ name: string; status: "public" | "private"; responsesCount: number; lastModified: Date; created: Date }[]} */ dummyActivities,
  )

  return (
    <div style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          color: "#000",
          fontFamily: "Montserrat",
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: 1,
          padding: "8px 5px",
        }}
      >
        活動總覽
      </div>
      <div style={{ display: "flex", gap: "20px", width: "100%" }}>
        <select
          style={{
            width: "290px",
            fontSize: "14px",
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #979797",
          }}
        >
          <option disabled selected>
            全部狀態
          </option>
        </select>
        <select
          style={{
            width: "290px",
            fontSize: "14px",
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #979797",
          }}
        >
          <option disabled selected>
            建立活動日期
          </option>
        </select>
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            marginLeft: "auto",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: viewMode === "grid" ? "black" : "",
            }}
            onClick={() => setViewMode("grid")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 19 19" fill="none">
              <path
                d="M0 8.17778H8.17778V0H0M0 18.4H8.17778V10.2222H0M10.2222 18.4H18.4V10.2222H10.2222M10.2222 0V8.17778H18.4V0"
                fill={viewMode === "grid" ? "white" : "black"}
              />
            </svg>
          </div>
          <div
            style={{
              width: "44px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: viewMode === "table" ? "black" : "",
            }}
            onClick={() => setViewMode("table")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={17} viewBox="0 0 20 17" fill="none">
              <path
                d="M4.86486 0.56H20V2.8H4.86486V0.56ZM4.86486 9.52V7.28H20V9.52H4.86486ZM1.62162 0C2.0517 0 2.46417 0.176999 2.76828 0.49206C3.07239 0.807122 3.24324 1.23444 3.24324 1.68C3.24324 2.12556 3.07239 2.55288 2.76828 2.86794C2.46417 3.183 2.0517 3.36 1.62162 3.36C1.19154 3.36 0.779075 3.183 0.474962 2.86794C0.170849 2.55288 0 2.12556 0 1.68C0 1.23444 0.170849 0.807122 0.474962 0.49206C0.779075 0.176999 1.19154 0 1.62162 0ZM1.62162 6.72C2.0517 6.72 2.46417 6.897 2.76828 7.21206C3.07239 7.52712 3.24324 7.95444 3.24324 8.4C3.24324 8.84556 3.07239 9.27288 2.76828 9.58794C2.46417 9.903 2.0517 10.08 1.62162 10.08C1.19154 10.08 0.779075 9.903 0.474962 9.58794C0.170849 9.27288 0 8.84556 0 8.4C0 7.95444 0.170849 7.52712 0.474962 7.21206C0.779075 6.897 1.19154 6.72 1.62162 6.72ZM4.86486 16.24V14H20V16.24H4.86486ZM1.62162 13.44C2.0517 13.44 2.46417 13.617 2.76828 13.9321C3.07239 14.2471 3.24324 14.6744 3.24324 15.12C3.24324 15.5656 3.07239 15.9929 2.76828 16.3079C2.46417 16.623 2.0517 16.8 1.62162 16.8C1.19154 16.8 0.779075 16.623 0.474962 16.3079C0.170849 15.9929 0 15.5656 0 15.12C0 14.6744 0.170849 14.2471 0.474962 13.9321C0.779075 13.617 1.19154 13.44 1.62162 13.44Z"
                fill={viewMode === "table" ? "white" : "black"}
              />
            </svg>
          </div>
        </div>
      </div>
      {viewMode === "grid" ? <GridView activities={activities} /> : <TableView activities={activities} />}
    </div>
  )
}
