import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-flashcards-feedback extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-flashcards-feedback:plugin',
  description: 'A JupyterLab extension that enables users to send feedback related to their use of flashcards, allowing teachers to receive direct insights about their educational tool.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-flashcards-feedback is activated!');
  }
};

export default plugin;
