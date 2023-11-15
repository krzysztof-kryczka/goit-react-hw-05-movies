import css from './Home.module.css';
const Home = () => {

  return (
    <main>
      <h1 className={css.title}>Trending today</h1>
    </main>
  );
};

// At the moment, React.lazy() does not support using named 
// exports for React components. If you wish to use named exports 
// containing React components, you need to reexport them as 
// default exports in separate intermediate modules.

export { Home as default}; 
