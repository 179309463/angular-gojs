angular.module('ableApp')

    .directive('diagramDirective',['$state','$stateParams', function($state,$stateParams) {
      var state = $state;
      return {

        restrict: 'E',
        template: '<div></div>',  // just an empty DIV element
        replace: true,
        scope: { model: '=goModel' },
        link: function(scope, element, attrs, $state) {
          // var state = $state;
          var $ = go.GraphObject.make;
          var diagram =  // create a Diagram for the given HTML DIV element
            $(go.Diagram, element[0],
              {
                initialContentAlignment: go.Spot.Center, // center Diagram contents
                "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
                layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
                { angle: 0, layerSpacing: 35 }),
                ///
                nodeTemplate: $(go.Node, "Horizontal",
                                { background: "#8332D9" },
                                $(go.Picture,
                                  { margin: 10, width: 50, height: 50, background: "#0CAD2A" },
                                  new go.Binding("source","source")),
                                $(go.TextBlock, "Default Text",
                                  { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
                                  new go.Binding("text", "name")),
                                {
                                    doubleClick: function(e, obj,$state,$stateParams) { 
                                    var asset = obj.part.data.key;  
                                    console.log("Clicked on " + asset);
                                    state.go("diagram.asset", { id: asset }); //change state in UI router and pass in the asset for the id param 
                                    // diagram.model.addNodeData({ key: "5", parent: obj.part.data.key, name: "test",    source: "cat2.png" }); 

                                  }
                                }
                              )


              });

          // whenever a GoJS transaction has finished modifying the model, update all Angular bindings
          function updateAngular(e) {
            if (e.isTransactionFinished) scope.$apply();
          }

          // notice when the value of "model" changes: update the Diagram.model
          scope.$watch("model", function(newmodel) {
            var oldmodel = diagram.model;
            if (oldmodel !== newmodel) {
              if (oldmodel) oldmodel.removeChangedListener(updateAngular);
              newmodel.addChangedListener(updateAngular);
              diagram.model = newmodel;
            }
          });

          scope.$watch("model.selectedNodeData.name", function(newname) {
            // disable recursive updates
            diagram.model.removeChangedListener(updateAngular);
            // change the name
            diagram.startTransaction("change name");
            // the data property has already been modified, so setDataProperty would have no effect
            var node = diagram.findNodeForData(diagram.model.selectedNodeData);
            if (node !== null) node.updateTargetBindings("name");
            diagram.commitTransaction("change name");
            // re-enable normal updates
            diagram.model.addChangedListener(updateAngular);
          });

          // update the model when the selection changes
          diagram.addDiagramListener("ChangedSelection", function(e) {
            var selnode = diagram.selection.first();
            diagram.model.selectedNodeData = (selnode instanceof go.Node ? selnode.data : null);
            scope.$apply();
          });
        }
      };
    }])