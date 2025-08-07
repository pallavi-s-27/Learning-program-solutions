# Branch work
git checkout -b GitWork
echo "<message>Hello from branch</message>" > hello.xml
git add hello.xml
git commit -m "Added hello.xml in GitWork"

# Modify master
git checkout master
echo "<message>Hello from master</message>" > hello.xml
git add hello.xml
git commit -m "Added hello.xml in master"

# Merge with conflict
git merge GitWork

# Resolve manually, then
git add hello.xml
git commit -m "Resolved merge conflict in hello.xml"

# Ignore backup files
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Ignored merge conflict backup files"

# Cleanup
git branch -d GitWork