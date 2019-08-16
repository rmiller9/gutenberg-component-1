// JavaScript Document
/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */
  
wp.blocks.registerBlockType('brad/border-box', {
  title: 'Text Box',
  icon: 'hammer',
  category: 'common',
  attributes: {
    content: {type: 'string'},
    color: {type: 'string'}
  },
  
/* This configures how the content and color fields will work, and sets up the necessary elements */
  
  edit: function(props) {
    function updateContent(event) {
      props.setAttributes({content: event.target.value})
    }
  function updateFontSize(value){
    props.setAttributes({fontSize: value.numberValue})
  }

    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Enter Text"
      ),
      React.createElement("textarea", { type: "text", value: props.attributes.content, onChange: updateContent, onChange:updateFontSize }),	
      React.createElement(wp.components.FontSizePicker, {  withSlider:true, fontSize: props.attributes.fontSize, onChangeComplete: updateFontSize })
    );
  },
  save: function(props) {
    return wp.element.createElement(
      "h3",
      { style: {  fontSize: props.attributes.fontSize + "px" } },
      props.attributes.content
    );

  }
})
