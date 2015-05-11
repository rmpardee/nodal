module.exports = {
  serial: {
    convert: function(v) {
      return parseInt(v) || 0;
    }
  },
  int: {
    convert: function(v) {
      return parseInt(v) || 0;
    }
  },
  currency: {
    convert: function(v) {
      return parseInt(v) || 0;
    }
  },
  float: {
    convert: function(v) {
      return parseFloat(v) || 0;
    }
  },
  string: {
    convert: function(v) {
      return v === null ? '' : (v + '');
    }
  },
  text: {
    convert: function(v) {
      return v === null ? '' : (v + '');
    }
  },
  datetime: {
    convert: function(v) {
      if(!(v instanceof Date)) {
        if(!isNaN(parseInt(v))) {
          v = new Date(parseInt(v));
        } else {
          v = new Date(v);
        }
        if(v.toString() === 'Invalid Date') {
          v = new Date(0);
        }
      }
      return v;
    }
  },
  boolean: {
    convert: function(v) {
      return typeof v === 'string' ? [true, false][({'f':1,'false':1,'n':1,'no':1,'off':1,'0':1,'':1}[v]|0)] : !!v;
    }
  }
};