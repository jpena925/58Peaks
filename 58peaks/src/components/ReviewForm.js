import React from 'react'

function ReviewForm({
  completedHike,
  handleFormSubmit,
  route,
  setRoute,
  duration,
  setDuration,
  image,
  setImage,
  review,
  setReview,
  setCompletedHike
}) {
  return (
    <div id='form-container'>
        {completedHike 
        ? <form onSubmit={handleFormSubmit}>
          <label for='route'>Route:</label><br/>
          <input type='text' id='route' name='route' value={route} onChange={(e) => setRoute(e.target.value)} /><br/>
          <label for='duration'>Hike Duration:</label><br/>
          <input type='text' id='duration' name='duration' value={duration} onChange={(e) => setDuration(e.target.value)}/><br/>
          <label for='image'>Image:</label><br/>
          <input type='text' id='image' name='image' value={image} onChange={(e) => setImage(e.target.value)}/><br/>
          <label for='review'>Review:</label><br/>
          <textarea type='text' id='review' name='review' value={review} onChange={(e) => setReview(e.target.value)}/>
        </form>
        : null  
      }
        <div></div>
        {completedHike 
        ? <button id='submit' onClick={handleFormSubmit} >Submit</button>
        : <button onClick={() => setCompletedHike(completedHike => !completedHike)} id='completed' >Completed Hike?</button> 
        } 
      </div>
  )
}

export default ReviewForm