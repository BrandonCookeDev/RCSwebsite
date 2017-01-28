git config --global user.email "BrandonCookeDev@gmail.com"
git config --global user.name "Brandon Cooke"

echo 'stopping website service...'
systemctl stop RCSwebsite
echo 'stopped!'

echo "attempting code import..."
cd /apps/RCSwebsite
git reset --hard
git pull origin master
echo 'success!'

echo 'installing dependencies...'
./runNpmInstall.sh
echo 'installed!'

cd /apps

echo 'starting website service...'
systemctl start RCSwebsite
echo 'complete!'
