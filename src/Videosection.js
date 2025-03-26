// components/PlaylistSection.jsx
import React from 'react';
import './Videosection.css';
import v1 from './v1.png';
import v2 from './v2.png';
import v3 from './v3.png';
import v4 from './v4.png';
const playlists = [
  { title: "Video 1", desc: "Description of Video", image: v1 },
  { title: "Video 2", desc: "Description of Video", image: v2 },
  { title: "Video 3", desc: "Description of Video", image: v3 },
  { title: "Video 4", desc: "Description of Video", image: v4 },
];

export default function PlaylistSection() {
  return (
    <div className="section-container">
      <h2>Title</h2>
      <p className="subheading">Subheading</p>
      <div className="card-grid">
        {playlists.map((p, idx) => (
          <div className="card" key={idx}>
            <img src={p.image} alt={p.title} />
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
