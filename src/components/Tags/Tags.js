const Tags = ({tags}) => {
    if (tags.length > 0) {
        return (
        <ul className="tags">
          { tags.map(tag => <li key={tag}>{tag}</li>) }
        </ul>
      );
    }
};

export default Tags;
