import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

const Components = {
	TextareaEdit: componentLoader.add('TextareaEdit', './components/TextareaEdit'),
  UserPostPage: componentLoader.add('UserPostPage', './components/UserPostPage'),
  FullNameComponent: componentLoader.add('FullNameComponent', './components/FullNameComponent'),
};

export { componentLoader, Components };