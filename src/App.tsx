import type { RouteObject } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Main from "./components/Main";
import RootLayout from "./pages/Root";

const App = (): JSX.Element => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
