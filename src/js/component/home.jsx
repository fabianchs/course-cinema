import React from "react";
import { useState } from "react";
import { Input, Button } from "reactstrap";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [search_status, setSearchStatus] = useState("");
	const [search_code, setSearchCode] = useState("");
	const [render_video, setRenderVideo] = useState("");

	const directions = {
		"1001": [
			"1917",
			"https://drive.google.com/file/d/1CQmyTfBOfPtwgf_0cmVgfgMuHnVMDwMK/preview"
		],
		"1383": [
			"37 segundos",
			"https://drive.google.com/file/d/1gBHOqjsBdzYZLJsPqV9DBWOHrYSCErND/preview"
		],
		"3341": [
			"El insulto",
			"https://drive.google.com/file/d/1HOzirgFDbU3OphPGyC3yhE1zCHorjqeM/preview"
		],
		"1820": [
			"El padre",
			"https://drive.google.com/file/d/1hfzMRzwMFaskRVnd_ku7GTxwBJf_GPPQ/preview"
		],
		"6295": [
			"El sonido del metal",
			"https://drive.google.com/file/d/1x3_pvwAEaUNmG8AfVjuYqUJpO9hJexTM/preview"
		],
		"0752": [
			"Habana Blues",
			"https://drive.google.com/file/d/1_CvT_Wevpp5XinN8Mo39BLcqqp19bNLe/preview"
		],
		"4984": [
			"Hidden Figures",
			"https://drive.google.com/file/d/1tqDI2HGMhrgiNXxkQCyk510X8-VeUow3/preview"
		],
		"2710": [
			"La La Land",
			"https://drive.google.com/file/d/1G5pQuM6Obk3kAZegoxd1qIpJcSotNvFs/preview"
		],
		"3931": [
			"Mulán",
			"https://drive.google.com/file/d/1l_BObOM6IRPg39tEyXqx0yc5cPzEBCPc/preview"
		],
		"2792": [
			"NomadLand",
			"https://drive.google.com/file/d/1bGA8-JQEfHy1b3rH07lD7KO3R0b4ccxC/preview"
		],
		"6441": [
			"Otra Ronda",
			"https://drive.google.com/file/d/1BcAuUKmU01RMWGixyE-cSETQEOY31uuJ/preview"
		],
		"0921": [
			"Parásitos",
			"https://drive.google.com/file/d/1oql5ThATONrhfMyEPblfjN9eyEG41oV4/preview"
		],
		"7930": [
			"Pequeños Detalles",
			"https://drive.google.com/file/d/1YDjqvHxEmoBg-QGuB3YDNfi6wsfNLE9C/preview"
		],
		"3840": [
			"Relatos salvajes",
			"https://drive.google.com/file/d/1Y3hYrzPcn-HfVtOBulQiLLU60B0Gsmox/preview"
		],
		"2229": [
			"Soul",
			"https://drive.google.com/file/d/1jl1uHhWS79kvUh12HewBEHqfo-r0hj9h/preview"
		],
		"8830": [
			"Your Name",
			"https://drive.google.com/file/d/1cDWTOJ3sTYnXBRzUtEjhOB_VI99fVbHY/preview"
		]
	};

	function doSearch() {
		let num = 1001;
		console.log(directions[search_code]);
		console.log(search_code);

		if (
			directions[search_code] === undefined ||
			directions[search_code] === null
		) {
			setSearchStatus(
				<small className="text-danger">
					Wow! Parece que no se encuentra ese código
				</small>
			);
			setRenderVideo("");
		} else {
			setSearchStatus(
				<small className="text-success">
					Has encontrado {directions[search_code][0]}!
				</small>
			);
			setRenderVideo(
				<iframe
					src={directions[search_code][1]}
					className="embed-responsive-item"
					allow="autoplay"
					allowFullScreen
				/>
			);
		}
	}

	return (
		<div className="mt-5">
			<div className="row container-fluid m-0 p-0">
				<h1 className="text-light col-12 d-flex justify-content-center">
					¡Apreciación de cine!
				</h1>
				<h6 className="text-light col-12 d-flex justify-content-center">
					Inserte el código de la película:
				</h6>
			</div>
			<div className="row container-fluid m-0 p-0 d-flex justify-content-center">
				<div className="col-xl-3 col-lg-4 col-md-5 col-sm-8 m-2">
					<div className="row m-0 p-0">
						<Input
							className="col-9"
							type="text"
							name="text"
							id="search"
							placeholder="Inserte el código"
							onChange={() => {
								setSearchCode(event.target.value);
							}}></Input>
						<Button
							className="col-3"
							color="secondary"
							onClick={() => {
								doSearch();
							}}>
							Buscar
						</Button>
						<div className="col-12">{search_status}</div>
					</div>
				</div>
			</div>
			<div className="row container-fluid m-0 p-0 d-flex justify-content-center">
				<div className="embed-responsive embed-responsive-16by9 col-11">
					{render_video}
				</div>
			</div>
		</div>
	);
};

export default Home;
