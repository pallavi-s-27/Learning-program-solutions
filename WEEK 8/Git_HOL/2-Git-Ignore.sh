# Create files and folder to ignore
touch sample.log
mkdir logs
touch logs/temp.txt

# Setup .gitignore
echo "*.log" > .gitignore
echo "logs/" >> .gitignore

# Check git status
git status