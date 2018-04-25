import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeModal } from '../actions/confirmationModal';
import { startRemoveExpense } from '../actions/expenses';

export const ConfirmationModal = ({
  modalIsOpen,
  handleRequestClose,
  startRemoveExpense,
  selectedExpense = {},
  history
}) => (
    <Modal
      className="modal"
      isOpen={modalIsOpen}
      contentLabel="Confirmation Modal"
      onRequestClose={handleRequestClose}
      closeTime={200}
      ariaHideApp={false}
    >
      <h2 className="modal__title">Confirmation</h2>
      <p className="modal__body">
        Are you sure to delete '{<span>{selectedExpense.description}</span>}' item?
    </p>
      <div className="modal__answers">
        <button
          className="btn"
          onClick={() => {
            startRemoveExpense(selectedExpense.id)
              .then(() => {
                handleRequestClose();
                history.push('/');
              })
          }}
        >Yes</button>
        <button className="btn" onClick={handleRequestClose}>No</button>
      </div>
    </Modal>
  );

const mapStateToProps = state => ({
  modalIsOpen: state.ModalIsOpen
});

const mapDispatchToProps = dispatch => ({
  handleRequestClose: () => dispatch(closeModal()),
  startRemoveExpense: id => dispatch(startRemoveExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationModal);