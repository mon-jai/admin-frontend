import Layout from "./components/Layout"
import Activity from "./routes/Activity"
import { Link, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    /* Routes nest inside one another. Nested route paths build upon
       parent route paths, and nested route elements render inside
       parent route elements. See the note about <Outlet> below. */
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="activity" element={<Activity />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
