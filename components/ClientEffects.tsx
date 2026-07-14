"use client";
import {useEffect,useState} from "react";
export function WordCycle(){const words=["clareza.","estrutura.","velocidade.","escala."];const[index,setIndex]=useState(0);useEffect(()=>{const timer=setInterval(()=>setIndex(v=>(v+1)%words.length),2200);return()=>clearInterval(timer)},[]);return <span key={words[index]} className="wordCycle">{words[index]}</span>}
export function RevealObserver(){useEffect(()=>{const items=document.querySelectorAll("[data-reveal]");const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("isVisible");obs.unobserve(e.target)}}),{threshold:.12});items.forEach(i=>obs.observe(i));return()=>obs.disconnect()},[]);return null}
