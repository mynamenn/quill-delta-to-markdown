const Node = require("./utils/Node");
const { encodeLink } = require("./utils/URL");

module.exports = {
  embed: {
    formula: function(src) {
      this.append("$$" + src + "$$");
    },
    image: function(src) {
      this.append("![](" + encodeLink(src) + ")");
    },
    // Not a default Quill feature, converts custom divider embed blot added when
    // creating quill editor instance.
    // See https://quilljs.com/guides/cloning-medium-with-parchment/#dividers
    thematic_break: function() {
      this.open = "\n---\n" + this.open;
    },
  },

  inline: {
    italic: function() {
      return ["_", "_"];
    },
    bold: function() {
      return ["**", "**"];
    },
    link: function(url) {
      return ["[", "](" + url + ")"];
    },
    code: function() {
      return ["`", "`"];
    },
  },

  block: {
    header: function({ header }) {
      this.open = "#".repeat(header) + " " + this.open;
    },
    blockquote: function() {
      this.open = "> " + this.open;
    },
    "code-block": function() {
      this.open = "```" + this.open;
    },
    list: {
      group: function() {
        return new Node(["", "\n"]);
      },
      line: function(attrs, group) {
        let indent = "";

        if (attrs.indent) {
          indent = "    ".repeat(attrs.indent);
          group.indent = attrs.indent;
        } else {
          group.indent = 0;
        }

        if (attrs.list === "bullet") {
          this.open = indent + "- " + this.open;
        } else if (attrs.list === "checked") {
          this.open = indent + "- [x] " + this.open;
        } else if (attrs.list === "unchecked") {
          this.open = indent + "- [ ] " + this.open;
        } else if (attrs.list === "ordered") {
          group.indentCounts[attrs.indent] =
            group.indentCounts[attrs.indent] || 0;
          let count = ++group.indentCounts[attrs.indent];
          this.open = indent + count + ". " + this.open;
        }
      },
    },
  },
};
