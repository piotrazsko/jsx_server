import Test from './Test.mjs';
import div from './Test.mjs';
import text from './Test.mjs';

function anything({ req, res }) {
    const x = 45;
    return Test(div(text()));
}
anything({});
