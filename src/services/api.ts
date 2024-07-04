import {useCuisineStore} from '../hooks';

export const getCategories = async () => {
  useCuisineStore.setState({isLoading: true});
  try {
    const response = await fetch('http://localhost:3000');

    useCuisineStore.setState({data: await response.json()});
  } catch (error) {
    console.error(error);
  } finally {
    useCuisineStore.setState({isLoading: false});
  }
};
