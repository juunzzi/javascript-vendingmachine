import '../images/empty-img.png';
import '../src/styles/index.css';
import AppComponent from './components';
const appComponent = new AppComponent();

const vendingMachineComponent = new VendingMachineComponent();
window.addEventListener('popstate', e => {
  const { state } = e;
  vendingMachineComponent.showSection(state?.path ?? TAB_NAME.MANAGE);
});
