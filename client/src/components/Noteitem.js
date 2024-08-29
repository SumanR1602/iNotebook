import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import edit_logo from '../images/edit_logo.svg'
import delete_logo from '../images/delete_logo.svg'
export default function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    const truncateDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return {
                short: text.slice(0, maxLength) + ' ',
                full: text
            };
        }
        return {
            short: text,
            full: text
        };
    }
    const [isDescExpanded, setIsDescExpanded] = useState(false);
    const { short, full } = truncateDescription(note.description, 300);

    const splitTags = (note) => {
        if (note && note.tag) {
            return note.tag.split(',').map(t => t.trim()).filter(t => t.length > 0);
        }
        return [];
    }

    const [isTagsExpanded, setIsTagsExpanded] = useState(false);
    const arrTags = splitTags(note);
    const maxTagsToShow = 5
    const tagsToShow = isTagsExpanded ? arrTags : arrTags.slice(0, maxTagsToShow);
    const remainingTagsCount = arrTags.length - maxTagsToShow;

    return (
        <div className="col-md-3">
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title" style={{ paddingLeft: "3px" }}>{note.title}</h5>
                    <p className="card-text" style={{ paddingLeft: "3px" }}>
                        {isDescExpanded ? full : short}
                        {short !== full && (
                            <p style={{ color: "blue", textDecoration: "underline", cursor: "pointer", maxHeight: "3em" }} onClick={() => setIsDescExpanded(!isDescExpanded)}>
                                {isDescExpanded ? ' Show Less' : ' Read More'}
                            </p>
                        )}
                    </p>
                    <p className="card-text d-flex flex-wrap">
                        {tagsToShow.map((tag, index) => (
                            <button key={`${note._id}-${index}`} className='btn-tag-custom'>{tag}</button>
                        ))}
                        {!isTagsExpanded && remainingTagsCount > 0 && (
                            <span style={{ color: "lightseagreen", margin: "auto 0.5rem", fontSize: "1rem", textDecoration: "underline", cursor: 'pointer', textUnderlineOffset: "4px" }} onClick={() => setIsTagsExpanded(true)}>+ {remainingTagsCount} more</span>
                        )}
                        {isTagsExpanded && (
                            <span style={{ color: "lightseagreen", margin: "auto 0.5rem", fontSize: "1rem", textDecoration: "underline", cursor: 'pointer', textUnderlineOffset: "4px" }} onClick={() => setIsTagsExpanded(false)}>Show Less</span>
                        )}
                    </p>
                    <div className="d-flex justify-content-between">
                        <button className='btn me-3' style={{ border: "none" }} onClick={() => { updateNote(note) }}>
                            <img src={edit_logo} alt="Edit" style={{ width: "2.2rem" }} />
                        </button>
                        <button className='btn me-2' style={{ border: "none" }} onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success") }}>
                            <img src={delete_logo} alt="Delete" style={{ width: "2.4rem" }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
