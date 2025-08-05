# Git Hands-on Lab: Using `.gitignore` to Ignore Unwanted Files

## Objectives

- Understand what `.gitignore` is and why it's useful
- Learn how to ignore unwanted files using a `.gitignore` file
- Practice ignoring `.log` files and folders using Git

---

## Prerequisites

Before starting, ensure:

- Git is installed and configured on your system
- Notepad++ is integrated as your default Git editor
- A local Git repository is initialized (`git init`)
- A remote GitLab repository exists and is connected

---

## Lab Steps

### Step 1: Initialize or Navigate to Your Git Project

If you already have a repository, skip to step 2.

```bash
mkdir GitDemo
cd GitDemo
git init
```

###  Step 2: Create Unwanted Files and Folders
```bash
echo "Some debug info" > debug.log
mkdir log
echo "Log started..." > log/log1.txt
```
Verify:
```bash
ls
# Output: debug.log  log/
```

### Step 3: Check Git Status Before Ignoring

```bash
git status
```
> You should see both `debug.log` and `log/` listed as untracked files.

### Step 4: Create/Edit .gitignore File
```bash
notepad++ .gitignore
```

Add the following lines:
```notepad++
*.log
log/
```
Save and close the file.

### Step 5: Recheck Git Status

```bash
git status
```
Output should now show only:
```yaml
Untracked files:
  .gitignore
```
> Git is ignoring `.log` files and `log/` folder.

### Step 6: Commit .gitignore
```bash
git add .gitignore
git commit -m "Add .gitignore to ignore .log files and log folder"
```

### Step 7 (Optional): Pull and Push with GitLab
#### 7.1 Add Remote Repository (if not already added)
```bash
git remote add origin https://gitlab.com/your-username/GitDemo.git
```
#### 7.2 Pull from Remote (optional if repository already exists remotely)
```bash
git pull origin master --allow-unrelated-histories
```
> This merges any existing content in the remote repository.
#### 7.3 Push Local Changes to GitLab
```bash
git push origin master
```
> Your `.gitignore` is now pushed to the remote repository.

---

## What is `.gitignore`?
The `.gitignore` file tells Git which files or folders to ignore in version control. This is useful for excluding:

- Logs (`*.log`)

- Cache/temp files

- System files (`.DS_Store`, `Thumbs.db`)

- Build artifacts

- Credentials or secrets

---

## Useful Git Commands Reference
| Command                                              | Description                                                       |
| ---------------------------------------------------- | ----------------------------------------------------------------- |
| `git init`                                           | Initialize a new Git repository                                   |
| `echo "..." > debug.log`                             | Create a `.log` file with sample content                          |
| `mkdir log`                                          | Create a folder named `log`                                       |
| `echo "..." > log/log1.txt`                          | Create a sample log file inside the `log` directory               |
| `git status`                                         | View current status of files (tracked/untracked)                  |
| `notepad++ .gitignore`                               | Open `.gitignore` file in Notepad++ editor                        |
| `*.log` in `.gitignore`                              | Ignore all `.log` files                                           |
| `log/` in `.gitignore`                               | Ignore the entire `log` directory                                 |
| `git add .gitignore`                                 | Stage the `.gitignore` file for commit                            |
| `git commit -m "Add .gitignore..."`                  | Commit the `.gitignore` changes                                   |
| `git remote add origin <repo-url>`                   | Link local repo to remote GitLab repository                       |
| `git pull origin master --allow-unrelated-histories` | Pull remote repo (if already exists) allowing unrelated histories |
| `git push origin master`                             | Push local commits to the remote repository                       |