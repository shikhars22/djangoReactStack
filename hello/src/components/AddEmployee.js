import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        variant="primary" 
        onClick={handleShow}
        className="block mx-auto m-2 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
        + Add Employee
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form 
            onSubmit={(e) => {
                    e.preventDefault();
                    setName('');
                    setRole('');
                    setImg('');
                    props.NewEmployee(name, role, img);
                }
            } 
            id='editmodal' 
            className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    for="name">
                        Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="name" 
                        type="text" 
                        placeholder='Arjun Kumar Tandooriwala'
                        value={name}
                        onChange={(e) => {
                               setName(e.target.value)
                            }
                        }
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    for="role">
                        Role
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="role" 
                        type="text" 
                        placeholder='Sr. Developer'
                        value={role}
                        onChange={(e) => {
                               setRole(e.target.value)
                            }
                        }
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    for="img">
                        Image URL
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="img" 
                        type="text" 
                        placeholder='https://www.google.com/'
                        value={img}
                        onChange={(e) => {
                               setImg(e.target.value)
                            }
                        }
                    />
                </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button 
          className='bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded'
          onClick={handleClose}>
            Close
          </button>
          <button 
          className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded' 
          form='editmodal'
          onClick={handleClose}>
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;