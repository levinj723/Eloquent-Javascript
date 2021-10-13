// let graph = Object.create(null);

// function runGraph (){

// if (graph["beans"] ==  null){

//     graph["beans"] = ["black"]

// } else {

//     graph ["beans"].push("and brown")
// }

// }

// runGraph();
// console.log(graph.beans);
// runGraph(); 
// console.log(graph.beans);
// runGraph();
// console.log(graph.beans);

// let myString = [ "James-Kristy", "Kristy-Chad", "Chad-Jon", "Jon-Herbie", "Herbie-Oscar", "Oscar-Fabio"];


// let otherString = myString.map((r => r.split('-')));

// console.log (otherString[1]);

// for ( let k of otherString){
    
//    console.log( k[0] );
//    console.log(k[1]);

// }


const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
    ];



    function buildGraph(edges) {
        let graph = Object.create(null);
        function addEdge(from, to) {
        if (graph[from] == null) {
        graph[from] = [to];
        } else {
        graph[from].push(to);
        }
        }
        for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
        }
        return graph;
        }
        const roadGraph = buildGraph(roads);



        class VillageState {
            constructor(place, parcels) {
            this.place = place;     
            this.parcels = parcels;
}
move(destination) {
if (!roadGraph[this.place].includes(destination)) {
return this;
} else {
let parcels = this.parcels.map(p => {
if (p.place != this.place) return p;
return {place: destination, address: p.address};
}).filter(p => p.place != p.address);
return new VillageState(destination, parcels);
}
}
}
let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
    );
    let next = first.move("Alice's House");
    console.log(next.place);
    // → Alice's House
    console.log(next.parcels);
    // → []
    console.log(first.place);
    // → Post Office


    function runRobot(turns, state, robot, memory) {
        for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            turns.push(turn);
        // console.log(`Done in ${turn} turns`);
        break;
        }
        let action = robot(state, memory = '');
        
        // console.log(memory.length)
        state = state.move(action.direction);
        memory = action.memory;
        // console.log(`Moved to ${action.direction}`);
        }
        }

        function finalRandomRobot(state) {

            let myTurns = 0; 
            let myTurnsPrevious = 1000;
            let myStoredMoves; 
            let thisRandom; 

            for( let i = 0; i < 1000; i++){

                thisRandom = runRandomRobot(myTurns,state,randomRobot);
                myTurns = thisRandom[1];
                // console.log(myTurns);


                if (myTurns < myTurnsPrevious){
                    myTurnsPrevious = myTurns; 
                    myStoredMoves = thisRandom[0]; 
                    
                }
                
            }
            console.log(myTurnsPrevious);
            // console.log(myStoredMoves);

            return {direction: myStoredMoves};

        }
        



        function runRandomRobot(myTurns, state, robot, memory) {

            let storedMoves = []; 

            for (let turn = 0;; turn++) {
            if (state.parcels.length == 0) {
                
                myTurns = turn;
                // console.log(myTurns);
            // console.log(`Done in ${turn} turns`);
            break;
            }
            
            let action = robot(state, memory = '');
            storedMoves.push(action.direction);
            
        
            // console.log(memory.length)
            state = state.move(action.direction);
            memory = action.memory;
            // console.log(`Moved to ${action.direction}`);
            }
            // console.log(storedMoves);
            return [storedMoves[0], myTurns];
            }

        function randomPick(array) {
            let choice = Math.floor(Math.random() * array.length);
            
            return array[choice];
            }
            function randomRobot(state) {
            return {direction: randomPick(roadGraph[state.place])};
            }




            VillageState.random = function(parcelCount = 5) {
                let parcels = [];
                for (let i = 0; i < parcelCount; i++) {
                let address = randomPick(Object.keys(roadGraph));
                let place;
                do {
                place = randomPick(Object.keys(roadGraph));
                } while (place == address);
                parcels.push({place, address});
                }
                return new VillageState("Post Office", parcels);
                };


                function getRobotAverage () {
                let villageStates = []; 
                let robotOneTurns = [];
                let robotTwoTurns = []; 
                let robotThreeTurns = [];

               for (let i = 0; i < 100; i++){
                   
                villageStates.push( VillageState.random());
                runRobot(robotOneTurns, villageStates[i],randomRobot)
                runRobot(robotTwoTurns, villageStates[i],goalOrientedRobot)
                runRobot(robotThreeTurns, villageStates[i], finalRandomRobot)


               }
               let robotOneSum = robotOneTurns.reduce((a,b) => a + b );
               let robotTwoSum = robotTwoTurns.reduce((a,b) => a + b );
               let robotThreeSum = robotThreeTurns.reduce((a,b) => a +b);


               console.log(`first robot average:  ${robotOneSum/100}`);
               console.log(`second robot average: ${robotTwoSum/100}`);
               console.log(`third robot average: ${robotThreeSum/100}`)




                }

getRobotAverage(); 





                // runRobot(VillageState.random(), randomRobot);





                function findRoute(graph, from, to) {
                    let work = [{at: from, route: []}];
                    for (let i = 0; i < work.length; i++) {
                    let {at, route} = work[i];
                    for (let place of graph[at]) {
                    if (place == to) return route.concat(place);
                    if (!work.some(w => w.at == place)) {
                    work.push({at: place, route: route.concat(place)});
                    }
                    }
                    }
                    }
                function betterFindRoute(graph, from, state) {
                    
                    let finalPlace = from; 
                    let count = []; 
                    
                   for (let parcel of state.parcels){
                            if (!count.includes(parcel.address))
                            count.push(parcel.address)

                   }
                    return finalPlace;
                    }
                    
                    
                function findAllPlacesRemaining ( state){

                }

                function findRoute(graph, from, to) {
                    let work = [{at: from, route: []}];
                    for (let i = 0; i < work.length; i++) {
                    let {at, route} = work[i];
                    for (let place of graph[at]) {
                    if (place == to) return route.concat(place);
                    if (!work.some(w => w.at == place)) {
                    work.push({at: place, route: route.concat(place)});
                    }
                    }
                    }
                    }    


                    function goalOrientedRobot({place, parcels}, route) {
                        if (route.length == 0) {
                        let parcel = parcels[0];
                        if (parcel.place != place) {
                        route = findRoute(roadGraph, place, parcel.place);
                        } else {
                        route = findRoute(roadGraph, place, parcel.address);
                        }
                        }
                        return {direction: route[0], memory: route.slice(1)};
                        }


                       
                    function betterGoalOrientedRobot(state) {
                        
                      let myPlace = betterFindRoute(roadGraph,state.place,state)

                        

                        return {direction: myPlace, memory: myPlace};

                        } 
                    


                

class Pgroup { 

    constructor (){

        this.gruppen = [];
        this.tempItem =0;
    }

 has(item) { return this.gruppen.includes(item);

}

addItem(itemOne){

if ( !this.has (itemOne))
let newGruppe = new Pgroup;
newGruppe = this;
newGruppe.gruppen.push(itemOne);
return newGruppe; 

}

removeItem(itemtwo)
{
    
    if (this.has(itemtwo)){
    let newGruppe = new Pgroup; 
    newGruppe = this; 
    // console.log(this.gruppen.indexOf(itemtwo));
     newGruppe.gruppen.splice(newGruppe.gruppen.indexOf(itemtwo),1);
     return newGruppe; 
    }

}

static from (iterable2){

    let gruppa = new Pgroup;

    for (let i of iterable2){
        
        gruppa.addItem(i);
    }
    return gruppa;
}

*[Symbol.iterator] (){


for ( let i = 0; i < this.gruppen.length;i++)
{
   yield this.gruppen[i]; 


}

}

}






