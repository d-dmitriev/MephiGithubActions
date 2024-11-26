import React from "react"
import { render } from "@testing-library/react"
import { Title } from "./Title"

describe("Title", () => {
    test("Displays the correct title1", () => {
        const { getByTestId } = render(<Title />)
        // Assertion
        expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
        // --> Test will pass
    })
    test("Displays the correct title2", () => {
        const { getByTestId } = render(<Title />)
        // Assertion
        expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
        // --> Test will pass
    })
})