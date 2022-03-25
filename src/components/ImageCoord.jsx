import React from "react";
import img from "./16911.jpeg"
import ImageCard from "./ImageCard";

export default function ImageCoord()
{
    return(
        <div className="Team">
            <ImageCard iname = {"goutham teamimages"} cls = "coord" name = {"Dr Goutham Reddy"} source = {img} Designation = {"Faculty Coordinator"} />
            <h1>CSEA Team</h1>
            <ImageCard iname = {"goutham teamimages"} cls = "secretary" name = {"Akanksha"} source = {img} Designation = {"Secretary"} />
            <div className="snsj">
                <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                 
            </div>
            <div className="alumni">
                <h1>Alumni</h1>
                <div className="snsj">
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} /> 
                </div>
                <div className="snsj">
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} /> 
                </div>
            </div>
            <div className="developers">
                <h1>Web Developers</h1>
                <div className="dev">
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} /> 
                </div>
                <div className="dev">
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} />
                    <ImageCard iname = {"member teamimages"} cls = "mem" name = {"Akanksha"} source = {img} Designation = {"Joint Secretary"} /> 
                </div>
            </div>
        </div>
    )
}