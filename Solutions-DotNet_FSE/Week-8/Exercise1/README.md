# Git Hands-on Lab: Getting Started with Git & Notepad++ Integration

## Objectives

By completing this lab, you will:

- Understand basic Git commands: `git init`, `git status`, `git add`, `git commit`, `git push`, and `git pull`.
- Setup your local Git configuration.
- Integrate Notepad++ as the default Git editor.
- Add and track files in a Git repository.
- Work with both local and remote Git repositories (GitLab).

---

## Prerequisites

- Git Bash client installed on your machine.
- Notepad++ installed.
- GitLab account.

---

## 1. Git Configuration

### 1.1 Check Git Installation

Open Git Bash and run:

```bash
git --version
```
> This should display the Git version installed.

### 1.2 Configure Global User Information
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 1.3 Verify Configuration
```bash
git config --list
```

---

## Step 2: Integrate Notepad++ with Git

### 2.1 Check if Notepad++ is Accessible from Git Bash
```bash
notepad++
```
> If the command is not recognized, add **Notepad++** path to the **Environment Variables**:
- Control Panel -> System -> Advanced System Settings -> Environment Variables
- Edit the `Path` variable and add path like: `C:\Program Files\Notepad++\`
Restart Git Bash and try again.

### 2.2 Create Alias for Notepad++
```bash
alias np='notepad++'
```
> To persist alias, add it to your `~/.bashrc` or `~/.bash_profile`.

### 2.3 Set Notepad++ as Default Git Editor

```bash
git config --global core.editor "notepad++"
```

### 2.4 Verify Editor Setup

```bash
git config --global --edit
```
> This should open **Notepad++** as the default Git editor.

---

## Step 3: Add Files to Git Repository

### 3.1 Create a New Git Repository

```bash
mkdir GitDemo
cd GitDemo
git init
```

### 3.2 Verify Initialization

```bash
ls -a
```
> Should display `.git` folder.

### 3.3 Create and Edit File

```bash
echo "Welcome to Git hands-on lab!" > welcome.txt
```

### 3.4 Check File Creation

```bash
ls
cat welcome.txt
```

### 3.5 Check File Status

```bash
git status
```

### 3.6 Stage the File

```bash
git add welcome.txt
```

### 3.7 Commit with Multi-line Message

```bash
git commit
```
> **Notepad++** will open - write multi-line commit message and save.

### 3.8 Verify Status

```bash
git status
```

---

## Step 4: Connect to Remote Repository (GitLab)

### 4.1 Create a new project `GitDemo` on **GitLab**.

### 4.2 Link the remote repository:

```bash
git remote add origin https://gitlab.com/your-username/GitDemo.git
```
### 4.3 Pull from remote (optional if repo is empty):

```bash
git pull origin master
```

### Push local Changes:

```bash
git push origin master
```

---

## Useful Git Commands Reference

| Command          | Description                     |
| ---------------- | ------------------------------- |
| `git init`       | Initialize a new Git repository |
| `git status`     | Check current status of repo    |
| `git add <file>` | Stage file for commit           |
| `git commit`     | Commit staged changes           |
| `git config`     | Set Git configuration           |
| `git push`       | Push changes to remote          |
| `git pull`       | Pull changes from remote        |
