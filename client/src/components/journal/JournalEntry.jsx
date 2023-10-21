import React, { useState } from "react";
import "./journal.css";

const JournalEntry = () => {
  const [createPressed, setCreatePressed] = useState(false);

  const ItemDisplay = () => {
    return (
      <>
        <div className="entry-display-box"></div>
      </>
    );
  };

  const ItemCreation = () => {
    return (
      <div className="creation-item-main">
        <div className="form-container">
          <div className="window-close">
            <button
              className="btn-close"
              onClick={() => {
                setCreatePressed((prev) => {
                  return !prev;
                });
              }}
            >
              X
            </button>
          </div>
          <form>
            <div className="inner-form">
              <div className="form-title">
                <div className="title-box">
                  <div className="title-header">Title:</div>
                  <input
                    type="text"
                    className="title-item"
                    name="title"
                  ></input>
                </div>
              </div>

              <div className="form-descr">
                <div className="descr-box">
                  <div className="desc-title">Description:</div>
                  <textarea
                    name="description"
                    id="description"
                    className="description"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="btn-list-sub">
              <button
                className="btn-cancel-entry"
                onClick={() => {
                  setCreatePressed((prev) => {
                    return !prev;
                  });
                }}
              >
                Cancel
              </button>
              <button className="btn-sub-entry">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="journal-container">
      <div className="journal-main">
        {/* for journal entry creation: */}
        <div className="create-item-options">
          <div className="btn-create-container">
            <button
              className="btn-entry-creation"
              onClick={() => {
                setCreatePressed((prev) => {
                  return !prev;
                });
              }}
            >
              + New Journal Entry
            </button>
          </div>
          {createPressed === true ? <ItemCreation></ItemCreation> : <></>}
        </div>
        {/* create the joural entry form: */}
        <div className="j-entry-form-container">
          <div className="entry-display-box">
            <div className="entry-details-box">
              <div className="entry-title-box">
                <div>
                  <h4>Title</h4>
                </div>
                <div className="rmv-entry">
                  <button className="btn-rmv-entry">X</button>
                </div>
              </div>
              <div className="entry-descr-box">
                <div className="entry-descr">
                  <p>
                    dni owandoiwa ndoaiwn daoinw dni owandoiwa ndoaiwn daoinw
                    daoinw dni owandoiwa ndoaiwn daoinw daoinw dni owandoiwa
                    ndoaiwn daoinw daoinw dni owandoiwa ndoaiwn daoinw{" "}
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="entry-details-box">
              <div className="entry-title-box">
                <div>
                  <h4>Title</h4>
                </div>
                <div className="rmv-entry">
                  <button className="btn-rmv-entry">X</button>
                </div>
              </div>
              <div className="entry-descr-box">
                <div className="entry-descr">
                  <p>
                    dni owandoiwa ndoaiwn daoinw dni owandoiwa ndoaiwn daoinw
                    daoinw dni owandoiwa ndoaiwn daoinw daoinw dni owandoiwa
                    ndoaiwn daoinw daoinw dni owandoiwa ndoaiwn daoinw{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* display journal entries: */}
        {/* use flex */}
      </div>
    </div>
  );
};

export default JournalEntry;
