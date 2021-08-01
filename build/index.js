import Test from './Test';
import div from './Test';
import text from './Test';

function anything({
  req,
  res
}) {
  const x = 45;
  return Test(div(text()));
}