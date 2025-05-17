"use client"

import { useState } from "react"

const InviteForm = ({ onSubmit, onCancel }) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Email is required")
      return
    }

    onSubmit(email)
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Invite User</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="email">User Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter user email"
              required
            />
          </div>
          <div style={styles.buttonGroup}>
            <button type="button" onClick={onCancel} style={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" style={styles.submitButton}>
              Invite
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    width: "400px",
    maxWidth: "90%",
  },
  title: {
    marginBottom: "20px",
    color: "#4a3a30", // warm dark brown
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  cancelButton: {
    padding: "8px 16px",
    backgroundColor: "#e6e1da", // muted beige
    color: "#4a3a30", // rich brown
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  submitButton: {
    padding: "8px 16px",
    backgroundColor: "#b46e53", // earthy terracotta
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "#a94442", // warm red
    marginBottom: "15px",
  },
};


export default InviteForm
