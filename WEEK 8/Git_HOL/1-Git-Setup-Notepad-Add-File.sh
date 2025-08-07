# Check Git version
git --version

# Set Git user configuration
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Check configuration
git config --list

# Set Notepad++ as editor (adjust path if needed)
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession"

# Create Git repository
mkdir GitDemo
cd GitDemo
git init

# Create a file and commit
echo "Welcome to Git Demo" > welcome.txt
git status
git add welcome.txt
git commit -m "Initial commit with welcome.txt"

# Link remote and push
git remote add origin <remote_url>
git pull origin master
git push origin master