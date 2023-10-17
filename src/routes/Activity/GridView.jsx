import styled from "styled-components"

const Div0 = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`

const Div1 = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 70px;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background: #2f2f2f;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
`

const Div2 = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`

const Div3 = styled.div`
  width: 220px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 90px;
  border-radius: 12px;
  border: 1px solid #979797;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
`

const Div4 = styled.div`
  display: flex;
  gap: 30px;
`

const Div5 = styled.div`
  width: 5px;
  background: #ce6d5f;
`

const Div6 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
`

const Div7 = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`

const Div8 = styled.div`
  display: flex;
  align-items: center;
`
export default function GridView({ activities }) {
  return (
    <Div0>
      <Div1>
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={49} viewBox="0 0 50 49" fill="none">
          <path
            d="M25 44.1C14.1955 44.1 5.4 35.3045 5.4 24.5C5.4 13.6955 14.1955 4.9 25 4.9C35.8045 4.9 44.6 13.6955 44.6 24.5C44.6 35.3045 35.8045 44.1 25 44.1ZM25 0C21.7826 0 18.5967 0.633711 15.6243 1.86495C12.6518 3.09619 9.95092 4.90085 7.67588 7.17588C3.08124 11.7705 0.5 18.0022 0.5 24.5C0.5 30.9978 3.08124 37.2295 7.67588 41.8241C9.95092 44.0992 12.6518 45.9038 15.6243 47.1351C18.5967 48.3663 21.7826 49 25 49C31.4978 49 37.7295 46.4188 42.3241 41.8241C46.9188 37.2295 49.5 30.9978 49.5 24.5C49.5 21.2826 48.8663 18.0967 47.6351 15.1243C46.4038 12.1518 44.5992 9.45092 42.3241 7.17588C40.0491 4.90085 37.3482 3.09619 34.3757 1.86495C31.4033 0.633711 28.2174 0 25 0ZM27.45 12.25H22.55V22.05H12.75V26.95H22.55V36.75H27.45V26.95H37.25V22.05H27.45V12.25Z"
            fill="white"
          />
        </svg>
        <Div2>建立新活動</Div2>
      </Div1>
      {activities.map(({ name, responsesCount }) => (
        <Div3>
          <Div4>
            <Div5 />
            <div>{name}</div>
          </Div4>
          <Div6>
            <Div7>{responsesCount} 報名</Div7>
            <Div8>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={4} viewBox="0 0 16 4" fill="none">
                <path
                  d="M12 2C12 1.46957 12.2107 0.96086 12.5858 0.585787C12.9609 0.210714 13.4696 0 14 0C14.5304 0 15.0391 0.210714 15.4142 0.585787C15.7893 0.96086 16 1.46957 16 2C16 2.53043 15.7893 3.03914 15.4142 3.41421C15.0391 3.78929 14.5304 4 14 4C13.4696 4 12.9609 3.78929 12.5858 3.41421C12.2107 3.03914 12 2.53043 12 2ZM6 2C6 1.46957 6.21071 0.96086 6.58579 0.585787C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2ZM0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2Z"
                  fill="#B3B3B3"
                />
              </svg>
            </Div8>
          </Div6>
        </Div3>
      ))}
    </Div0>
  )
}
