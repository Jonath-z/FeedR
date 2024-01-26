import Container from "./Container";
import { CATEGORIES } from "../utils/categories";

const Categories = () => {
  return (
    <div>
      <Container>
        <div className="flex text-[0.9rem] justify-center mt-40  mb-20 md:mb-10 gap-5 ">
          {CATEGORIES.map((category) => (
            <div className="flex flex-col justify-center items-center">
              <div className="text-2xl md:text-4xl border rounded-full p-3 border-blue w-fit hover:bg-blue hover:text-white">{category.icon}</div>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <br className="bg-blue" />
      </Container>
    </div>
  );
};

export default Categories;
