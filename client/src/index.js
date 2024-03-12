import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import RegisterScreen from './screens/registerScreen/RegisterScreen'
import DevScreen from './screens/devScreen/DevScreen'
import PrivateRoute from './components/utils/PrivateRoute'
import ProfileScreen from './screens/private/profile/ProfileScreen'
import DashboardScreen from './screens/private/dashboardScreen/DashboardScreen'
import CreateProfile from './screens/private/createProfil/CreateProfile'
import AddExperience from './screens/private/addExperience/AddExperience'
import AdEducation from './screens/private/addEducation/AdEducation'
import Posts from './screens/private/posts/Posts'
import Post from './screens/private/post/Post'
import MarketScreen from './screens/private/marketsScreen/MarketScreen'
import FaqScreen from './screens/faqScreen/FaqScreen'
import RegisterSuccess from './screens/private/registerSuccess/RegisterSuccess'
import UpdatePasswordScreen from './screens/private/updatePasswordScreen/UpdatePasswordScreen'
import UpdateEmailScreen from './screens/private/updateEmailScreen/UpdateEmailScreen'
import AddProductScreen from './screens/private/addProductScreen/AddProductScreen'
import ResetPasswordScreen from './screens/resetPasswordScreen/ResetPasswordScreen'
import LegalMentionScreen from './screens/legalMentions/LegalMentionScreen'
import AboutPage from './screens/aboutPage/AboutPage'
import ProductsScreen from './screens/private/productsScreen/ProductsScreen'
import ProductEditScreen from './screens/private/productEditScreen/ProductEditScreen.jsx'
import ProductScreen from './screens/private/productScreen/ProductScreen'
import FonctionPage from './screens/fonctionPage/FonctionPage.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/fonctionnalites" element={<FonctionPage />} />
      <Route path="/developper" element={<DevScreen />} />
      <Route path="/faq" element={<FaqScreen />} />
      <Route path="/resetPassword" element={<ResetPasswordScreen />} />
      <Route path="/mentions-legales" element={<LegalMentionScreen />} />

      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/register-success" element={<RegisterSuccess />} />
        <Route path="/profile/user/:id" element={<ProfileScreen />} />
        <Route path="/produit/:id" element={<ProductScreen />} />
        <Route path="/update-password" element={<UpdatePasswordScreen />} />
        <Route path="/update-password" element={<UpdatePasswordScreen />} />
        <Route path="/update-email" element={<UpdateEmailScreen />} />
        <Route path="/dashboard/:id" element={<DashboardScreen />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/add-experience" element={<AddExperience />} />
        <Route path="/add-education" element={<AdEducation />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/edit-product/:id" element={<ProductEditScreen />} />
        <Route path="/markets" element={<MarketScreen />} />
        <Route path="/add-product" element={<AddProductScreen />} />
      </Route>
      {/* <Route path="/profile/:id" element={<ProfileScreen />} /> */}
    </Route>,
  ),
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
