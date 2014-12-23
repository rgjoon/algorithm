function BinaryTree(data) {
  var root = {};

  return {
    travel : function(f) {
      var visit = function(node, depth) {
        if( !node ) {
          return;
        }

        visit(node.right, depth + 1);
        f(node, depth);
        visit(node.left, depth + 1);
      };

      visit(root, 0);
    },
    put : function(target) {
      var find = function(node, target) {
        if( data.compare(node.target, target) > 0 ) {
          if( node.left ) {
            return find(node.left, target);
          }
          else {
            node.left = {};
            return node.left;
          }
        }
        else
        if( data.compare(node.target, target) < 0 ) {
          if( node.right ) {
            return find(node.right, target);
          }
          else {
            node.right = {};
            return node.right;
          }
        }
        else {
          return node;
        }
      };

      if( !root.target ) {
        root.target = target;
      }
      else {
        var newnode = find(root, target);
        newnode.target = target;
      }
    }
  };
}