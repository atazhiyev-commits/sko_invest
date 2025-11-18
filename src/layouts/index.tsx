import Header from "./header";
import Hero from "./hero";
import News from "./news";

import "./layouts.scss";
import Helper from "./helpers";
import FAQ from "../sections/faq";
import Defense from "../sections/defense";

const Layouts = () => {
  return (
    <div className="layouts">
      <Header />
      <Hero />
      <News />
      <Helper />
      <FAQ />
      <Defense />
    </div>
  );
};

/*
{
	"Export default component": {
		"prefix": "exr",
		"body": [
			"export { default } from './${TM_FILENAME}'"
		],
		"description": "Log output to console",
	},
	"React FC with children": {
		"prefix": "fc",
		"body": [
			"import { FC } from 'react';",
			"",
			"interface Props {",
			"  className?: string;",
			"  children: React.ReactNode;",
			"}",
			"",
			"const ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}: FC<Props> = ({ children, className }) => {",
			"  return (",
			"    <>",
			"      {children}",
			"    </>",
			"  );",
			"};",
			"",
			"export default ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/};"
		],
		"description": "React Functional Component with children (TypeScript)"
	},
	"React default ts function": {
		"prefix": "rfc",
		"body": [
			"const ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/} = () => {",
			"  return (",
			"    <>",
			"      <h2>${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}</h2>",
			"      <h2>${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}</h2>",
			"    </>",
			"  );",
			"};",
			"",
			"export default ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/};"
		],
		"description": "React Functional Component with children (TypeScript)"
	}
}
*/

export default Layouts;
