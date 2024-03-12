import { Link, useParams } from 'react-router-dom'
import './dashboardScreen.css'
import {
  FaBlackTie,
  FaEdit,
  FaGraduationCap,
  FaTrash,
  FaUserCircle,
  FaEye,
} from 'react-icons/fa'
import { useGetProfileDetailsByUserQuery } from '../../../slices/profileApiSlice'
import {
  useGetProductsByProfileQuery,
  useAddProductMutation,
} from '../../../slices/productApiSlice'

const DashboardScreen = () => {
  const { id } = useParams()
  console.log(id)

  const { data: profile, isLoading, isError } = useGetProfileDetailsByUserQuery(
    id,
  )
  console.log(
    'URL de la requête :',
    `/api/v1/products/profile/${profile?.data?._id}`,
  )
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    refetch,
  } = useGetProductsByProfileQuery(profile?.data?._id)

  const [createProduct, { isLoading: loadingCreate }] = useAddProductMutation()

  const createProductHandler = async () => {
    if (
      window.confirm('Etes vous sur de vouloir ajouter un nouveau produit ?')
    ) {
      try {
        await createProduct(profile?.data?._id)
        refetch()
      } catch (err) {
        console.error('Failed to create product:', err)
      }
    }
  }

  return (
    <section className="container">
      {isLoading || isLoadingProducts ? (
        <p>chargement...</p>
      ) : isError || isErrorProducts ? (
        <p>Une erreur est survenue</p>
      ) : (
        <>
          <h1 className="large text-primary">
            Dashboard de  <span className='text-secondary'>{profile?.data?.user.name} </span>   
          </h1>

          <div className="dash-buttons">
            <Link className="btn btn-primary" to={'/create-profile'}>
              {' '}
              <FaUserCircle /> Editer votre profile
            </Link>
            {/* <Link className="btn btn-primary" to={'/add-experience'}>
          {' '}
          <FaBlackTie /> Ajouter une experience
        </Link> */}

            {profile?.data?.user.role === 'Artisan/Producteur' && (
              <>
            <h2 className="my-2">Les produits de ma boutique</h2>
            <table className="table">
              <thead>
                <th>Nom</th>
                <th className="hide-sm">Prix</th>
                <th className="hide-sm">image</th>
                <th>Actions</th>
              </thead>
              <tbody>
                {products.data.map((product) => (
                  <tr
                    className={
                      product.name === 'Sample name' ? 'orange-background' : ''
                    }
                  >
                    <td>{product.name}</td>
                    <td className="hide-sm">{product.price}</td>
                    <td className="hide-sm">
                      <div className="img-table">
                        <img src={`/${product.images[0]}`} alt={product.name} />
                      </div>
                    </td>
                    <td>
                      <Link
                        className="btn btn-primary"
                        to={`/produit/${product._id}`}
                      >
                        <FaEye />
                      </Link>
                      <Link
                        to={`/edit-product/${product._id}`}
                        className="btn btn-primary"
                      >
                        <FaEdit />
                      </Link>
                      <button className="btn btn-danger">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </>
            )}
            {profile?.data?.user.role === 'Prestataire' ||
            profile?.data?.user.role === 'Revendeur' ? (
              <button
                onClick={createProductHandler}
                className="btn btn-primary"
                to={'/add-product'}
              >
                {' '}
                <FaBlackTie /> Ajouter un salon ou marché
              </button>
            ) : null}

            {/*         
        <Link className="btn btn-primary" to={'/add-education'}>
          {' '}
          <FaGraduationCap /> ajouter une etudes{' '}
        </Link> */}
          </div>

          <p className="badge-dash"> {profile?.data?.user.role}</p>
          <h2 className="my-2">BIO</h2>
          <p className="bio">{profile?.data?.bio}</p>

          {profile?.data?.user.role === 'Artisan/Producteur' && (
              <button
                onClick={createProductHandler}
                className="btn btn-primary"
                to={'/add-product'}
              >
                {' '}
                <FaBlackTie /> Ajouter un produit
              </button>
            )}
         

          <div className="danger-zone">
            <div className="my-2">
              <Link to={'/update-password'} className="btn btn-danger">
                Changer de mots de passe
              </Link>
            </div>
            <div className="my-2">
              <Link to={'/update-email'} className="btn btn-danger">
                changer mon email
              </Link>
            </div>

            <div className="my-2">
              <button className="btn btn-danger">
                <FaTrash /> Supprimer mon compte
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default DashboardScreen
