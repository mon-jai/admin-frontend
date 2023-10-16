export default function TableView({ activities }) {
  return (
    <div style={{}}>
      <div style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "Montserrat", fontSize: "18px", fontWeight: 500, lineHeight: "24px" }}>
          共 {activities.length} 筆資料
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "unset" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={8} height={12} viewBox="0 0 8 12" fill="none">
              <path d="M7.41 10.58L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.58Z" fill="#505050" />
            </svg>
          </div>
          <div style={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "500" }}>1</div>
          <div style={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "500", color: "#B3B3B3" }}>/</div>
          <div style={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: "500", color: "#B3B3B3" }}>1</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={8} height={12} viewBox="0 0 8 12" fill="none">
              <path d="M0.59 10.58L5.17 6L0.59 1.41L2 0L8 6L2 12L0.59 10.58Z" fill="#505050" />
            </svg>
          </div>
        </div>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr style={{ height: "64px", borderTop: "2px solid #DADADA", borderBottom: "2px solid #DADADA" }}>
            <td style={{ textAlign: "center" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12" fill="none">
                <path d="M10 5L5 4.37114e-07L0 5L10 5Z" fill="#757575" />
                <path d="M10 7L5 12L-4.37114e-07 7L10 7Z" fill="#757575" />
              </svg>
            </td>
            <td style={{ fontFamily: "Montserrat", fontSize: "18px", fontWeight: 700, lineHeight: "24px" }}>
              活動狀態
            </td>
            <td style={{ fontFamily: "Montserrat", fontSize: "18px", fontWeight: 700, lineHeight: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                回答數
                <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12" fill="none">
                  <path d="M10 5L5 4.37114e-07L0 5L10 5Z" fill="#757575" />
                  <path d="M10 7L5 12L-4.37114e-07 7L10 7Z" fill="#757575" />
                </svg>
              </div>
            </td>
            <td style={{ fontFamily: "Montserrat", fontSize: "18px", fontWeight: 700, lineHeight: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                最近修改
                <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12" fill="none">
                  <path d="M10 5L5 4.37114e-07L0 5L10 5Z" fill="#757575" />
                  <path d="M10 7L5 12L-4.37114e-07 7L10 7Z" fill="#757575" />
                </svg>
              </div>
            </td>
            <td style={{ fontFamily: "Montserrat", fontSize: "18px", fontWeight: 700, lineHeight: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                建立日期
                <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12" fill="none">
                  <path d="M10 5L5 4.37114e-07L0 5L10 5Z" fill="#757575" />
                  <path d="M10 7L5 12L-4.37114e-07 7L10 7Z" fill="#757575" />
                </svg>
              </div>
            </td>
            <td />
          </tr>
          {activities.map(({ name, status, responsesCount, lastModified, created }) => (
            <tr style={{ height: "64px", borderTop: "2px solid #DADADA", borderBottom: "2px solid #DADADA" }}>
              <td
                style={{
                  color: "#505050",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {name}
              </td>
              <td style={{ color: "#505050", fontFamily: "Montserrat", fontSize: "16px" }}>
                {status === "open" ? "公開" : "私人"}
              </td>
              <td style={{ color: "#505050", fontFamily: "Montserrat", fontSize: "16px" }}>{responsesCount}</td>
              <td style={{ color: "#505050", fontFamily: "Montserrat", fontSize: "16px" }}>
                {lastModified.toISOString().split("T")[0]}
              </td>
              <td style={{ color: "#505050", fontFamily: "Montserrat", fontSize: "16px" }}>
                {created.toISOString().split("T")[0]}
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={20} viewBox="0 0 15 20" fill="none">
                  <path
                    d="M7.72732 0L4.09095 3.63636H6.81823V11.8182H8.63641V3.63636H11.3637M13.1819 20H2.27277C1.26368 20 0.45459 19.1818 0.45459 18.1818V7.27273C0.45459 6.79052 0.646148 6.32805 0.987123 5.98708C1.3281 5.6461 1.79056 5.45455 2.27277 5.45455H5.00004V7.27273H2.27277V18.1818H13.1819V7.27273H10.4546V5.45455H13.1819C13.6641 5.45455 14.1265 5.6461 14.4675 5.98708C14.8085 6.32805 15 6.79052 15 7.27273V18.1818C15 18.664 14.8085 19.1265 14.4675 19.4675C14.1265 19.8084 13.6641 20 13.1819 20Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
