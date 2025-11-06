import { TutorialLayout } from "@/components/tutorial-layout"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { notFound } from "next/navigation"

// Sample tutorial content - you can easily add more tutorials here
const tutorialContent: Record<string, string> = {
  welcome: `# Welcome to Our Tutorial Site

Learn everything you need to know with our comprehensive tutorials.

## Getting Started

This tutorial site is designed to help you learn at your own pace. Navigate through the topics using the sidebar on the left.`,

  basics: `# The Basics

Let's start with the fundamental concepts you need to know.

## Introduction

Understanding the basics is crucial for building a strong foundation.

### Key Concepts

1. **Concept One**: This is the first important concept
2. **Concept Two**: Building on the first concept
3. **Concept Three**: Advanced understanding

## Code Example

\`\`\`javascript
// Here's a simple example
const example = {
  name: 'Tutorial',
  type: 'Educational',
  level: 'Beginner'
};

console.log(example);
\`\`\`

## Practice Exercise

Try implementing what you've learned:

- Create your own example
- Experiment with different values
- Test your understanding

> **Remember**: Practice makes perfect!`,

  advanced: `# Advanced Topics

Ready to take your skills to the next level?

## Deep Dive

Now that you understand the basics, let's explore more complex concepts.

### Advanced Techniques

- **Optimization**: Making your code more efficient
- **Patterns**: Common design patterns
- **Architecture**: Structuring large projects

## Complex Example

\`\`\`typescript
interface Config {
  name: string;
  options: Record<string, any>;
}

class AdvancedSystem {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  execute(): void {
    console.log('Executing with config:', this.config);
  }
}
\`\`\`

## Real-World Application

These concepts are used in production systems every day.`,

  "best-practices": `# Best Practices

Learn the industry standards and recommended approaches.

## Code Quality

Writing clean, maintainable code is essential.

### Guidelines

1. **Readability**: Write code that others can understand
2. **Consistency**: Follow established patterns
3. **Documentation**: Comment your code appropriately
4. **Testing**: Always test your implementations

## Example of Good Code

\`\`\`javascript
/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}
\`\`\`

## Common Pitfalls

Avoid these common mistakes:

- Not handling edge cases
- Ignoring error handling
- Over-complicating solutions
- Skipping code reviews

> **Pro Tip**: Always review your code before committing!`,
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const content = tutorialContent[id]

  if (!content) {
    notFound()
  }

  return (
    <TutorialLayout>
      <MarkdownRenderer content={content} />
    </TutorialLayout>
  )
}
