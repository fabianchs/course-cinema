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
	const [download_link, setDownloadLink] = useState("");

	const directions = {
		"1001": [
			"1917",
			"https://drive.google.com/file/d/1CQmyTfBOfPtwgf_0cmVgfgMuHnVMDwMK/"
		],
		"1383": [
			"37 segundos",
			"https://drive.google.com/file/d/1gBHOqjsBdzYZLJsPqV9DBWOHrYSCErND/"
		],
		"2531": [
			"Belfast",
			"https://drive.google.com/file/d/1TZM89g2-09vZAT1Mg0Vdvze-JumXSuFj/"
		],
		"1622": [
			"Coda Los sonidos del silencio",
			"https://drive.google.com/file/d/1xnUr4n-4ErzK6DDTHfO5viDuBi8iVzTz/"
		],
		"5910": [
			"Drive my car",
			"https://drive.google.com/file/d/15McNAocX5aLjMymCEPoY1-1pKPaz_a20/"
		],
		"1723": [
			"La voz de la igualdad",
			"https://drive.google.com/file/d/1e3ErpzdCXlPYpY5xwokfUbDQoL54IzHr/"
		],
		"5488": [
			"Licorice Pizza",
			"https://drive.google.com/file/d/1Oivs6Mt1nlPYyNsSwDxOibsT2-NGVVme/"
		],
		"9227": [
			"Los ojos de Tammy Faye",
			"https://drive.google.com/file/d/1GtW1-aXJfdRsR9NBy1nT41YUeZh710vo/"
		],
		"3150": [
			"Mother",
			"https://drive.google.com/file/d/12pznFnMFWCHdkCJQ6LB3oiJZubRQFgmT/"
		],
		"3341": [
			"El insulto",
			"https://drive.google.com/file/d/1HOzirgFDbU3OphPGyC3yhE1zCHorjqeM/"
		],
		"5523": [
			"El laberinto del fauno",
			"https://drive.google.com/file/d/1yM9a_afQb_eoBOP4zQuedSvj2jOr0kn9/"
		],
		"1820": [
			"El padre",
			"https://drive.google.com/file/d/1hfzMRzwMFaskRVnd_ku7GTxwBJf_GPPQ/"
		],
		"6295": [
			"El sonido del metal",
			"https://drive.google.com/file/d/1x3_pvwAEaUNmG8AfVjuYqUJpO9hJexTM/"
		],
		"0752": [
			"Habana Blues",
			"https://drive.google.com/file/d/1_CvT_Wevpp5XinN8Mo39BLcqqp19bNLe/"
		],
		"4984": [
			"Hidden Figures",
			"https://drive.google.com/file/d/1tqDI2HGMhrgiNXxkQCyk510X8-VeUow3/"
		],
		"2710": [
			"La La Land",
			"https://drive.google.com/file/d/1G5pQuM6Obk3kAZegoxd1qIpJcSotNvFs/"
		],
		"2711": [
			"La La Land",
			"https://drive.google.com/file/d/1MlqHa-itjNSPB6mxVoQ_3IxEM2VHOsLd/"
		],
		"3931": [
			"Mul??n",
			"https://drive.google.com/file/d/1l_BObOM6IRPg39tEyXqx0yc5cPzEBCPc/"
		],
		"2792": [
			"NomadLand",
			"https://drive.google.com/file/d/1bGA8-JQEfHy1b3rH07lD7KO3R0b4ccxC/"
		],
		"6441": [
			"Otra Ronda",
			"https://drive.google.com/file/d/1BcAuUKmU01RMWGixyE-cSETQEOY31uuJ/"
		],
		"0921": [
			"Par??sitos",
			"https://drive.google.com/file/d/1oql5ThATONrhfMyEPblfjN9eyEG41oV4/"
		],
		"7930": [
			"Peque??os Detalles",
			"https://drive.google.com/file/d/1YDjqvHxEmoBg-QGuB3YDNfi6wsfNLE9C/"
		],
		"3840": [
			"Relatos salvajes",
			"https://drive.google.com/file/d/1Y3hYrzPcn-HfVtOBulQiLLU60B0Gsmox/"
		],
		"8055": [
			"Riders of justice",
			"https://drive.google.com/file/d/1BndqgKDDJX2l7jQD-1SnF3nQgUMyhsRg/"
		],
		"2229": [
			"Soul",
			"https://drive.google.com/file/d/1jl1uHhWS79kvUh12HewBEHqfo-r0hj9h/"
		],
		"8830": [
			"Your Name",
			"https://drive.google.com/file/d/1cDWTOJ3sTYnXBRzUtEjhOB_VI99fVbHY/"
		],
		"9283": [
			"Joker",
			"https://drive.google.com/file/d/19SBg3bBTQfu8M3tUEKeOve5AmLnB5788/"
		],
		"1902": [
			"Jojo Rabbit",
			"https://drive.google.com/file/d/1QVoDEaldDP_rMRJBKFhPFt-MepBK3CaE/"
		]
	};

	function doSearch() {
		if (
			directions[search_code] === undefined ||
			directions[search_code] === null
		) {
			setSearchStatus(
				<small className="text-danger">
					Wow! Parece que no se encuentra ese c??digo
				</small>
			);
			setDownloadLink("");
			setRenderVideo("");
		} else {
			setSearchStatus(
				<small className="text-success">
					Has encontrado {directions[search_code][0]}!
				</small>
			);
			setRenderVideo(
				<iframe
					src={directions[search_code][1] + "preview"}
					className="embed-responsive-item"
					allow="autoplay"
					allowFullScreen
				/>
			);
			setDownloadLink(
				<a
					href={directions[search_code][1] + "view"}
					target="_blank"
					rel="noreferrer">
					Descargar {directions[search_code][0]} aqu??
				</a>
			);
		}
	}

	return (
		<div className="mt-5">
			<div className="row container-fluid m-0 p-0">
				<h1 className="text-light col-12 d-flex justify-content-center">
					??Apreciaci??n de cine!
				</h1>
				<h6 className="text-light col-12 d-flex justify-content-center">
					Inserte el c??digo de la pel??cula:
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
							placeholder="Inserte el c??digo"
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
				{download_link}
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
