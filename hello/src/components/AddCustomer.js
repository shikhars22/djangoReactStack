import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function AddCustomer(props) {
	const [name, setName] = useState('');
	const [industry, setIndustry] = useState('');

	// const [show, setShow] = useState(props.show);

	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	return (
		<>
			<button
				variant='primary'
				onClick={props.toggleShow}
				className='block m-2 bg-purple-500 hover:bg-purple-400 
				text-white font-bold py-2 px-4
				border-b-4 border-purple-700 hover:border-purple-500 rounded'>
				+ Add Customer
			</button>
			<Modal
				show={props.show}
				onHide={props.toggleShow}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Add customer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							setName('');
							setIndustry('');
							props.NewCustomer(name, industry);
						}}
						id='editmodal'
						className='w-full max-w-sm'>
						<div className='md:flex md:items-center mb-6'>
							<div className='md:w-1/3'>
								<label
									className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
									htmlFor='name'>
									Name
								</label>
							</div>
							<div className='md:w-2/3'>
								<input
									className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
									id='name'
									type='text'
									placeholder='Zara'
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className='md:flex md:items-center mb-6'>
							<div className='md:w-1/3'>
								<label
									className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
									htmlFor='industry'>
									Industry
								</label>
							</div>
							<div className='md:w-2/3'>
								<input
									className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
									id='industry'
									type='text'
									placeholder='Fashion'
									value={industry}
									onChange={(e) => {
										setIndustry(e.target.value);
									}}
								/>
							</div>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<button
						className='bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded'
						onClick={props.toggleShow}>
						Close
					</button>
					<button
						className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded'
						form='editmodal'>
						Add
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
