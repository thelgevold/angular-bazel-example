export class ValList {
  items:Array<ListItem>;

  setCurrent(item: ListItem){
      this.clearAll();
      item.current = true;
  }

  clearAll(){
      this.items.forEach(i => i.current = false);
  }
}

export class ListItem {
  val:Number;
  current:Boolean;

  constructor(val: Number){
      this.val = val;
      this.current = false;
  }

  getClass(){
      if(this.current){
          return 'current-item';
      }
      return null;
  }
}