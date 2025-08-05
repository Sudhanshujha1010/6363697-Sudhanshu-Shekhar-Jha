# Git Branching and Merging Lab

## Objectives

This hands-on lab is designed to help you understand and practice the following Git concepts:

- Branching and Merging
- Creating a Branch in Git and GitLab
- Creating a Merge Request in GitLab
- Using P4Merge to visualize differences

---

## Prerequisites

Before starting this lab, ensure you have:

- Git installed on your system
- [P4Merge](https://www.perforce.com/products/helix-core-apps/merge-diff-tool-p4merge) installed and configured as your default Git diff/merge tool
- Git environment properly set up (use Git Bash on Windows)
- A **GitHub** or **GitLab** account (do not use Cognizant credentials)

> Use a **personal GitHub or GitLab account**, not corporate credentials.

---

## Instructions

### Branching

1. **Create a new branch**
   ```bash
    git branch GitNewBranch
   ```
2. **List all local and remote branches**
    ```bash
    git branch -a
    ```
3. **Switch to the new branch**
    ```bash
    git checkout GitNewBranch
    ```
4. **Add a file with some content**
    ```bash
    echo "This is a test file in GitNewBranch." > sample.txt
    git add sample.txt
    ```
5. **Commit the changes**
    ```bash
    git commit -m "Added sample.txt to GitNewBranch"
    ```
6. **Check current status**
    ```bash
    git status
    ```

---

## Merging

1. **Switch back to the main branch**
    ```bash
    git checkout main  # or 'master'
    ```
2. **List command-line differences between master and GitNewBranch**
    ```bash
    git diff main..GitNewBranch
    ```
3. **List visual differences using P4Merge**
    ```bash
    git difftool main..GitNewBranch
    ```
4. **Merge the feature branch into master**
    ```bash
    git merge GitNewBranch
    ```
5. **View commit history graph**
    ```bash
    git log --oneline --graph --decorate
    ```
6. **Delete the merged branch**
    ```bash
    git branch -d GitNewBranch
    git status
    ```

---

## Creating a Branch and Merge Request in GitLab

1. **Push the local branch to GitLab**
    ```bash
    git push origin GitNewBranch
    ```
2. **Create a Merge Request (MR)**
    - Go to your GitLab repository in the browser.

    - Click **Merge Requests** > **New Merge Request**.

    - Choose `GitNewBranch` as the source and `master` or `main` as the target.

    - Add a title, description, and reviewers (if needed).

    - Click **Create Merge Request**.

---

## Useful Git Commands Reference
| Step                  | Command                                      |
| --------------------- | -------------------------------------------- |
| Create branch         | `git branch GitNewBranch`                    |
| List branches         | `git branch -a`                              |
| Switch to branch      | `git checkout GitNewBranch`                  |
| Add file              | `echo "text" > file.txt && git add file.txt` |
| Commit changes        | `git commit -m "message"`                    |
| Check status          | `git status`                                 |
| Switch to master/main | `git checkout master`                        |
| Show CLI diff         | `git diff master..GitNewBranch`              |
| Show P4Merge diff     | `git difftool master..GitNewBranch`          |
| Merge branch          | `git merge GitNewBranch`                     |
| Show log graph        | `git log --oneline --graph --decorate`       |
| Delete branch         | `git branch -d GitNewBranch`                 |

---
