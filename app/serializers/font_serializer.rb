class FontSerializer < ActiveModel::Serializer
  attributes :id, :family, :displayName, :category, :size, :subsets, :fonts, :axes, :designers, :dateAdded, :popularity, :trending, :defaultSort
end
