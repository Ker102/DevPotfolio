# Contributing to Kaelux DevPotfolio

First off, thanks for taking the time to contribute! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)

## 📜 Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code.

## 🤝 How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check existing issues. When creating a bug report, include:

- Clear and descriptive title
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, etc.)

### Suggesting Enhancements ✨

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide detailed description of the proposed feature
- Explain why this enhancement would be useful
- Include mockups or examples if possible

### Pull Requests 🔀

1. Fork the repo and create your branch from `main`
2. Make your changes
3. Test your changes thoroughly
4. Update documentation if needed
5. Ensure all tests pass
6. Create a pull request

## 🚀 Development Setup

### Prerequisites

- Node.js 18.17 or higher
- npm 9.0 or higher

### Installation

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/DevPotfolio.git
cd DevPotfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🔄 Pull Request Process

1. **Update Documentation**: Update the README.md with details of changes if needed
2. **Follow Style Guide**: Ensure your code follows the project's coding standards
3. **Test Thoroughly**: Test on multiple browsers and devices
4. **Commit Messages**: Use clear and meaningful commit messages
5. **Reference Issues**: Link related issues in your PR description

### Commit Message Format

```
type(scope): subject

body

footer
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Example:**

```
feat(projects): add video preview support

- Add VideoPreview component
- Update project interface
- Implement click-to-play functionality

Closes #123
```

## 🎨 Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for type safety
- Use functional components with hooks
- Follow ESLint rules
- Use meaningful variable names
- Comment complex logic

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use CSS variables for theme colors

### File Structure

```
components/
  ├── sections/     # Page sections
  ├── Component.tsx # Component file
  └── ...

data/               # Data files
hooks/              # Custom hooks
lib/                # Utilities
public/             # Static assets
```

## 🧪 Testing

- Test on Chrome, Firefox, Safari, and Edge
- Test on mobile devices (iOS and Android)
- Test dark and light modes
- Test all interactive features
- Ensure accessibility standards

## ✅ Before Submitting

- [ ] Code follows style guidelines
- [ ] Self-reviewed the code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings generated
- [ ] Tested on multiple browsers
- [ ] All checks pass

## 📝 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 💬 Questions?

Feel free to open a [Discussion](https://github.com/Ker102/DevPotfolio/discussions) if you have questions!

---

Thank you for contributing to Kaelux DevPotfolio! 🚀
