# Claude Recipe

**Generate AI-powered recipes** from your own ingredient lists using the Hugging Face Mistral model.

---
 **Example UI**  

> ![AI Recipe Output](chefsrecipe.png)
---



## Table of Contents

1. [Project Description](#project-description)  
2. [Features](#features)  
3. [Tech Stack & Dependencies](#tech-stack--dependencies)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Configuration](#configuration)  
5. [Usage](#usage)  
6. [Contributing](#contributing)  
7. [License](#license)  

---

## Project Description

**Claude Recipe** is a React application that leverages the Hugging Face Mistral model to generate cooking recipes based on a dynamic list of ingredients. Users can add or remove items they have on hand, send the final list to the AI model, and receive tailored, step-by-step recipe instructions in real time.

---

## Features

- **Dynamic Ingredient Management**  
  Add, remove, or modify ingredients on the fly.

- **AI-Generated Recipes**  
  Queries the Mistral model via the Hugging Face Inference API.

- **Customizable Prompts**  
  Supports specifying dietary preferences or cuisine styles.

- **Responsive UI**  
  Mobile-friendly layout with real-time ingredient updates.

---

## Tech Stack & Dependencies

- **React** (v18+)  
- **Hugging Face Inference API**  
- **Axios** (for HTTP requests)  
- **Tailwind CSS** (optional: for quick styling)  
- **Node.js** (v16+), **npm** or **Yarn**  
- **ESLint** & **Prettier** (code linting & formatting)  

---

## Getting Started

### Prerequisites

- **Node.js** v16 or higher  
- **npm** v8+ or **Yarn** v1.22+  
- A Hugging Face account with an **API token**  
- (Optional) [Git](https://git-scm.com/) for version control  

### Installation

1. **Clone the repo**

```bash
git clone https://github.com/your-username/claude-recipe.git
cd claude-recipe
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

### Configuration

1. Rename `.env.example` to `.env` in the project root.  
2. Add your Hugging Face API key:

```env
REACT_APP_HF_API_KEY=your_huggingface_api_token
REACT_APP_MODEL_NAME=mistral-medium
```

3. (Optional) Customize any other environment variables as needed.

---

## Usage

1. **Start the development server**

```bash
npm start
# or
yarn start
```

2. Open your browser at `http://localhost:3000`.

3. Enter your ingredient list, add or remove items, then click **“Generate Recipe”**.

4. View the AI-generated recipe and cooking steps.




---

## Contributing

We welcome contributions! Please:

1. Fork the repo  
2. Create a feature branch:

```bash
git checkout -b feature/my-awesome-feature
```

3. Commit your changes with descriptive messages  
4. Open a Pull Request against **main**, describing your changes and why they’re needed  


---

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.
