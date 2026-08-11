import { describe, expect, test } from "bun:test"
import snapshot from "../src/snapshot.js"

describe("provider base_model mappings", () => {
  test("exposes canonical IDs on provider entries", () => {
    expect(snapshot.providers.openrouter?.models["anthropic/claude-sonnet-4.6"]?.base_model).toBe(
      "anthropic/claude-sonnet-4-6",
    )
    expect(snapshot.providers.openrouter?.models["z-ai/glm-5.2"]?.base_model).toBe("zhipuai/glm-5.2")
  })

  test("keeps standalone provider entries unmapped", () => {
    expect(snapshot.providers.anthropic?.models["claude-3-haiku-20240307"]?.base_model).toBeUndefined()
  })
})
