# Create and switch to branch
git checkout -b GitNewBranch

# Add file and commit
echo "Branch-specific content" > branch.txt
git add branch.txt
git commit -m "Added branch.txt in GitNewBranch"

# Switch to master and merge
git checkout master
git diff master GitNewBranch
git merge GitNewBranch

# View log and delete branch
git log --oneline --graph --decorate
git branch -d GitNewBranch