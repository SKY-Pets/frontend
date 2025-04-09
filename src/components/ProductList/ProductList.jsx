import { Grid, Box } from "@mui/material";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products }) => {
  return (
    <Box>
      <Grid container spacing={3} alignItems="stretch">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={6} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
