export default {
  boolean(default_) {
    if (default_ === undefined) {
      return {
        type: Boolean,
        required: true,
      };
    } else {
      return {
        type: Boolean,
        default: default_,
      };
    }
  },

  number(default_) {
    if (default_ === undefined) {
      return {
        type: Number,
        required: true,
      };
    } else {
      return {
        type: Number,
        default: default_,
      };
    }
  },

  string(default_) {
    if (default_ === undefined) {
      return {
        type: String,
        required: true,
      };
    } else {
      return {
        type: String,
        default: default_,
      };
    }
  },

  array(default_) {
    if (default_ === undefined) {
      return {
        type: Array,
        required: true,
      };
    } else {
      return {
        type: Array,
        default() {
          return default_;
        },
      };
    }
  },

  object(default_) {
    if (default_ === undefined) {
      return {
        type: Object,
        required: true,
      };
    } else {
      return {
        type: Object,
        default() {
          return default_;
        },
      };
    }
  },

  func(default_) {
    if (default_ === undefined) {
      return {
        type: Function,
        required: true,
      };
    } else {
      return {
        type: Function,
        default: default_,
      };
    }
  },

  instance(constructor, default_) {
    if (default_ === undefined) {
      return {
        required: true,
        validator(any) {
          return any instanceof constructor;
        },
      };
    } else {
      if (default_ !== null && default_ instanceof constructor) {
        throw 'The default value of instance props must be instance.';
      }
      return {
        required: false,
        validator(any) {
          return any instanceof constructor;
        },
      };
    }
  },

  multiType(typesArray, default_) {
    if (default_ === undefined) {
      return {
        type: typesArray,
        required: true,
      };
    } else {
      return {
        type: typesArray,
        default: default_,
      };
    }
  },

  includeValid(type, array, required) {
    if (required === undefined) required = true;
    return {
      type,
      required,
      validator(val) {
        return array.includes(val);
      },
    };
  },
};
