import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

export default function AddTask() {
  const router = useRouter();
  var username = 'RITchie';
  const [projecttitle, setProjectTitle] = useState('');
  const [projectdescription, setProjectDescription] = useState('');

const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(projecttitle,projectdescription);
    try {
      const response = await axios.post('http://localhost:4200/addproject', {username, projecttitle, projectdescription});
      
      console.log('Task added successfully:', response.data);

      setProjectTitle('');
      setProjectDescription('');

      router.push('/calendar');

    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    
    <div>
        <Head>
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
                rel="stylesheet" 
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
                crossorigin="anonymous">
            </link>
        </Head>
        <Navbar />
        <form onSubmit={handleSubmit} style={{ marginLeft: '20%', marginRight: '20%' }}>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style={{ marginTop: '100px' }}>Enter a Project Title</label>
            <input 
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Prepare for Algebra Exam"
                value={projecttitle}
                onChange={(e) => setProjectTitle(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Add a Project description</label>
            <textarea 
                class="form-control"
                placeholder="Algebra mid-term exam on 13th March. Following is the syllabus: details" 
                id="exampleFormControlTextarea1" 
                rows="3"
                value={projectdescription}
                onChange={(e) => setProjectDescription(e.target.value)}></textarea>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Build Schedule</button>
        </div>
        </form>
    </div>
  );
}
