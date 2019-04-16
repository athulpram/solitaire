(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,a){t.exports=a(17)},17:function(t,e,a){"use strict";a.r(e);var r=a(0),i=a.n(r),n=a(9),c=a.n(n),s=a(1),o=a(2),u=a(4),d=a(3),l=a(5),h=function(){function t(){Object(s.a)(this,t),this.stack=[]}return Object(o.a)(t,[{key:"addCard",value:function(t){this.stack.push(t)}},{key:"addCards",value:function(t){this.stack=this.stack.concat(t)}},{key:"removeCard",value:function(){return this.stack.pop()}},{key:"removeAllCards",value:function(){var t=this.stack.slice();return this.stack=[],t}},{key:"getTopCard",value:function(){if(console.log(this.stack.length),this.stack.length)return this.stack[this.stack.length-1]}},{key:"getLength",value:function(){return this.stack.length}}]),t}(),f=function(){function t(){Object(s.a)(this,t),this.drawStack=new h,this.discardStack=new h}return Object(o.a)(t,[{key:"addCard",value:function(t){this.drawStack.addCard(t)}},{key:"checkCard",value:function(){if(this.drawStack.getLength()<=0){var t=this.discardStack.removeAllCards();this.drawStack.addCards(t)}var e=this.drawStack.removeCard();e.setFaceUP(),this.discardStack.addCard(e)}},{key:"selectCardForCategorizing",value:function(){return this.discardStack.removeCard()}},{key:"removeCard",value:function(){this.discardStack.removeCard()}},{key:"getTopCardOfDiscradStack",value:function(){return this.discardStack.getTopCard()}}]),t}(),g=a(10),p=a.n(g),k=function(){function t(){Object(s.a)(this,t),this.pile=[]}return Object(o.a)(t,[{key:"addCard",value:function(t){this.pile.push(t)}},{key:"addCards",value:function(t){this.pile=t.slice(),this.pile[this.pile.length-1].setFaceUP()}},{key:"getData",value:function(){return this.pile.slice()}},{key:"getTopCard",value:function(){if(this.pile.length>1)return this.pile[this.pile.length-1]}},{key:"getCard",value:function(t){if(this.pile.length>0){var e=this.pile.find(function(e){return e.getCard()==t});if(e){var a=this.pile.findIndex(function(t){return t==e});return this.pile.slice(a)}}}},{key:"removeCard",value:function(t){if(0==this.pile.length)return!1;var e=this.pile.find(function(e){return e.getCard()==t});if(e){var a=this.pile.findIndex(function(t){return t==e});return this.pile.splice(a),this.pile.length>0&&this.pile[this.pile.length-1].setFaceUP(),!0}return!1}},{key:"categorizeCard",value:function(t){if(0==this.pile.length)return 12==t[0].getRank()&&(this.pile=this.pile.concat(t),!0);var e=this.pile[this.pile.length-1];return!!t[0].canCategorizeOnTopOf(e)&&(console.log("reached inside"),this.pile=this.pile.concat(t),!0)}}]),t}(),v=function(){function t(){Object(s.a)(this,t),this.categorizationPiles=[new k,new k,new k,new k,new k,new k,new k]}return Object(o.a)(t,[{key:"initialize",value:function(t){var e=1;this.categorizationPiles.forEach(function(a){a.addCards(t.splice(t.length-e)),e++})}},{key:"getData",value:function(){return this.categorizationPiles.map(function(t){return t.getData()})}},{key:"getCard",value:function(t){return this.categorizationPiles.map(function(e,a){return{card:e.getCard(t),fromPile:a}}).find(function(t){return t.card})}},{key:"deleteCardFrom",value:function(t,e){return this.categorizationPiles[t].removeCard(e)}},{key:"addCardToPile",value:function(t,e){return this.categorizationPiles[t].categorizeCard(e)}}]),t}(),C=function(){function t(e){Object(s.a)(this,t),this.suits={heart:[],clubs:[],spade:[],diamond:[]}}return Object(o.a)(t,[{key:"getLastCardOf",value:function(t){if(0!=t.length)return t[t.length-1]}},{key:"getData",value:function(){return[this.getLastCardOf(this.suits.heart),this.getLastCardOf(this.suits.clubs),this.getLastCardOf(this.suits.spade),this.getLastCardOf(this.suits.diamond)]}},{key:"addCard",value:function(t){return 0!=this.suits[t.getSuit()].length?!!t.canPileOnTopOf(this.suits[t.getSuit()][this.suits[t.getSuit()].length-1])&&(this.suits[t.getSuit()].push(t),!0):0==t.getRank()&&(this.suits[t.getSuit()].push(t),!0)}}]),t}(),m=function(){function t(){Object(s.a)(this,t),this.drawStack=new f,this.categorizationBoard=new v,this.suitStack=new C}return Object(o.a)(t,[{key:"startGame",value:function(t){t=p.a.shuffle(t),this.categorizationBoard.initialize(t.splice(t.length-28));for(var e=0;e<t.length;e++)this.drawStack.addCard(t.pop())}},{key:"getTopCardOfDiscardStack",value:function(){return this.drawStack.getTopCardOfDiscradStack()}},{key:"checkCard",value:function(){this.drawStack.checkCard()}},{key:"getCategorizationData",value:function(){return this.categorizationBoard.getData()}},{key:"getSuitData",value:function(){return this.suitStack.getData()}},{key:"findCard",value:function(t){var e=this.categorizationBoard.getCard(t);return e||((e={}).card=[this.getTopCardOfDiscardStack()],e.fromPile=void 0),e}},{key:"categorizeCard",value:function(t){var e=this.findCard(t);if(!(e.fromPile&&e.card.length>1)&&(e.card=e.card[0],this.suitStack.addCard(e.card))){if(e.fromPile>=0)return void this.categorizationBoard.deleteCardFrom(e.fromPile,t);e.card=this.drawStack.removeCard()}}},{key:"rearrangeCard",value:function(t,e){var a=this.findCard(e);if(this.categorizationBoard.addCardToPile(t,a.card)){if(a.fromPile>=0)return void this.categorizationBoard.deleteCardFrom(a.fromPile,e);a.card=this.drawStack.removeCard()}}}]),t}(),y={heart:"playing-card-red",spade:"playing-card-black",clubs:"playing-card-black",diamond:"playing-card-red"},O=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(o.a)(e,[{key:"onDragStart",value:function(t){t.dataTransfer.setData("id",this.props.cardProps.card)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:y[this.props.cardProps.suit],onDragStart:function(e){return t.onDragStart(e)},draggable:"\ud83c\udca0"!==this.props.cardProps.card,id:this.props.cardProps.card},i.a.createElement("span",{className:"symbol-span"},this.props.cardProps.card))}}]),e}(r.Component),S={heart:"playing-card-red",spade:"playing-card-black",clubs:"playing-card-black",diamond:"playing-card-red"},b=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(o.a)(e,[{key:"onDropFunc",value:function(t){t.preventDefault()}},{key:"onDragOver",value:function(){}},{key:"render",value:function(){var t=this.props.piles.map(function(t){var e=S.spade,a="\ud83c\udca0";return t&&(e=t.suit?S[t.suit]:S.spade,a=t.card?t.card:"\ud83c\udca0"),i.a.createElement("div",{className:e},i.a.createElement("span",null,a))});return i.a.createElement("div",{className:"suit-stack"},t)}}]),e}(r.Component),D=a(6),j={heart:"red",clubs:"black",spade:"black",diamond:"red"},z=function(){function t(e,a,r){Object(s.a)(this,t),this.card=e,this.suit=a,this.rank=r,this.faceUp=!1}return Object(o.a)(t,[{key:"getCard",value:function(){return this.faceUp?this.card:"\ud83c\udca0"}},{key:"canCategorizeOnTopOf",value:function(t){return this.rank===t.rank-1&&j[this.suit]!=j[t.suit]}},{key:"canPileOnTopOf",value:function(t){return this.suit===t.suit&&(this.rank,t.rank),!0}},{key:"getSuit",value:function(){return this.faceUp?this.suit:"spade"}},{key:"getRank",value:function(){return this.rank}},{key:"isFaceUp",value:function(){return this.faceUp}},{key:"setFaceUP",value:function(){this.faceUp=!0}},{key:"setFaceDown",value:function(){this.faceUp=!1}}]),t}(),w={BACK:"\ud83c\udca0",SPADES:["\ud83c\udca1","\ud83c\udca2","\ud83c\udca3","\ud83c\udca4","\ud83c\udca5","\ud83c\udca6","\ud83c\udca7","\ud83c\udca8","\ud83c\udca9","\ud83c\udcaa","\ud83c\udcab","\ud83c\udcad","\ud83c\udcae"],HEARTS:["\ud83c\udcb1","\ud83c\udcb2","\ud83c\udcb3","\ud83c\udcb4","\ud83c\udcb5","\ud83c\udcb6","\ud83c\udcb7","\ud83c\udcb8","\ud83c\udcb9","\ud83c\udcba","\ud83c\udcbb","\ud83c\udcbd","\ud83c\udcbe"],DIAMONDS:["\ud83c\udcc1","\ud83c\udcc2","\ud83c\udcc3","\ud83c\udcc4","\ud83c\udcc5","\ud83c\udcc6","\ud83c\udcc7","\ud83c\udcc8","\ud83c\udcc9","\ud83c\udcca","\ud83c\udccb","\ud83c\udccd","\ud83c\udcce"],CLUBS:["\ud83c\udcd1","\ud83c\udcd2","\ud83c\udcd3","\ud83c\udcd4","\ud83c\udcd5","\ud83c\udcd6","\ud83c\udcd7","\ud83c\udcd8","\ud83c\udcd9","\ud83c\udcda","\ud83c\udcdb","\ud83c\udcdd","\ud83c\udcde"]},E="heart",P="clubs",T="spade",B="diamond",F=function(){var t=w.HEARTS.map(function(t,e){return new z(t,E,e)}),e=w.DIAMONDS.map(function(t,e){return new z(t,B,e)}),a=w.SPADES.map(function(t,e){return new z(t,T,e)}),r=w.CLUBS.map(function(t,e){return new z(t,P,e)});return[].concat(Object(D.a)(t),Object(D.a)(e),Object(D.a)(a),Object(D.a)(r))},U=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(o.a)(e,[{key:"changeCard",value:function(){}},{key:"render",value:function(){var t="";return this.props.topCard&&(t=i.a.createElement(O,{cardProps:{card:this.props.topCard.getCard(),suit:this.props.topCard.getSuit()}})),i.a.createElement("div",{className:"discard-stack-set"},i.a.createElement("div",{onClick:this.changeCard},i.a.createElement(O,{cardProps:{suit:"spade",card:w.BACK}})),t)}}]),e}(r.Component),N=function(t){var e=t.cards.map(function(t){return i.a.createElement(O,{cardProps:{card:t.getCard(),suit:t.getSuit()}})});return i.a.createElement("div",{className:"categorizing-pile"},e)},A=function(t){function e(t){var a;Object(s.a)(this,e),a=Object(u.a)(this,Object(d.a)(e).call(this,t));var r=F();return a.game=new m,a.game.startGame(r),a.game.checkCard(),a.state={discardStack:i.a.createElement(U,{topCard:a.game.getTopCardOfDiscardStack()}),categorizationBoard:a.createCategorizationBoard(a.game.getCategorizationData()),suitStack:i.a.createElement(b,{piles:a.game.getSuitData()})},a}return Object(l.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){}},{key:"changeCard",value:function(){this.game.checkCard(),this.updateState()}},{key:"updateState",value:function(){var t=this.game.getSuitData(),e=this.game.getTopCardOfDiscardStack(),a=this.game.getCategorizationData(),r=this.createCategorizationBoard(a);console.log("this sadkfdf"+JSON.stringify(e));var n={discardStack:i.a.createElement(U,{topCard:e}),categorizationBoard:r,suitStack:i.a.createElement(b,{piles:t})};this.setState(n)}},{key:"onDragOver",value:function(t){t.preventDefault()}},{key:"onDropFunc",value:function(t){var e=t.dataTransfer.getData("id");this.game.categorizeCard(e),this.updateState()}},{key:"categorizeCard",value:function(t,e){var a=e.dataTransfer.getData("id");this.game.rearrangeCard(t,a),this.updateState()}},{key:"createCategorizationBoard",value:function(t){var e=this;console.log("categorize data ..... "+JSON.stringify(t));var a=t.map(function(t,a){return i.a.createElement("div",{onDragOver:function(t){e.onDragOver(t)},onDrop:function(t){e.categorizeCard(a,t)},className:"categorize-pile"},i.a.createElement(N,{cards:t}))});return i.a.createElement("div",{class:"categorization-board"},a)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{class:"game-view"},i.a.createElement("div",{className:"top-half-game-board"},i.a.createElement("div",{onClick:function(e){return t.changeCard(e)}},this.state.discardStack),i.a.createElement("div",{class:"heading-div"},i.a.createElement("span",null,"Solitare")),i.a.createElement("div",{onDragOver:function(e){t.onDragOver(e)},onDrop:function(e){t.onDropFunc(e)}},this.state.suitStack)),this.state.categorizationBoard)}}]),e}(r.Component);c.a.render(i.a.createElement(A,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b26b79c9.chunk.js.map