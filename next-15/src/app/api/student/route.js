import { connect } from '@/dbConfig';
import Student from '@/models/studentModel';
import { NextResponse } from 'next/server';

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, father_name, email, age } = reqBody;

    if (!name || !father_name || !email || !age) {
      return NextResponse.json({ error: 'All the fields are required' }, { status: 400 });
    }
    await Student.create({
      name,
      father_name,
      email,
      age,
    });
    return NextResponse.json(
      { message: 'Student Created Successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


