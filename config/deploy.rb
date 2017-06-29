require 'mina/rails'
require 'mina/git'
require 'mina/rbenv'  # for rbenv support. (https://rbenv.org)
# require 'mina/rvm'    # for rvm support. (https://rvm.io)

task :console => :environment
task :log => :environment
namespace :rails do
  task :db_migrate => :cd_current_path
end

# custom mina nodenv task
task :'nodenv:load' do
  comment %{Loading nodenv}
  command %{export NODENV_ROOT="#{fetch(:nodenv_path)}"}
  command %{export PATH="#{fetch(:nodenv_path)}/bin:$PATH"}
  command %{
    if ! which nodenv >/dev/null; then
      echo "! nodenv not found"
      echo "! If nodenv is installed, check your :nodenv_path setting."
      exit 1
    fi
  }
  command %{eval "$(nodenv init -)"}
end

# Basic settings:
#   domain       - The hostname to SSH to.
#   deploy_to    - Path to deploy into.
#   repository   - Git repo to clone from. (needed by mina/git)
#   branch       - Branch name to deploy. (needed by mina/git)
set :domain, 'todo.sparklingbiz.com'
set :deploy_to, '/var/www/todo.sparklingbiz.com'
set :repository, 'git@github.com:fernandes/todomvc-rails-react.git'
set :branch, 'master'

# Optional settings:
#   set :user, 'foobar'          # Username in the server to SSH to.
#   set :port, '30000'           # SSH port number.
#   set :forward_agent, true     # SSH forward_agent.
set :user, 'app'
set :forward_agent, true

# shared dirs and files will be symlinked into the app-folder by the 'deploy:link_shared_paths' step.
# set :shared_dirs, fetch(:shared_dirs, []).push('somedir')
# set :shared_files, fetch(:shared_files, []).push('config/database.yml', 'config/secrets.yml')
set :shared_dirs, fetch(:shared_dirs, []).push('node_modules')

# Load .env variables
task :env do
  File.open(File.join(Dir.pwd, '.env')).each_line do |line|
    line.chomp!
    var, value = line.split("=")
    command %[export #{var}="#{value}"]
  end
end

# rbenv and nodenv paths
set :rbenv_path, "/opt/rbenv"
set :nodenv_path, "/opt/nodenv"

# This task is the environment that is loaded for all remote run commands, such as
# `mina deploy` or `mina rake`.
task :environment do
  # If you're using rbenv, use this to load the rbenv environment.
  # Be sure to commit your .ruby-version or .rbenv-version to your repository.
  invoke :'rbenv:load'
  invoke :'nodenv:load'
  invoke :env

  # For those using RVM, use this to load an RVM version@gemset.
  # invoke :'rvm:use', 'ruby-1.9.3-p125@default'
end

task :cd_current_path do
  invoke :environment
  command "cd #{fetch(:deploy_to) + "/current"}"
end

# Put any custom commands you need to run at setup
# All paths in `shared_dirs` and `shared_paths` will be created on their own.
task :setup do
  # command %{rbenv install 2.3.0}
end

desc "Deploys the current version to the server."
task :deploy do
  # uncomment this line to make sure you pushed your local branch to the remote origin
  # invoke :'git:ensure_pushed'
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    invoke :'bundle:install'
    invoke :'rails:db_migrate'
    invoke :'rails:assets_precompile'
    invoke :'deploy:cleanup'

    on :launch do
      in_path(fetch(:current_path)) do
        command %{mkdir -p tmp/}
        command %{touch tmp/restart.txt}
      end
    end
  end

  # you can use `run :local` to run tasks on local machine before of after the deploy scripts
  # run :local { say 'done' }
end

# For help in making your deploy script, see the Mina documentation:
#
#  - https://github.com/mina-deploy/mina/tree/master/docs
