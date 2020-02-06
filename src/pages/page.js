import React, { Component } from "react";
import { Hero, Image, Container } from "../components";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
	accessToken: "fBBlGUH5Sfj3r2HuM3XXpAtt",
	cache: {
		clear: "auto",
		type: "memory"
	}
});

class Page extends Component {
	state = { pages: [] };

	componentDidMount() {
		this.getPagesFromStoryblok();
	}

	getPagesFromStoryblok = () => {
		Storyblok.get("cdn/stories", {
			starts_with: "projects/"
		})
			.then(pagesResponse => {
				this.handleReportData(pagesResponse);
			})
			.catch(error => {
				if (error.pagesResponse && error.pagesResponse.status === 404) {
					this.getPagesFromStoryblok();
				} else console.error(error);
			});
	};

	handleReportData = pagesResponse => {
		const { stories } = pagesResponse.data;
		if (stories) {
			const pages = stories;
			this.setState({
				pages
			});
			console.log(pages[1].content.gallery[0].image)
		}
	};

	render() {
		const pagePath = window.location.pathname.replace(/^\/|\/$/g, '')
		
		return (
			<>
				{this.state.pages.length > 0 && (
					<>
						{this.state.pages.map(page => ( 
							<div key={page.id}>
								{page.full_slug === pagePath && ( 
                  <>
                    <Hero
                      img={page.content.hero_image}
                      title={page.name}
                      desc={page.content.description}
                    />
										<Container>
											{page.content.gallery && (
												<>
													<h3>Gallery</h3>
													<div className="g--grid">
														{page.content.gallery.map(image => (
															<div key={image._uid} className="g--grid__col g--grid__col--6">
																<Image img={image.image} />
															</div>
														))}
													</div>
												</>
											)}
										</Container>
                  </>
								)}
							</div>
						))}
					</>
				)}
			</>
		);
	}
}

export default Page;
