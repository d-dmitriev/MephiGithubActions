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

    test("Displays the correct title error", () => {
        const { getByTestId } = render(<Title />)
        // Assertion
        expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!!")
        // --> Test will pass
    })
})