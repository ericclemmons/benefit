import React from "react"
import { Docs, Link } from "docz"
import { Box } from "../../dist/benefit.js"

export default function Menu() {
  return (
    <Docs>
      {({ docs }) => (
        <Box className="bg-blue-100">Benefit</Box>
        // <ul>
        //   {docs.map((doc) => (
        //     <li key={doc.id}>
        //       <Link to={doc.route}>{doc.name}</Link>
        //     </li>
        //   ))}
        // </ul>
      )}
    </Docs>
  )
}
