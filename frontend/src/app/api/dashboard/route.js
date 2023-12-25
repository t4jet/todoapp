import { NextResponse } from "next/server";

export async function GET(request) {
  const task = [{
    id: 1,
    name: "掃除",
  },
  {
    id:2,
    name: "お風呂",
  },
  {
    id:3,
    name: "課題",
  }]  
  return NextResponse.json(
    { data: task, status: 200 }
  );
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json(
    { body:body.name,status: 200 }
  );
}
