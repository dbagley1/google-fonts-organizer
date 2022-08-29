import CollectionList from "../components/CollectionList";

function CollectionPage({ user }) {
  return (
    <div className="container">
      CollectionPage
      <CollectionList user={user} />
    </div>
  );
}

export default CollectionPage;
