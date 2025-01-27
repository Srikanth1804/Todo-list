const Card = ({ Data, onEdit, onDelete }) => {
  return (
    <div>
      {Data.map((data) => {
        return (
          <div className="card mt-2">
            <div
              className="card-body"
              style={{
                backgroundColor: "#f8eded",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "15px",
              }}
            >
              <div className="row">
                <div
                  className="col"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  {data.Do}
                </div>
                <div className="col">
                  <button
                    className="btn bg-success text-white"
                    onClick={() => onEdit(data)}
                    style={{ fontVariant: "small-caps", fontWeight: "500" }}
                  >
                    Edit
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn bg-danger text-white"
                    onClick={() => onDelete(data._id)}
                    style={{ fontVariant: "small-caps", fontWeight: "500" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
