import React from "react"
import { render } from "@testing-library/react"
import { Title } from "./Title"

describe("Tests for title component", () => {
    test("Displays the correct title", () => {
        const { getByTestId } = render(<Title />)
        // Assertion
        expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
        // --> Test will pass
    })
    test("Check snapshot", () => {
        const { getByTestId } = render(<Title />)
        // Assertion
        expect(getByTestId("hero-title")).toMatchInlineSnapshot(`
          <h1
            data-testid="hero-title"
          >
            Gatsby is awesome!
          </h1>
        `)
        // --> Test will pass
    })
})