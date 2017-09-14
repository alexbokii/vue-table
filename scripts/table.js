const tableData = data;
console.log(tableData);

var table = new Vue({
  el: '#table',
  data: {
    initialData: tableData,
    table: tableData,
    searchKey: ''
  },
  methods: {
    search: function() {
      if(this.searchKey.length > 0) {
        let updatedTable = tableData.filter((row) => {
          return row.name.includes(this.searchKey);
        });
        this.updateView(updatedTable);
      }

      else {
        this.updateView(this.initialData);
      }
    },
    updateView: function(newArr) {
      this.table = newArr;
    }
  }
})
