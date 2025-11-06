import { TutorialLayout } from "@/components/tutorial-layout"
import { MarkdownRenderer } from "@/components/markdown-renderer"

const welcomeContent = `# Welcome to Our Tutorial Site

Learn everything you need to know with our comprehensive tutorials.

## Getting Started

This tutorial site is designed to help you learn at your own pace. Navigate through the topics using the sidebar on the left.

### Features

- **Easy Navigation**: Browse tutorials by category
- **Markdown Support**: All content is written in simple markdown
- **Code Examples**: Syntax-highlighted code blocks
- **Responsive Design**: Works on all devices

## Quick Start

1. Choose a tutorial from the sidebar
2. Follow along with the examples
3. Practice what you learn
4. Move on to the next topic

### Code Example

Here's a simple example:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));
\`\`\`

## What You'll Learn

- Fundamental concepts
- Best practices
- Real-world examples
- Advanced techniques

> **Tip**: Take your time with each tutorial and don't hesitate to revisit topics as needed.

Ready to begin? Select your first tutorial from the sidebar!
`

export default function HomePage() {
  return (
    <TutorialLayout>
      <MarkdownRenderer content={welcomeContent} />
    </TutorialLayout>
  )
}
