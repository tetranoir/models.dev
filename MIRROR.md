# Mirendil models.dev distribution

This repository tracks `anomalyco/models.dev` `dev` and publishes
`@arno-mirendil/models`. The SDK snapshot retains each authored provider
model's `base_model` field, exposing the canonical provider-agnostic model ID.

The scheduled workflow merges upstream daily, validates the full catalog,
runs SDK tests, publishes only when the generated snapshot changes, and then
pushes the synchronized source. The `NPM_API_KEY` GitHub Actions secret must
belong to an npm publisher for the package.
