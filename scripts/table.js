const tableData = data;

var table = new Vue({
  el: '#table',
  data: {
    initialData: tableData,
    table: tableData,
    searchKey: '',
    sortColumn: '',
    sortOrderAsc: true
  },
  methods: {
    edit: function() {

    },
    
    search: function() {
      if(this.searchKey.length > 0) {
        let updatedTable = tableData.filter((row) => {
          let rowString = concatenateObjVals(row);
          return rowString.includes(this.searchKey);
        });
        this.updateView(updatedTable);
      }

      else {
        this.updateView(this.initialData);
      }
    },

    sort: function(colName) {
      this.sortOrderAsc = this.sortColumn === colName ? !this.sortOrderAsc : true;
      this.sortColumn = colName;

      let sortedTable = this.table.sort((a, b) => {

        let sort = a[colName].toUpperCase() < b[colName].toUpperCase() ? -1 : 1;
        !this.sortOrderAsc ? sort = sort * -1 : null;
        return sort;
      });

      this.updateView(sortedTable);
    },

    updateView: function(newArr) {
      this.table = newArr;
    }
  }
})
