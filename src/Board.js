// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {

  window.Board = Backbone.Model.extend({

    initialize: function (params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get('n'))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function() {
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


/*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict
    hasRowConflictAt: function(rowIndex) {
<<<<<<< HEAD
      var thisRow = this.get(rowIndex)
      var piecesInRow = thisRow.filter(function(square) {
        return square === 1;
      });
      if (piecesInRow.length > 1) {
        return true; 
      } else {
        return false;
      }
=======
      return this.get(rowIndex).reduce(function(p, c) {
        return c === 1 ? p += 1 : p;
      }, 0) > 1;
>>>>>>> 344a96f192a49b2e0dc3c5802bcbd2c0cb15c01c
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
<<<<<<< HEAD
      var rows = this.rows();
      for (var i = 0; i < rows.length; i++) {
=======
      for (var i = 0; i < this.rows().length; i++) {
>>>>>>> 344a96f192a49b2e0dc3c5802bcbd2c0cb15c01c
        if (this.hasRowConflictAt(i)) {
          return true;
        }
      }
<<<<<<< HEAD
      return false; 
    },

=======
>>>>>>> 344a96f192a49b2e0dc3c5802bcbd2c0cb15c01c

      return false;
    },

    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
<<<<<<< HEAD
      var thisCol = [];
      //make an array to represent this column by iterating through the rows and pulling the colIndex-th item
      var rows = this.rows();
      for (var i = 0; i < rows.length; i++) {
        thisCol.push(rows[i][colIndex]);
      }
      var piecesInCol = thisCol.filter(function(square) {
        return square === 1;
      });
      if (piecesInCol.length > 1) {
        return true;
      } else {
        return false;
      }
=======
      var count = 0;

      for (var i = 0; i < this.get('n'); i++) {
        if (this.get(i)[colIndex] === 1) {
          count++;
        } if (count > 1) {
          return true;
        }
      }

      return false;
>>>>>>> 344a96f192a49b2e0dc3c5802bcbd2c0cb15c01c
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
<<<<<<< HEAD
      var rows = this.rows();
      for (var i = 0; i < rows.length; i++) {
=======
      for (var i = 0; i < this.get('n'); i++) {
>>>>>>> 344a96f192a49b2e0dc3c5802bcbd2c0cb15c01c
        if (this.hasColConflictAt(i)) {
          return true;
        }
      }
<<<<<<< HEAD
=======

>>>>>>> 344a96f192a49b2e0dc3c5802bcbd2c0cb15c01c
      return false;
    },



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict
<<<<<<< HEAD
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) {
      var curCol = majorDiagonalColumnIndexAtFirstRow;
      var diagonal = [];
      var rows = this.rows();
      for (var i = 0; i < rows.length; i++) {
        //if current column is within the board
        if (curCol >= 0 && curCol < rows.length) {
          diagonal.push(rows[i][curCol]);
        }
        curCol++;
      }
      var piecesinMajorDiag = diagonal.filter(function(square) {
        return square === 1;
      });
      if (piecesinMajorDiag.length > 1) {
        return true;
      } else {
        return false;
      }
=======
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) { var count = 0;

      for (var i = 0; i < this.get('n'); i++) {
        if (this._isInBounds(i, majorDiagonalColumnIndexAtFirstRow + i)) {
          if (this.get(i)[majorDiagonalColumnIndexAtFirstRow + i] === 1) {
            count++;
            if (count > 1) {
              return true;
            }
          }
        }
      }

      return false;
>>>>>>> 344a96f192a49b2e0dc3c5802bcbd2c0cb15c01c
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
<<<<<<< HEAD
      var topRow = this.get(0);
      var minimumMajDCIAFR = -1 * (topRow.length - 1);
      for (var i = minimumMajDCIAFR; i < topRow.length; i++) {
        if (this.hasMajorDiagonalConflictAt(i)) {
          return true;
        }
      }
      return false;
    },
=======
      var mirrorCols = this.get('n') * -1 + 1;
>>>>>>> 344a96f192a49b2e0dc3c5802bcbd2c0cb15c01c

      for (var i = mirrorCols; i < this.get('n'); i++) {
        if (this.hasMajorDiagonalConflictAt(i)) {
          return true;
        }
      }

      return false;
    },

    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
<<<<<<< HEAD
      var curCol = minorDiagonalColumnIndexAtFirstRow;
      var diagonal = [];
      var rows = this.rows();
      for (var i = 0; i < rows.length; i++) {
        //if current column is within the board
        if (curCol >=0 && curCol < rows.length) {
          diagonal.push(rows[i][curCol]);
        }
        curCol--;
      }
      var piecesInMinorDiag = diagonal.filter(function(square) {
        return square === 1;
      });
      if (piecesInMinorDiag.length > 1) {
        return true;
      } else {
        return false;
      }
=======
      var count = 0;

      for (var i = 0; i < this.get('n'); i++) {
        if (this._isInBounds(i, minorDiagonalColumnIndexAtFirstRow - i)) {
          if (this.get(i)[minorDiagonalColumnIndexAtFirstRow - i] === 1) {
            count++;
            if (count > 1) {
              return true;
            }
          }
        }
      }

      return false;
>>>>>>> 344a96f192a49b2e0dc3c5802bcbd2c0cb15c01c
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
<<<<<<< HEAD
      var topRow = this.get(0);
      var maximumMinDCIAFR = 2 * (topRow.length - 1);
      for (var i = 0; i < maximumMinDCIAFR; i++) {
        if (this.hasMinorDiagonalConflictAt(i)) {
          return true;
        }
      }
=======
      var mirrorCols = this.get('n') * 2 - 1;

      for (var i = mirrorCols; i > 0; i--) {
        if(this.hasMinorDiagonalConflictAt(i)) {
          return true;
        }
      }

>>>>>>> 344a96f192a49b2e0dc3c5802bcbd2c0cb15c01c
      return false;
    }

    /*--------------------  End of Helper Functions  ---------------------*/


  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

}());
