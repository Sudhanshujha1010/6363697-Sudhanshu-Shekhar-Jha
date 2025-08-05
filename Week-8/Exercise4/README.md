# Git Merge Conflict Resolution Lab

## Objectives

- Understand how Git merge conflicts occur  
- Practice resolving conflicts when multiple users update the same file  
- Use 3-way merge tools like **P4Merge** to visualize and resolve conflicts  

---

## Prerequisites

- Git installed (with Git Bash for Windows users)
- P4Merge installed and configured as the default merge tool

---

## Initial Setup (Only Once)

To configure P4Merge as your merge/diff tool:

```bash
git config --global merge.tool p4merge
git config --global mergetool.p4merge.cmd "\"C:/Program Files/Perforce/p4merge.exe\" \"\$BASE\" \"\$LOCAL\" \"\$REMOTE\" \"\$MERGED\""

git config --global diff.tool p4merge
git config --global difftool.p4merge.cmd "\"C:/Program Files/Perforce/p4merge.exe\" \"\$LOCAL\" \"\$REMOTE\""
```
> Adjust the path if P4Merge is installed in a different location.

---

## Step-by-Step Instructions

1. **Ensure `main` is clean**
    ```bash
    git checkout main
    git status
    ```
2. **Create a branch `GitWork` and switch to it**
    ```bash
    git checkout -b GitWork
    ```
3. **Create and update `hello.xml` in GitWork**
    ```bash
    echo "<message>Hello from GitWork</message>" > hello.xml
    git status
    ```
4. **Commit the changes**
    ```bash
    git add hello.xml
    git commit -m "Add hello.xml with GitWork content"
    ```
5. **Switch to `main` branch**
    ```bash
    git checkout main
    ```
6. **Add a different version of `hello.xml` in main**
    ```bash
    echo "<message>Hello from Master branch</message>" > hello.xml
    ```
7. **Commit to main**
    ```bash
    git add hello.xml
    git commit -m "Add hello.xml with Master content"
    ```
8. **View the commit graph**
    ```bash
    git log --oneline --graph --decorate --all
    ```
9. **View text-based diff**
    ```bash
    git diff main..GitWork
    ```
10. **Use P4Merge for visual diff**
    ```bash
    git difftool main..GitWork -- hello.xml
    ```
11. **Attempt to merge GitWork into master**
    ```bash
    git merge GitWork
    ```
    > You should see a conflict reported on `hello.xml`.
12. **Resolve conflict using P4Merge (3-way merge)**
    ```bash
    git mergetool
    ```
    > Choose the correct version or combine both as needed.
13. **Commit the resolved version**
    ```bash
    git add hello.xml
    git commit -m "Resolved merge conflict in hello.xml"
    ```
14. **Add backup (`*.orig`) to `.gitignore`**
    ```bash
    echo "*.orig" >> .gitignore
    git add .gitignore
    ```
15. **Commit `.gitignore`**
    ```bash
    git commit -m "Ignore backup merge files"
    ```
16. **List all branches**
    ```bash
    git branch
    ```
17. **Delete the merged branch**
    ```bash
    git branch -d GitWork
    ```
18. **Final commit graph**
    ```bash
    git log --oneline --graph --decorate
    ```

---

## Git Commands Reference

| Step Description                                             | Command                                                        |
| ------------------------------------------------------------ | -------------------------------------------------------------- |
| Check if working directory is clean                       | `git status`                                                   |
| Create and switch to a new branch `GitWork`               | `git checkout -b GitWork`                                      |
| Add a new file `hello.xml` with some content in `GitWork` | `echo "<message>Branch version</message>" > hello.xml`         |
| Stage the new file for commit                             | `git add hello.xml`                                            |
| Commit the file in `GitWork` branch                       | `git commit -m "Add hello.xml in GitWork"`                     |
| Switch back to the `master` branch                        | `git checkout master`                                          |
| Add a different version of `hello.xml` in `master`        | `echo "<message>Master version</message>" > hello.xml`         |
| Stage and commit the file in `master`                     | `git add hello.xml && git commit -m "Add hello.xml in master"` |
| View all commit history with graph                        | `git log --oneline --graph --decorate --all`                   |
| Check differences between `master` and `GitWork`         | `git diff master..GitWork`                                     |
| Open P4Merge to visualize differences                    | `git difftool master..GitWork`                                 |
| Merge `GitWork` into `master` (will cause conflict)      | `git merge GitWork`                                            |
| Open 3-way merge tool to resolve conflict                | `git mergetool`                                                |
| Stage the resolved file                                  | `git add hello.xml`                                            |
| Commit the merge resolution                              | `git commit -m "Resolved merge conflict in hello.xml"`         |
| Ignore backup files from merge tool                      | `echo "*.orig" >> .gitignore`                                  |
| Commit the updated `.gitignore`                          | `git add .gitignore && git commit -m "Ignore backup files"`    |
| List all local branches                                  | `git branch`                                                   |
| Delete the merged branch `GitWork`                       | `git branch -d GitWork`                                        |
| View the final commit graph                              | `git log --oneline --graph --decorate`                         |
