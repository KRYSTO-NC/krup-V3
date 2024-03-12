import mongoose from 'mongoose'

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    // Ajoutez d'autres champs spécifiques à votre modèle de catégorie si nécessaire
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

const Category = mongoose.model('Category', categorySchema)

export default Category
