var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        silent: true,
        repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/josecelano/svelte-deploy-with-github-actions.git',
        user: {
            name: 'Jose Celano',
            email: 'josecelano@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)