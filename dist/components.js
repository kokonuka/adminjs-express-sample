import { ComponentLoader } from 'adminjs';
const componentLoader = new ComponentLoader();
const Components = {
    TextareaEdit: componentLoader.add('TextareaEdit', './components/TextareaEdit.js'),
    UserPostPage: componentLoader.add('UserPostPage', './components/UserPostPage.js'),
    FullNameComponent: componentLoader.add('FullNameComponent', './components/FullNameComponent.js'),
};
export { componentLoader, Components };
