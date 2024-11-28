# MonoRepo - Ambel

This is a project where we have used mono-repo architecture which is an architecture of Micro-Frontend.There are two applications there.

### Folder Structure
- mono-repo
  - ambel-repo
    - host
    - remote

Here from remote, we are exposing components using ```Module Federation``` and the host application consuming those components without directly accessing the codebase.

### Shared Components
- Header
- Features
- Footer
