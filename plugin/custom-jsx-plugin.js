module.exports = function (babel) {
    var t = babel.types;
    return {
        name: 'custom-jsx-plugin',
        visitor: {
            JSXElement(path) {
                //get the opening element from jsxElement node
                var openingElement = path.node.openingElement;
                //tagname is name of tag like div, p etc
                var tagName = openingElement.name.name;
                // arguments for React.createElement function
                var args = [];
                //adds "div" or any tag as a string as one of the argument
                // args.push(t.stringLiteral(tagName));
                // as we are considering props as null for now
                var attribs = t.nullLiteral();
                //push props or other attributes which is null for now
                // args.push(attribs);
                // order in AST Top to bottom -> (CallExpression => MemberExpression => Identifiers)
                // below are the steps to create a callExpression
                // var reactIdentifier = t.identifier('this'); //object
                var createElementIdentifier = t.identifier(tagName); //property of object
                // var callee = t.memberExpression(
                //     reactIdentifier,
                //     createElementIdentifier,
                // );
                console.log(openingElement.attributes.map((i) => i.value));
                var callExpression = t.callExpression(
                    createElementIdentifier,
                    args,
                );
                //now add children as a third argument
                callExpression.arguments = callExpression.arguments.concat(
                    path.node.children.filter((i) => i.type !== 'JSXText'),
                );

                // openingElement.attributes,

                // replace jsxElement node with the call expression node made above
                path.replaceWith(callExpression, path.node);
            },
        },
    };
};
