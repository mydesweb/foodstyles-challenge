import {create} from 'zustand';
import {produce} from 'immer';

const initialRoute = {
  parentId: null,
  name: 'Cuisines',
  imagePath: require('../assets/icons/browse-cuisines.png'),
};

const useCuisineStore = create((set, get) => ({
  data: [],
  isLoading: false,
  level: 1,
  routes: [initialRoute],
  error: null,
  navigate: (parentId: number, name: string, imagePath: string) => {
    set(
      produce(state => {
        state.routes.push({parentId, name, imagePath});
        state.level += 1;
      }),
    );
  },
  goBack: () => {
    set(
      produce(state => {
        if (state.level === 1) {
          return;
        }
        state.routes.pop();
        state.level -= 1;
      }),
    );
  },
  popToTop: () => {
    set(
      produce(state => {
        state.routes = [initialRoute];
        state.level = 1;
      }),
    );
  },
}));

export default useCuisineStore;
