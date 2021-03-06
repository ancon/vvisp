const { deployService } = require('../scripts');

const name = 'deploy-service';
const signature = `${name}`;
const description =
  'deploy or upgrade smart contracts using the deployment configure file';

const register = commander =>
  commander
    .command(signature, { noHelp: true })
    .usage('[options]')
    .description(description)
    .action(deployService);

module.exports = { name, signature, description, register, deployService };
