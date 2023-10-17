import styled from "styled-components"

const Div0 = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Div1 = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`

const Div2 = styled.div`
  display: flex;
  gap: 10px;
  align-items: unset;
`

const Div3 = styled.div`
  display: flex;
  align-items: center;
`

const Div4 = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
`

const Div5 = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  color: #b3b3b3;
`

const Table0 = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Tr0 = styled.tr`
  height: 64px;
  border-top: 2px solid #dadada;
  border-bottom: 2px solid #dadada;
`

const Td0 = styled.td`
  text-align: center;
`

const Td1 = styled.td`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`

const Div6 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const TableContentTd = styled.td`
  color: #505050;
  font-family: Montserrat;
`

const Td2 = styled(TableContentTd)`
  font-size: 18px;
  text-align: center;
  font-weight: 700;
`

const Td3 = styled(TableContentTd)`
  font-size: 16px;
`

export default function TableView({ activities }) {
  return (
    <div style={{}}>
      <Div0>
        <Div1>共 {activities.length} 筆資料</Div1>
        <Div2>
          <Div3>
            <svg xmlns="http://www.w3.org/2000/svg" width={8} height={12} viewBox="0 0 8 12" fill="none">
              <path d="M7.41 10.58L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.58Z" fill="#505050" />
            </svg>
          </Div3>
          <Div4>1</Div4>
          <Div5>/</Div5>
          <Div5>1</Div5>
          <Div3>
            <svg xmlns="http://www.w3.org/2000/svg" width={8} height={12} viewBox="0 0 8 12" fill="none">
              <path d="M0.59 10.58L5.17 6L0.59 1.41L2 0L8 6L2 12L0.59 10.58Z" fill="#505050" />
            </svg>
          </Div3>
        </Div2>
      </Div0>
      <Table0>
        <tbody>
          <Tr0>
            <Td0>
              <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12" fill="none">
                <path d="M10 5L5 4.37114e-07L0 5L10 5Z" fill="#757575" />
                <path d="M10 7L5 12L-4.37114e-07 7L10 7Z" fill="#757575" />
              </svg>
            </Td0>
            <Td1>活動狀態</Td1>
            <Td1>
              <Div6>
                回答數
                <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12" fill="none">
                  <path d="M10 5L5 4.37114e-07L0 5L10 5Z" fill="#757575" />
                  <path d="M10 7L5 12L-4.37114e-07 7L10 7Z" fill="#757575" />
                </svg>
              </Div6>
            </Td1>
            <Td1>
              <Div6>
                最近修改
                <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12" fill="none">
                  <path d="M10 5L5 4.37114e-07L0 5L10 5Z" fill="#757575" />
                  <path d="M10 7L5 12L-4.37114e-07 7L10 7Z" fill="#757575" />
                </svg>
              </Div6>
            </Td1>
            <Td1>
              <Div6>
                建立日期
                <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12" fill="none">
                  <path d="M10 5L5 4.37114e-07L0 5L10 5Z" fill="#757575" />
                  <path d="M10 7L5 12L-4.37114e-07 7L10 7Z" fill="#757575" />
                </svg>
              </Div6>
            </Td1>
            <td />
          </Tr0>
          {activities.map(({ name, status, responsesCount, lastModified, created }) => (
            <Tr0>
              <Td2>{name}</Td2>
              <Td3>{status === "open" ? "公開" : "私人"}</Td3>
              <Td3>{responsesCount}</Td3>
              <Td3>{lastModified.toISOString().split("T")[0]}</Td3>
              <Td3>{created.toISOString().split("T")[0]}</Td3>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={20} viewBox="0 0 15 20" fill="none">
                  <path
                    d="M7.72732 0L4.09095 3.63636H6.81823V11.8182H8.63641V3.63636H11.3637M13.1819 20H2.27277C1.26368 20 0.45459 19.1818 0.45459 18.1818V7.27273C0.45459 6.79052 0.646148 6.32805 0.987123 5.98708C1.3281 5.6461 1.79056 5.45455 2.27277 5.45455H5.00004V7.27273H2.27277V18.1818H13.1819V7.27273H10.4546V5.45455H13.1819C13.6641 5.45455 14.1265 5.6461 14.4675 5.98708C14.8085 6.32805 15 6.79052 15 7.27273V18.1818C15 18.664 14.8085 19.1265 14.4675 19.4675C14.1265 19.8084 13.6641 20 13.1819 20Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </td>
            </Tr0>
          ))}
        </tbody>
      </Table0>
    </div>
  )
}
