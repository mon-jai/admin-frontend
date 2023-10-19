import { useState } from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const SideBar = styled.div`
  flex-direction: column;
  width: 320px;
  padding: 20px;
  background: #fbfbfb;
`

const SearchBarContainer = styled.div`
  padding: 6px 10px;
  border: 1px solid #979797;
  margin-bottom: 32px;
  border-radius: 6px;
  background: #fff;
  display: flex;
  gap: 10px;
`

const SearchBar = styled.input`
  border: 0;
  color: #b3b3b3;
  flex-grow: 1;
`

const NavigationMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SectionContent = styled.div`
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`

const SectionItemBase = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
`

const SectionHeader = styled(SectionItemBase)`
  display: flex;
  align-items: center;
`

const SectionHeaderExtended = styled(SectionHeader)`
  color: #fff;
  background-color: #505050cc;
  font-weight: 700;
`

const ExpandIconContainer = styled.div`
  margin-left: auto;
  height: fit-content;
  line-height: 0;
`

const SectionItem = styled(SectionItemBase)`
  color: #505050;
  line-height: 20px;
`

const SectionItemSelected = styled(SectionItem)`
  background: rgba(239, 239, 239, 0.8);
`

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const SidebarButtonContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  height: 64px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`

const SidebarButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [extendedItems, setExtendedItems] = useState(/** @type {("activity" | "nfc" | "lucky-draw")[]} */ ([]))

  return (
    <Root>
      <SideBar
        style={{
          display: drawerOpen ? "flex" : "none",
        }}
      >
        <SearchBarContainer>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              id="Vector"
              d="M6.5 0.25C8.22391 0.25 9.87721 0.934819 11.0962 2.15381C12.3152 3.37279 13 5.02609 13 6.75C13 8.36 12.41 9.84 11.44 10.98L11.71 11.25H12.5L17.5 16.25L16 17.75L11 12.75V11.96L10.73 11.69C9.59 12.66 8.11 13.25 6.5 13.25C4.77609 13.25 3.12279 12.5652 1.90381 11.3462C0.684819 10.1272 0 8.47391 0 6.75C0 5.02609 0.684819 3.37279 1.90381 2.15381C3.12279 0.934819 4.77609 0.25 6.5 0.25ZM6.5 2.25C4 2.25 2 4.25 2 6.75C2 9.25 4 11.25 6.5 11.25C9 11.25 11 9.25 11 6.75C11 4.25 9 2.25 6.5 2.25Z"
              fill="#B3B3B3"
            ></path>
          </svg>
          <SearchBar type="text" placeholder="搜尋活動名稱" />
        </SearchBarContainer>

        <NavigationMenu>
          <div>
            <SectionHeaderExtended
              onClick={() =>
                setExtendedItems(extendedItems =>
                  extendedItems.includes("activity")
                    ? extendedItems.filter(item => item !== "activity")
                    : ["activity", ...extendedItems],
                )
              }
            >
              活動管理
              <ExpandIconContainer
                style={{
                  transform: extendedItems.includes("activity") ? "" : "rotate(180deg)",
                }}
              >
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector" d="M0 5.5L5 0.5L10 5.5H0Z" fill="white" />
                </svg>
              </ExpandIconContainer>
            </SectionHeaderExtended>
            <SectionContent
              style={{
                display: extendedItems.includes("activity") ? "flex" : "none",
              }}
            >
              <SectionItemSelected>活動總覽</SectionItemSelected>
              <SectionItem>建立新活動</SectionItem>
              <SectionItem>建立活動群組</SectionItem>
              <SectionItem>活動群組 1</SectionItem>
              <SectionItem>活動群組 2</SectionItem>
              <SectionItem>活動群組 3</SectionItem>
            </SectionContent>
          </div>
          <SectionHeader
            onClick={() =>
              setExtendedItems(extendedItems =>
                extendedItems.includes("nfc")
                  ? extendedItems.filter(item => item !== "nfc")
                  : ["nfc", ...extendedItems],
              )
            }
          >
            NFT管理
            <ExpandIconContainer
              style={{
                transform: extendedItems.includes("nfc") ? "" : "rotate(180deg)",
              }}
            >
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M0 5.5L5 0.5L10 5.5H0Z" fill="black" />
              </svg>
            </ExpandIconContainer>
          </SectionHeader>
          <SectionHeader
            onClick={() =>
              setExtendedItems(extendedItems =>
                extendedItems.includes("lucky-draw")
                  ? extendedItems.filter(item => item !== "lucky-draw")
                  : ["lucky-draw", ...extendedItems],
              )
            }
          >
            抽獎管理
            <ExpandIconContainer
              style={{
                transform: extendedItems.includes("lucky-draw") ? "" : "rotate(180deg)",
              }}
            >
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M0 5.5L5 0.5L10 5.5H0Z" fill="black" />
              </svg>
            </ExpandIconContainer>
          </SectionHeader>
        </NavigationMenu>
      </SideBar>
      <ContentContainer>
        <SidebarButtonContainer>
          <SidebarButton
            style={{
              transform: drawerOpen ? "" : "rotate(-180deg)",
            }}
            onClick={() => setDrawerOpen(drawerOpen => !drawerOpen)}
          >
            <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                id="Vector"
                d="M13.888 25.088L2.8 14L13.888 2.912L15.862 4.9L8.162 12.6H28V15.4H8.162L15.876 23.1L13.888 25.088ZM2.8 14V0H0V28H2.8V14Z"
                fill="#505050"
              />
            </svg>
          </SidebarButton>
          <svg width={104} height={44} viewBox="0 0 104 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M69.0747 3.13022V3.95895H69.0016V12.7244H74.9087V8.07532H93.4189V12.7244H99.326V8.07532V3.95895V3.13022H69.0747Z"
              fill="black"
            />
            <path d="M64.0917 0H48.2793V2.52719H64.0917V0Z" fill="black" />
            <path d="M96.1648 0H77.0457V2.52719H96.1648V0Z" fill="black" />
            <path d="M36.4992 1.58476H20.4044V6.32951H36.4992V1.58476Z" fill="black" />
            <path
              d="M34.1033 13.8971H32.2625V12.8589H36.4944V7.10785H20.4044V12.8589H24.3344V14.102H20.5944V21.8157H16.3381V18.0818H19.596V12.3307H16.3381V10.9465H19.596V5.19538H5.03033V10.9465H9.43754V12.3307H5.03033V18.0818H9.43754V21.7428H1.94771V26.9429H14.994V24.0104H16.3381V27.0158H24.6558V24.6206H27.0615V16.2968H28.1962V21.6107V26.993V27.0021H38.4472V21.6107H34.1033V13.8971Z"
              fill="black"
            />
            <path
              d="M37.6096 14.2708H42.7863V8.07353H64.0919V12.7227H67.8806V8.07353V3.12843H37.6047V8.07353H37.6096V14.2708Z"
              fill="black"
            />
            <path
              d="M98.0542 13.492H87.4672V12.7224H92.5464V8.84286H75.6773V12.7224H79.6413V13.492H66.9602V17.3943H66.9992V21.6109H64.501V27.0751H95.1177V25.0488H98.0883V13.7106H98.0494V13.492H98.0542ZM90.2673 17.3943V18.3324H87.4623V17.3943H90.2673ZM74.8202 22.2347H79.6365V23.1727H74.8202V22.2347ZM87.4623 22.2347H90.2673V23.1727H87.4623V22.2347ZM79.6413 17.3943V18.3324H74.825V17.3943H79.6413Z"
              fill="black"
            />
            <path
              d="M58.7838 20.6729H66.1373V15.2041H58.7838V13.3554H63.2592V8.84286H43.7457V13.3554H50.9628V15.2041H36.7331V20.6729H50.9628V21.6109H39.582V27.0751H55.9642V24.4158H58.7838V20.6729Z"
              fill="black"
            />
            <path
              d="M0 42.5669V32.5342H9.69948V33.9674H11.3161V38.2671H9.69948V39.7004H3.23316V42.5669H0ZM3.23316 38.2671H8.0829V33.9674H3.23316V38.2671Z"
              fill="#C4C4C4"
            />
            <path
              d="M10.9568 42.5669V41.1336H14.19V33.9674H12.5734V32.5342H17.4231V41.1336H20.6563V42.5669H10.9568Z"
              fill="#C4C4C4"
            />
            <path
              d="M23.7098 42.5669V41.1336H22.0933V39.7004H23.7098V38.2671H30.1762V36.8339H23.7098V35.4007H31.7927V36.8339H33.4093V42.5669H23.7098ZM25.3264 41.1336H30.1762V39.7004H25.3264V41.1336Z"
              fill="#C4C4C4"
            />
            <path
              d="M36.2832 44.0001V42.5669H42.7496V41.1336H36.2832V39.7004H34.6667V35.4007H37.8998V39.7004H42.7496V35.4007H45.9827V42.5669H44.3661V44.0001H36.2832Z"
              fill="#C4C4C4"
            />
            <path d="M46.5575 44.0001V42.5669H57.8736V44.0001H46.5575Z" fill="#C4C4C4" />
            <path
              d="M58.3765 42.5669V32.5342H61.6097V33.9674H63.2262V35.4007H64.8428V33.9674H66.4594V32.5342H69.6926V42.5669H66.4594V36.8339H64.8428V39.7004H63.2262V36.8339H61.6097V42.5669H58.3765Z"
              fill="#C4C4C4"
            />
            <path
              d="M72.3869 42.5669V41.1336H70.7703V36.8339H72.3869V35.4007H80.4698V36.8339H82.0863V39.7004H74.0034V41.1336H80.4698V42.5669H72.3869ZM74.0034 38.2671H78.8532V36.8339H74.0034V38.2671Z"
              fill="#C4C4C4"
            />
            <path
              d="M86.505 42.5669V36.8339H83.2718V35.4007H86.505V32.5342H89.7382V35.4007H92.9713V36.8339H89.7382V42.5669H86.505Z"
              fill="#C4C4C4"
            />
            <path
              d="M94.3005 42.5669V41.1336H92.6839V39.7004H94.3005V38.2671H100.767V36.8339H94.3005V35.4007H102.383V36.8339H104V42.5669H94.3005ZM95.9171 41.1336H100.767V39.7004H95.9171V41.1336Z"
              fill="#C4C4C4"
            />
          </svg>
        </SidebarButtonContainer>

        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet />
      </ContentContainer>
    </Root>
  )
}
