(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e077c3ce"],{"169a":function(t,e,i){"use strict";var n=i("5530"),s=i("2909"),a=i("ade3"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),u=i("e707"),h=i("e4d3"),d=i("21be"),p=i("f2e7"),f=i("a293"),m=i("58df"),v=i("d9bd"),g=i("80d2"),b=Object(m["a"])(r["a"],l["a"],c["a"],u["a"],h["a"],d["a"],p["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(a["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(a["a"])(t,"v-dialog--active",this.isActive),Object(a["a"])(t,"v-dialog--persistent",this.persistent),Object(a["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(a["a"])(t,"v-dialog--scrollable",this.scrollable),Object(a["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(v["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(s["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1a07":function(t,e,i){"use strict";i("7aa6")},"2b5d":function(t,e,i){"use strict";var n=i("53ca"),s=i("5530"),a=(i("d3b7"),i("25f0"),i("7db0"),i("8a79"),i("fb6a"),i("b0c0"),i("caad"),i("2532"),i("c740"),i("a434"),i("2bfd"),i("b974")),o=(i("d81d"),i("4de4"),i("498a"),i("8654")),r=i("d9f7"),l=i("80d2"),c=Object(s["a"])(Object(s["a"])({},a["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),u=a["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var i=Object(l["q"])(e,t.itemText),n=null!=i?String(i):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=a["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(s["a"])(Object(s["a"])({},c),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=a["a"].options.computed.listData.call(this);return t.props=Object(s["a"])(Object(s["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var i=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===t.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===l["w"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["w"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["w"].backspace&&t!==l["w"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var n=this.selectedItems.length,s=t!==n-1?t:t-1,a=this.selectedItems[s];a?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["o"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=a["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,i=e.value;e.value&&this.activateMenu(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l["w"].home,l["w"].end].includes(e)||a["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){a["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){a["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,i;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],s=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",s),null==(i=t.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",s),t.preventDefault()}}}});e["a"]=u.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return a["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=u.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var i=this,n=a["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(n.componentOptions.listeners=Object(s["a"])(Object(s["a"])({},n.componentOptions.listeners),{},{dblclick:function(){i.editingIndex=e,i.internalSearch=i.getText(t),i.selectedIndex=-1}})),n},onChipInput:function(t){a["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&u.options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l["w"].home,l["w"].end].includes(e)||a["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===l["w"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===l["w"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();u.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():(u.options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){a["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this,e=this.internalValue.slice(),i=this.selectedItems.findIndex((function(e){return t.getText(e)===t.internalSearch}));if(i>-1){var s="object"===Object(n["a"])(e[i])?Object.assign({},e[i]):e[i];e.splice(i,1),e.push(s)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){if(this.searchIsDirty){this.internalSearch!==this.getText(this.internalValue)&&this.setValue();var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&(this.internalSearch=null)}},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this,e=this.getMenuIndex();if(!(e<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var i=this.selectedItems.findIndex((function(e){return t.internalSearch===t.getText(e)})),s=i>-1&&"object"===Object(n["a"])(this.selectedItems[i])?Object.assign({},this.selectedItems[i]):this.internalSearch;if(i>-1){var a=this.internalValue.slice();a.splice(i,1),this.setValue(a)}if(e>-1)return this.internalSearch=null;this.selectItem(s),this.internalSearch=null}},onPaste:function(t){var e;if(this.multiple&&!this.searchIsDirty){var i=null==(e=t.clipboardData)?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");i&&-1===this.findExistingIndex(i)&&(t.preventDefault(),a["a"].options.methods.selectItem.call(this,i))}},clearableCallback:function(){this.editingIndex=-1,u.options.methods.clearableCallback.call(this)}}})},"2bfd":function(t,e,i){},"368e":function(t,e,i){},"526a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("productsList")],1)},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({attrs:{outlined:"",small:"",color:"primary",dark:""}},"v-btn",s,!1),n),[t._v(" Add producy ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"text-h5"},[t._v("Add product")])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Product name*",required:""},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Description",required:""},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Product Code",required:""},model:{value:t.product.code,callback:function(e){t.$set(t.product,"code",e)},expression:"product.code"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{type:"number",label:"Product Price in birr",required:""},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}})],1)],1)],1),i("small",[t._v("*indicates required field")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.localaddproduct()}}},[t._v(" Save ")])],1)],1)],1),i("v-card",[i("v-card-title",[t._v("Products")]),i("v-card-subtitle",[i("v-row",[i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{label:"Search",required:"",dense:""},on:{input:t.searching},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-combobox",{attrs:{items:this.suppliers,"item-text":"fname","item-value":"id",label:"Pick a supplier",dense:"",clearable:""},on:{change:t.suppliersearching},model:{value:t.supplier,callback:function(e){t.supplier=e},expression:"supplier"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-combobox",{attrs:{items:this.categories,"item-text":"name","item-value":"id",label:"Pick a category",dense:"",clearable:""},on:{change:t.categorysearching},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)],1)],1),i("v-card-text",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.products,"items-per-page":15},scopedSlots:t._u([{key:"item.available",fn:function(e){var n=e.item;return[i("v-chip",{attrs:{color:t.getColor(n.available),dark:"",small:""}},[i("b",[t._v(" "+t._s(n.available)+" ")])])]}},{key:"item.actions",fn:function(e){var n=e.item;return[i("v-row",[i("v-btn",{attrs:{text:"","x-small":"",color:"green"}},[i("v-icon",{attrs:{color:"green",small:""},on:{click:function(e){return t.toDetails(n.id)}}},[t._v("mdi-details")])],1),i("v-btn",{attrs:{text:"","x-small":"",color:"red"}},[i("v-icon",{attrs:{small:"",color:"red"},on:{click:function(e){return t.localDeleteProduct(n.id)}}},[t._v("mdi-delete")])],1)],1)]}}])})],1)],1)],1)},o=[],r=i("1da1"),l=i("5530"),c=(i("96cf"),i("d3b7"),i("25f0"),i("4de4"),i("b0c0"),i("ac1f"),i("841c"),i("5628")),u=i.n(c),h=i("2f62"),d={name:"productsList",computed:Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(h["c"])("products",["products"])),Object(h["c"])("suppliers",["suppliers"])),Object(h["c"])("categories",["categories"])),{},{supplier:{get:function(){return this.$store.state.products.product.supplier},set:function(t){this.oldsupplier=this.$store.state.products.product.supplier,this.$store.commit("products/setProductSupplier",t)}},category:{get:function(){return this.$store.state.products.product.category},set:function(t){this.$store.commit("products/setProductCategory",t)}}}),mounted:function(){this.getProducts(),this.getSuppliers(),this.getCategory()},methods:Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(h["b"])("products",["getProducts","addProduct","deleteProduct"])),Object(h["b"])("suppliers",["getSuppliers"])),Object(h["b"])("categories",["getCategory"])),{},{toDetails:function(t){this.$router.push("/products/"+t.toString())},getColor:function(t){return t?"green":"red"},localaddproduct:function(){this.addProduct(this.product)},suppliersearching:function(t){null!=t?this.filter.filters.SupplierId=t.id:delete this.filter.filters.SupplierId,console.log(this.filter.filters),this.getProducts(this.filter)},categorysearching:function(t){null!=t?this.filter.filters.CategoryId=t.id:delete this.filter.filters.CategoryId,console.log(this.filter.filters),this.getProducts(this.filter)},localDeleteProduct:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:e.$confirm({message:"Are you sure you want to delete this product?",button:{no:"No",yes:"Yes"},callback:function(i){i&&(console.log("Yes"),e.deleteProduct(t))}});case 1:case"end":return i.stop()}}),i)})))()},searching:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.filter.filters.name.$regex=t.search,t.getProducts(t.filter);case 2:case"end":return e.stop()}}),e)})))()}}),data:function(){return{headers:u.a,dialog:!1,filter:{filters:{}},search:"",desserts:[],product:{name:"",code:"",description:"",available:!1,viewprevprice:!1}}}},p=d,f=i("2877"),m=i("6544"),v=i.n(m),g=i("8336"),b=i("b0af"),I=i("99d9"),x=i("cc20"),S=i("62ad"),y=i("2b5d"),C=i("a523"),w=i("8fea"),O=i("169a"),k=i("132d"),D=i("0fd9"),j=i("2fa4"),$=i("8654"),V=Object(f["a"])(p,a,o,!1,null,null,null),A=V.exports;v()(V,{VBtn:g["a"],VCard:b["a"],VCardActions:I["a"],VCardSubtitle:I["b"],VCardText:I["c"],VCardTitle:I["d"],VChip:x["a"],VCol:S["a"],VCombobox:y["a"],VContainer:C["a"],VDataTable:w["a"],VDialog:O["a"],VIcon:k["a"],VRow:D["a"],VSpacer:j["a"],VTextField:$["a"]});var T={components:{productsList:A}},P=T,_=(i("1a07"),Object(f["a"])(P,n,s,!1,null,"132f5be8",null));e["default"]=_.exports;v()(_,{VContainer:C["a"]})},5628:function(t,e){t.exports=[{text:"Product Name",align:"start",sortable:!1,value:"name"},{text:"Produc Code",value:"code"},{text:"Supplier",value:"Supplier.fname"},{text:"Category",value:"Category.name"},{text:"Stock",value:"stock"},{text:"UOM",value:"uom"},{text:"Price",value:"price"},{text:"Available",value:"available"},{text:"Actions",value:"actions"}]},"7aa6":function(t,e,i){}}]);
//# sourceMappingURL=chunk-e077c3ce.a4c97fb9.js.map