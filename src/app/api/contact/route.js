import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    //basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    //email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

  
    //save to database (soon)



    //send email (soon)




    //log to file (soon?)



    //send to external service (soon?)




    //test
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    
    return NextResponse.json({ 
      message: 'Message sent successfully!',
      success: true 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

//handle other HTTP methods (?)
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working!' },
    { status: 200 }
  );
}